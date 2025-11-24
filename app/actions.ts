"use server";

import { z } from "zod";
import { Resend } from "resend";
import { headers } from "next/headers";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";

const resend = new Resend(process.env.RESEND_API_KEY);
const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(3, "1 m"), 
});
const formSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().trim().email({ message: "Please enter a valid email address." }),
  subject: z.string().trim().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters." }),
  _gotcha: z.string().optional(),
});
export type FormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  inputs?: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
};

export async function sendContactEmail(

  formData: FormData
): Promise<FormState> {
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") || "127.0.0.1";
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
    _gotcha: formData.get("_gotcha") as string, 
  };
  if (process.env.KV_REST_API_URL) {
    const { success } = await ratelimit.limit(ip);
    if (!success) {
      return {
        success: false,
        message: "Too many requests. Please try again in a minute.",
        inputs: rawData,
      };
    }
  }
  if (rawData._gotcha) {
    return {
      success: true,
      message: "Email sent successfully!",
      inputs: { name: "", email: "", subject: "", message: "" },
    };
  }

  try {
    const validatedFields = formSchema.safeParse(rawData);

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Please fix the errors below.",
        errors: validatedFields.error.flatten().fieldErrors,
        inputs: rawData,
      };
    }

    const { name, email, subject, message } = validatedFields.data;
    const { error } = await resend.emails.send({
      from: "Portfolio Form <onboarding@resend.dev>", 
      to: "nithinjosephvarghese@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: system-ui, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #2563eb;">New Inquiry</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="white-space: pre-wrap; font-size: 16px;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      throw new Error("Email service unavailable");
    }

    return {
      success: true,
      message: "Thanks for reaching out! I'll get back to you shortly.",
      inputs: { name: "", email: "", subject: "", message: "" },
    };

  } catch (error) {
    console.error("Submission Error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
      inputs: rawData,
    };
  }
}