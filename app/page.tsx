import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { SmoothScroll } from "@/components/smooth-scroll"
import { HeroSection } from "@/components/hero-section"
import {
  AnimatedSection,
  AnimatedCard,
  ParticleBackground,
  AnimatedGradientBackground
} from "@/components/client-animations"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />
      <ScrollIndicator />
      <SmoothScroll />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">About Me</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Full Stack Engineer specializing in High-Performance Web Applications and AI-Powered Systems. I drive business value by blending expertise in the modern web stack (Next.js, Svelte, PostgreSQL, Node.js/Django) with cutting-edge Generative AI and Agentic AI technologies.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  My focus is on developing and deploying SEO-optimized, production-ready platforms that guarantee exceptional performance and strict data compliance
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  I have proven expertise in developing Agentic AI systems using LangGraph (reducing manual task execution) and implementing Gen AI/LLM solutions by leveraging OpenAI GPT-5, pgvector, Ollama, and RAG.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Key Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Modern Full Stack Development
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Generative AI & Agentic AI Systems</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">DevOps, Cloud & Infrastructure</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Performance & SEO Optimization</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Database & ORM Proficiency</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">Professional Experience</h2>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Full Stack Developer</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Nesa Software</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">January 2025 - July 2025</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>
                    Developed dynamic, SEO-focused websites leveraging Next.js and Svelte, integrating robust backend capabilities and optimizing performance for high search engine visibility and faster load times.
                  </li>
                  <li>
                    Collaborated to design and implement an AI-powered chatbot using Ollama and RAG (Retrieval-Augmented Generation), with the solution built on a Python backend and Next.js frontend.
                  </li>
                  <li>
                    Successfully improved overall user engagement and SEO rankings by optimizing website performance and ensuring fast load times across projects.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">MERN Stack Developer</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Techglitz Global Private Limited</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">July 2023 - January 2024</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Developed a full-stack healthcare platform using Next.js and Node.js to deliver responsive front-ends, secure RESTful APIs, and automated administrative tasks that improved hospital and clinic workflow productivity by 27%.</li>
                  <li>Architected a robust RESTful API on Node.js to handle secure data interactions with a MongoDB backend, and implemented essential user validation and permissions for the Next.js front-end, successfully supporting the continuous, high-volume operations of hospital and clinic workflows.</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">Featured Projects</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-black dark:text-white">
                <CardHeader>
                  <CardTitle>AI Agent using Django, LangGraph and permit</CardTitle>
                  <CardDescription>Utility-Based Agents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/placeholder.svg?height=240&width=400"
                      alt="AI Agent"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Engineered an AI agent leveraging Django, LangGraph, and a fine-grained permission system to automate complex workflow processes
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      LangGraph
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      permit.io
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      Python
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      LLM
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-black dark:text-white">
                <CardHeader>
                  <CardTitle>Privacy First Analytics Dashboard</CardTitle>
                  <CardDescription>Analytics Dashboards with AI insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image src="/placeholder.svg?height=240&width=400" alt="Authentrix" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Developed a privacy-first Analytics Platform (Next.js 16/PostgreSQL) that features AI-Powered Insights for Natural Language Queries, leveraging OpenAI GPT-5 and pgvector for RAG.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      RAG
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      RBAC
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      CI/CD
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      GDPR Compliance
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 relative overflow-hidden bg-[#F7F8FA] dark:bg-[#0A1A2F]"
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: '#3A7BFF' }}
          />
          <div
            className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: '#11C5A8' }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{ backgroundColor: '#D6A84B' }}
          />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl font-bold mb-4 text-[#0A1A2F] dark:text-[#F7F8FA]"
              >
                Technical Skills
              </h2>
              <div
                className="w-24 h-1 mx-auto rounded-full bg-[#3A7BFF] dark:bg-[#11C5A8]"
              />
            </div>
          </AnimatedSection>

          {/* Main Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Frontend Card */}
            <AnimatedSection direction="up" delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm hover:-translate-y-1 bg-white dark:bg-[#1F242D] rounded-2xl overflow-hidden group">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(58, 123, 255, 0.05) 0%, rgba(58, 123, 255, 0.02) 100%)'
                  }}
                />
                <CardHeader>
                  <CardTitle
                    className="flex items-center text-[#0A1A2F] dark:text-[#F7F8FA]"
                  >
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center mr-3 shadow-sm"
                      style={{ backgroundColor: 'rgba(58, 123, 255, 0.1)' }}
                    >
                      <span
                        className="text-base font-bold"
                        style={{ color: '#3A7BFF' }}
                      >
                        UI
                      </span>
                    </span>
                    Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-3 px-4 hover:shadow-md bg-[rgba(58,123,255,0.08)] dark:bg-[rgba(58,123,255,0.15)] text-[#0A1A2F] dark:text-[#F7F8FA] border-l-[3px] border-l-[#3A7BFF]"
                    >
                      NextJS / ReactJS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-3 px-4 hover:shadow-md bg-[rgba(58,123,255,0.08)] dark:bg-[rgba(58,123,255,0.15)] text-[#0A1A2F] dark:text-[#F7F8FA] border-l-[3px] border-l-[#3A7BFF]"
                    >
                      Svelte and Sveltekit
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-3 px-4 hover:shadow-md bg-[rgba(58,123,255,0.08)] dark:bg-[rgba(58,123,255,0.15)] text-[#0A1A2F] dark:text-[#F7F8FA] border-l-[3px] border-l-[#3A7BFF]"
                    >
                      AstroJS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-3 px-4 hover:shadow-md bg-[rgba(58,123,255,0.08)] dark:bg-[rgba(58,123,255,0.15)] text-[#0A1A2F] dark:text-[#F7F8FA] border-l-[3px] border-l-[#3A7BFF]"
                    >
                      TailwindCSS
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Backend Card */}
            <AnimatedSection direction="up" delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm hover:-translate-y-1 bg-white dark:bg-[#1F242D] rounded-2xl overflow-hidden group">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(17, 197, 168, 0.05) 0%, rgba(17, 197, 168, 0.02) 100%)'
                  }}
                />
                <CardHeader>
                  <CardTitle
                    className="flex items-center text-[#0A1A2F] dark:text-[#F7F8FA]"
                  >
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center mr-3 shadow-sm"
                      style={{ backgroundColor: 'rgba(17, 197, 168, 0.1)' }}
                    >
                      <span
                        className="text-base font-bold"
                        style={{ color: '#11C5A8' }}
                      >
                        DEV
                      </span>
                    </span>
                    Backend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-3 px-4 hover:shadow-md bg-[rgba(17,197,168,0.08)] dark:bg-[rgba(17,197,168,0.15)] text-[#0A1A2F] dark:text-[#F7F8FA] border-l-[3px] border-l-[#11C5A8]"
                    >
                      Express.js
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-3 px-4 hover:shadow-md bg-[rgba(17,197,168,0.08)] dark:bg-[rgba(17,197,168,0.15)] text-[#0A1A2F] dark:text-[#F7F8FA] border-l-[3px] border-l-[#11C5A8]"
                    >
                      Node.js
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-3 px-4 hover:shadow-md bg-[rgba(17,197,168,0.08)] dark:bg-[rgba(17,197,168,0.15)] text-[#0A1A2F] dark:text-[#F7F8FA] border-l-[3px] border-l-[#11C5A8]"
                    >
                      Django
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-3 px-4 hover:shadow-md bg-[rgba(17,197,168,0.08)] dark:bg-[rgba(17,197,168,0.15)] text-[#0A1A2F] dark:text-[#F7F8FA] border-l-[3px] border-l-[#11C5A8]"
                    >
                      Django REST Framework
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Database Card */}
            <AnimatedSection direction="up" delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm hover:-translate-y-1 bg-white dark:bg-[#1F242D] rounded-2xl overflow-hidden group">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(214, 168, 75, 0.05) 0%, rgba(214, 168, 75, 0.02) 100%)'
                  }}
                />
                <CardHeader>
                  <CardTitle
                    className="flex items-center text-[#0A1A2F] dark:text-[#F7F8FA]"
                  >
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center mr-3 shadow-sm"
                      style={{ backgroundColor: 'rgba(214, 168, 75, 0.1)' }}
                    >
                      <span
                        className="text-base font-bold"
                        style={{ color: '#D6A84B' }}
                      >
                        DATA
                      </span>
                    </span>
                    Database and ORM
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-3 px-4 hover:shadow-md bg-[rgba(214,168,75,0.08)] dark:bg-[rgba(214,168,75,0.15)] text-[#0A1A2F] dark:text-[#F7F8FA] border-l-[3px] border-l-[#D6A84B]"
                    >
                      MongoDB
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-3 px-4 hover:shadow-md bg-[rgba(214,168,75,0.08)] dark:bg-[rgba(214,168,75,0.15)] text-[#0A1A2F] dark:text-[#F7F8FA] border-l-[3px] border-l-[#D6A84B]"
                    >
                      PostgreSQL
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-3 px-4 hover:shadow-md bg-[rgba(214,168,75,0.08)] dark:bg-[rgba(214,168,75,0.15)] text-[#0A1A2F] dark:text-[#F7F8FA] border-l-[3px] border-l-[#D6A84B]"
                    >
                      MySQL
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-3 px-4 hover:shadow-md bg-[rgba(214,168,75,0.08)] dark:bg-[rgba(214,168,75,0.15)] text-[#0A1A2F] dark:text-[#F7F8FA] border-l-[3px] border-l-[#D6A84B]"
                    >
                      Prisma
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* DevOps Card */}
            <AnimatedSection direction="up" delay={0.5}>
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm hover:-translate-y-1 bg-white dark:bg-[#1F242D] rounded-2xl overflow-hidden group">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(31, 36, 45, 0.05) 0%, rgba(31, 36, 45, 0.02) 100%)'
                  }}
                />
                <CardHeader>
                  <CardTitle
                    className="flex items-center text-[#0A1A2F] dark:text-[#F7F8FA]"
                  >
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center mr-3 shadow-sm"
                      style={{ backgroundColor: 'rgba(31, 36, 45, 0.1)' }}
                    >
                      <span
                        className="text-base font-bold"
                        style={{ color: '#1F242D' }}
                      >
                        OPS
                      </span>
                    </span>
                    DevOps & Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-3 px-4 hover:shadow-md bg-[rgba(31,36,45,0.08)] dark:bg-[rgba(206,210,217,0.15)] text-[#0A1A2F] dark:text-[#F7F8FA] border-l-[3px] border-l-[#1F242D] dark:border-l-[#CED2D9]"
                    >
                      AWS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-3 px-4 hover:shadow-md bg-[rgba(31,36,45,0.08)] dark:bg-[rgba(206,210,217,0.15)] text-[#0A1A2F] dark:text-[#F7F8FA] border-l-[3px] border-l-[#1F242D] dark:border-l-[#CED2D9]"
                    >
                      CI/CD Pipelines
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-3 px-4 hover:shadow-md bg-[rgba(31,36,45,0.08)] dark:bg-[rgba(206,210,217,0.15)] text-[#0A1A2F] dark:text-[#F7F8FA] border-l-[3px] border-l-[#1F242D] dark:border-l-[#CED2D9]"
                    >
                      Docker
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-3 px-4 hover:shadow-md bg-[rgba(31,36,45,0.08)] dark:bg-[rgba(206,210,217,0.15)] text-[#0A1A2F] dark:text-[#F7F8FA] border-l-[3px] border-l-[#1F242D] dark:border-l-[#CED2D9]"
                    >
                      Git/GitHub
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Additional Skills Section */}
          <AnimatedSection delay={0.6}>
            <div className="mt-16 text-center">
              <h3
                className="text-2xl font-semibold mb-8 text-[#0A1A2F] dark:text-[#F7F8FA]"
              >
                Additional Technologies
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge
                  variant="outline"
                  className="px-6 py-3 text-sm font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 bg-[rgba(58,123,255,0.05)] dark:bg-[rgba(58,123,255,0.1)] border-[#3A7BFF] text-[#0A1A2F] dark:text-[#F7F8FA]"
                >
                  Cursor
                </Badge>
                <Badge
                  variant="outline"
                  className="px-6 py-3 text-sm font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 bg-[rgba(17,197,168,0.05)] dark:bg-[rgba(17,197,168,0.1)] border-[#11C5A8] text-[#0A1A2F] dark:text-[#F7F8FA]"
                >
                  Windsurf
                </Badge>
                <Badge
                  variant="outline"
                  className="px-6 py-3 text-sm font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 bg-[rgba(214,168,75,0.05)] dark:bg-[rgba(214,168,75,0.1)] border-[#D6A84B] text-[#0A1A2F] dark:text-[#F7F8FA]"
                >
                  LangChain
                </Badge>
                <Badge
                  variant="outline"
                  className="px-6 py-3 text-sm font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 bg-[rgba(58,123,255,0.05)] dark:bg-[rgba(58,123,255,0.1)] border-[#3A7BFF] text-[#0A1A2F] dark:text-[#F7F8FA]"
                >
                  RAG
                </Badge>
                <Badge
                  variant="outline"
                  className="px-6 py-3 text-sm font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 bg-[rgba(17,197,168,0.05)] dark:bg-[rgba(17,197,168,0.1)] border-[#11C5A8] text-[#0A1A2F] dark:text-[#F7F8FA]"
                >
                  Agentic AI
                </Badge>
                <Badge
                  variant="outline"
                  className="px-6 py-3 text-sm font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 bg-[rgba(214,168,75,0.05)] dark:bg-[rgba(214,168,75,0.1)] border-[#D6A84B] text-[#0A1A2F] dark:text-[#F7F8FA]"
                >
                  Gen AI
                </Badge>
                <Badge
                  variant="outline"
                  className="px-6 py-3 text-sm font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 bg-[rgba(31,36,45,0.05)] dark:bg-[rgba(206,210,217,0.1)] border-[#1F242D] dark:border-[#CED2D9] text-[#0A1A2F] dark:text-[#F7F8FA]"
                >
                  Prompt Engineering
                </Badge>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">Certifications</h2>
          </AnimatedSection>
          <div>
            <AnimatedSection direction="right" delay={0.3}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold text-black dark:text-white">Certified MERN Stack Developer - Techwingsys</h4>
                  <p className="text-gray-600 dark:text-gray-400">MongoDB, Express, React, NodeJS</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold text-black dark:text-white">Advanced Practical JavaScript - CodeDamn</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Deep dive into JavaScript concepts and applications
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold text-black dark:text-white">AI Tools Mastery - SkillNation</h4>
                  <p className="text-gray-600 dark:text-gray-400">Master modern AI tools to maximize efficiency and innovation.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">Get In Touch</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-black dark:text-white">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="mailto:nithinjosephvarghese@gmail.com"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      nithinjosephvarghese@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Linkedin className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="https://www.linkedin.com/in/nithin-joseph-4b1753199/"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Github className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="https://github.com/NithinJosephVarghese13"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out!
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 dark:bg-gray-950 text-white relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Nithin Joseph Varghese</h2>
              <p className="text-gray-400">Full Stack Developer</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/nithin-joseph-4b1753199/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/NithinJosephVarghese13"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:nithinjosephvarghese@gmail.com"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Nithin Joseph Varghese. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
