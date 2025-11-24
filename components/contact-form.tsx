"use client"

import { useActionState } from "react" 
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { sendContactEmail, type FormState } from "@/app/actions"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

const initialState = {
  success: false,
  message: "",
  inputs: {
    name: "",
    email: "",
    subject: "",
    message: "",
  },
}

export function ContactForm() {
  const { toast } = useToast()
  const [state, action, isPending] = useActionState(
    async (_prev: FormState, formData: FormData) => {
      return await sendContactEmail(formData)
    },
    initialState
  )
  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Message sent!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      })
    }
  }, [state, toast])

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } },
  }

  return (
    <motion.form
      className="space-y-4"
      action={action} 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input 
        type="text" 
        name="_gotcha" 
        style={{ display: "none" }} 
        tabIndex={-1} 
        autoComplete="off" 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-black dark:text-white">
            Name
          </label>
          <motion.input
            id="name"
            name="name" 
            type="text"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A7BFF] dark:bg-gray-800 text-gray-500"
            placeholder="Your Name"
            required
            defaultValue={state.inputs?.name} 
            whileFocus="focus"
            variants={inputVariants}
          />
          {state.errors?.name && (
            <p className="text-red-500 text-xs">{state.errors.name[0]}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-black dark:text-white">
            Email
          </label>
          <motion.input
            id="email"
            name="email"
            type="email"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A7BFF] dark:bg-gray-800 text-gray-500"
            placeholder="Your Email"
            required
            defaultValue={state.inputs?.email}
            whileFocus="focus"
            variants={inputVariants}
          />
          {state.errors?.email && (
            <p className="text-red-500 text-xs">{state.errors.email[0]}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-black dark:text-white">
          Subject
        </label>
        <motion.input
          id="subject"
          name="subject"
          type="text"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A7BFF] dark:bg-gray-800 text-gray-500"
          placeholder="Subject"
          required
          defaultValue={state.inputs?.subject}
          whileFocus="focus"
          variants={inputVariants}
        />
        {state.errors?.subject && (
          <p className="text-red-500 text-xs">{state.errors.subject[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-black dark:text-white">
          Message
        </label>
        <motion.textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A7BFF] dark:bg-gray-800 text-gray-500"
          placeholder="Your Message"
          required
          defaultValue={state.inputs?.message}
          whileFocus="focus"
          variants={inputVariants}
        ></motion.textarea>
        {state.errors?.message && (
          <p className="text-red-500 text-xs">{state.errors.message[0]}</p>
        )}
      </div>

      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Button 
          type="submit" 
          className="w-full relative overflow-hidden group cursor-pointer text-black dark:text-white" 
          disabled={isPending} 
        >
          <span className="relative z-10">{isPending ? "Sending..." : "Send Message"}</span>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        </Button>
      </motion.div>
    </motion.form>
  )
}