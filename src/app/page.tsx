"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import Hero3DScene from "@/components/Hero3D"
import { motion } from "framer-motion"
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  scaleOnHover,
  headerAnimation,
  logoHover,
  navItemAnimation,
  headerButtonAnimation,
  hero3DAnimation,
  projectCardHover,
  projectImageHover,
  badgeAnimation,
  linkHover,
  iconSpinHover,
  serviceCardAnimation,
  serviceIconHover,
  faqCardAnimation,
  contactItemHover,
  formInputFocus,
  footerAnimation,
  skillCardAnimation,
  viewAllProjectsAnimation,
  animationProps,
  staggerProps
} from "../lib/animations"
import {
  Code,
  Laptop,
  Smartphone,
  Database,
  Layout,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  ExternalLink,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <motion.header {...headerAnimation} className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <motion.div className="flex items-center gap-2" {...logoHover}>
            <Image src="/logo_1.png" alt="Dio's Digital Solutions Logo" width={24} height={24} className="dark:hidden" />
            <Image src="/logo.png" alt="Dio's Digital Solutions Logo" width={24} height={24} className="hidden dark:block" />            
            <span className="text-xl font-bold">Dio&apos;s Digital Solutions</span>
          </motion.div>
          <nav className="hidden md:flex gap-6">
            {["About", "Projects", "Services", "FAQ", "Contact"].map((item, index) => (
              <motion.div key={item} {...navItemAnimation(index)}>
                <Link href={`#${item.toLowerCase()}`} className="text-sm font-medium transition-colors hover:text-primary">
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div {...headerButtonAnimation}>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <motion.div {...scaleOnHover}>
                <Button>Get Quote</Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div className="flex flex-col justify-center space-y-4" {...staggerProps}>
                <div className="space-y-2">
                  <motion.div variants={fadeInUp}>
                    <Badge className="inline-flex bg-primary text-primary-foreground">Available for Hire</Badge>
                  </motion.div>
                  <motion.h1 variants={fadeInUp} className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Web Developer & <span className="text-primary">Digital Craftsman</span>
                  </motion.h1>
                  <motion.p variants={fadeInUp} className="max-w-[600px] text-muted-foreground md:text-xl">
                    I build exceptional and accessible digital experiences for the web. Transforming ideas into elegant,
                    functional websites is my passion.
                  </motion.p>
                </div>
                <motion.div variants={fadeInUp} className="flex flex-col gap-2 min-[400px]:flex-row">
                  <motion.div {...scaleOnHover}>
                    <Button size="lg">
                      View My Work
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                  <motion.div {...scaleOnHover}>
                    <Button size="lg" variant="outline">
                      Contact Me
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div className="flex items-center justify-center" {...hero3DAnimation}>
                <div className="relative h-[350px] w-[350px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
                  <Hero3DScene />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <motion.div className="flex flex-col items-center justify-center space-y-4 text-center" {...staggerProps}>
              <div className="space-y-2">
                <motion.div variants={fadeInUp}>
                  <Badge variant="outline" className="border-primary/20 text-primary">About Me</Badge>
                </motion.div>
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</motion.h2>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <motion.div {...animationProps} variants={fadeInLeft}>
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <p className="text-muted-foreground mb-4">
                  Hi I&apos;m Claudio, I&apos;m a FSU graduate with over 4 years of experience in web development. I&apos;ve worked on a diverse range of projects from
                  small business websites to complex web applications. My journey began with a fascination for how the
                  internet works, and has evolved into a career building digital experiences.
                </p>
                <p className="text-muted-foreground">
                  I&apos;m constantly learning and adapting to new technologies and best practices to deliver the highest
                  quality work for my clients.
                </p>
              </motion.div>
              <motion.div className="space-y-4" {...staggerProps}>
                <motion.h3 variants={fadeInUp} className="text-2xl font-bold mb-4">My Skills</motion.h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Code, title: "Frontend Development", description: "HTML, CSS, JavaScript, React, Next.js" },
                    { icon: Database, title: "Backend Development", description: "Node.js, Express, MongoDB, SQL" },
                    { icon: Layout, title: "UI/UX Design", description: "Figma, Responsive Design, Accessibility" },
                    { icon: Smartphone, title: "Mobile Development", description: "React Native, Progressive Web Apps" }
                  ].map((skill, index) => (
                    <motion.div key={skill.title} variants={fadeInUp} {...skillCardAnimation} className="rounded-lg border bg-card p-3 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <skill.icon className="h-5 w-5 text-primary" />
                        <span className="font-medium">{skill.title}</span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{skill.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div className="flex flex-col items-center justify-center space-y-4 text-center" {...staggerProps}>
              <div className="space-y-2">
                <motion.div variants={fadeInUp}>
                  <Badge variant="outline" className="border-primary/20 text-primary">Projects</Badge>
                </motion.div>
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Work</motion.h2>
                <motion.p variants={fadeInUp} className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A selection of my recent projects and collaborations.
                </motion.p>
              </div>
            </motion.div>
            <motion.div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3" {...staggerProps}>
              {/* Project 1 */}
              <motion.div variants={fadeInUp} {...projectCardHover} className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden">
                  <motion.div {...projectImageHover}>
                    <Image src="/project1.jpeg" alt="Cineverse Movie Recommendation System" width={600} height={400} className="object-cover" />
                  </motion.div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Cineverse</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    A personalized movie recommendation platform using hybrid algorithms combining content-based and collaborative filtering for accurate film suggestions.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["React", "FastAPI", "PostgreSQL", "Redux", "Python"].map((tech, index) => (
                      <motion.div key={tech} {...badgeAnimation(index)}>
                        <Badge variant="secondary">{tech}</Badge>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <motion.div {...linkHover}>
                      <Link href="https://cineverse1.vercel.app/" target="_blank" className="text-sm font-medium text-primary hover:underline">
                        View Project
                      </Link>
                    </motion.div>
                    <motion.div {...iconSpinHover}>
                      <Link href="https://github.com/Dio27073/movie-recommender" target="_blank" className="text-sm font-medium text-muted-foreground hover:text-primary">
                        <Github className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div variants={fadeInUp} {...projectCardHover} className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden">
                  <motion.div {...projectImageHover}>
                    <Image src="/project2.jpeg" alt="Kinderland Creator - Interactive E-book Builder" width={600} height={400} className="object-cover" />
                  </motion.div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Kinderland Creator</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    An interactive children&apos;s e-book builder with text-to-speech, audio recording, and SCORM export capabilities for educational platforms.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Vue.js", "TTS API", "SCORM", "Audio Recording"].map((tech, index) => (
                      <motion.div key={tech} {...badgeAnimation(index)}>
                        <Badge variant="secondary">{tech}</Badge>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <motion.div {...linkHover}>
                      <Link href=" " className="text-sm font-medium text-primary hover:underline">
                        View Project
                      </Link>
                    </motion.div>
                    <motion.div {...iconSpinHover}>
                      <Link href="https://github.com/Dio27073/Kinderland-Creator" target="_blank" className="text-sm font-medium text-muted-foreground hover:text-primary">
                        <Github className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Project 3 */}
              <motion.div variants={fadeInUp} {...projectCardHover} className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden">
                  <motion.div {...projectImageHover}>
                    <Image src="/project3.jpeg" alt="Crystal Handyman Pros Website" width={600} height={400} className="object-cover" />
                  </motion.div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Crystal Handyman Pros</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Complete WordPress website optimization including SEO improvements, performance enhancements, and 14 service-specific landing pages for better search targeting.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["WordPress", "SEO", "WebP", "Performance"].map((tech, index) => (
                      <motion.div key={tech} {...badgeAnimation(index)}>
                        <Badge variant="secondary">{tech}</Badge>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <motion.div {...linkHover}>
                      <Link href="https://crystalhandymanpros.com/" target="_blank" className="text-sm font-medium text-primary hover:underline">
                        View Project
                      </Link>
                    </motion.div>
                    <motion.div {...iconSpinHover}>
                      <Link href="https://github.com/Dio27073/crystal-handyman" target="_blank" className="text-sm font-medium text-muted-foreground hover:text-primary">
                        <Github className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div className="flex justify-center" {...viewAllProjectsAnimation}>
              <motion.div {...scaleOnHover}>
                <Button variant="outline" size="lg" asChild>
                  <Link href="https://github.com/Dio27073?tab=repositories" target="_blank">
                    View All Projects
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <motion.div className="flex flex-col items-center justify-center space-y-4 text-center" {...staggerProps}>
              <div className="space-y-2">
                <motion.div variants={fadeInUp}>
                  <Badge variant="outline" className="border-primary/20 text-primary">Services</Badge>
                </motion.div>
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tighter sm:text-5xl">What I Offer</motion.h2>
                <motion.p variants={fadeInUp} className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive web development services tailored to your needs.
                </motion.p>
              </div>
            </motion.div>
            <motion.div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3" {...staggerProps}>
              {[
                { icon: Layout, title: "Website Development", description: "Custom, responsive websites built with modern technologies that look great on all devices." },
                { icon: Code, title: "Web Application", description: "Complex, interactive web applications with robust functionality and intuitive user interfaces." },
                { icon: Smartphone, title: "Mobile-First Development", description: "Mobile-optimized websites and progressive web apps that provide a native-like experience." },
                { icon: Database, title: "Backend Development", description: "Robust server-side solutions, APIs, and database architecture to power your applications." },
                { icon: Laptop, title: "SEO Optimization", description: "Search engine optimization to improve your website's visibility, rankings, and organic traffic growth." },
                { icon: Code, title: "Website Maintenance", description: "Ongoing support, updates, and optimization to keep your website secure and performing at its best." }
              ].map((service, index) => (
                <motion.div key={service.title} variants={fadeInUp} {...serviceCardAnimation} className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6 cursor-pointer">
                  <motion.div className="rounded-full bg-primary/10 p-3" {...serviceIconHover}>
                    <service.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-center text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div className="flex flex-col items-center justify-center space-y-4 text-center" {...staggerProps}>
              <div className="space-y-2">
                <motion.div variants={fadeInUp}>
                  <Badge variant="outline" className="border-primary/20 text-primary">FAQ</Badge>
                </motion.div>
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</motion.h2>
                <motion.p variants={fadeInUp} className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Common questions about working with me and my development process.
                </motion.p>
              </div>
            </motion.div>
            <motion.div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2" {...staggerProps}>
              {[
                { question: "How long do projects typically take?", answer: "Project timelines vary based on complexity. A simple landing page can take 1-2 days, while a full web application can take 4-6 weeks. I provide detailed timelines during our initial consultation and keep you updated throughout the process." },
                { question: "What's your pricing structure?", answer: "I offer both fixed-price projects and hourly rates depending on the scope. Simple websites start at $1,000, while complex applications are quoted based on requirements. I provide detailed proposals with transparent pricing before starting any work." },
                { question: "How many revisions are included?", answer: "I include unlimited rounds of revisions in all projects to ensure you're completely satisfied. I encourage feedback early and often to minimize the need for major changes later." },
                { question: "Which technologies do you recommend?", answer: "I recommend technologies based on your specific needs. For most projects, I suggest React/Next.js for modern websites, Node.js for backends, and PostgreSQL for databases. I'll explain the pros and cons of different options during our consultation." },
                { question: "Do you provide ongoing maintenance?", answer: "Yes! I offer maintenance packages that include security updates, performance monitoring, content updates, and technical support. Maintenance can be monthly or on-demand, depending on your preferences and needs." },
                { question: "Can you work with my existing team?", answer: "Absolutely! I collaborate well with designers, project managers, and other developers. I can integrate seamlessly into your existing workflow and use your preferred communication tools and project management systems." }
              ].map((faq, index) => (
                <motion.div key={faq.question} variants={fadeInUp} {...faqCardAnimation} className="flex flex-col rounded-lg border bg-card p-6 shadow-sm space-y-4 cursor-pointer">
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <motion.div className="flex flex-col items-center justify-center space-y-4 text-center" {...staggerProps}>
              <div className="space-y-2">
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tighter sm:text-5xl">Let&apos;s Work Together</motion.h2>
                <motion.p variants={fadeInUp} className="max-w-[900px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind? Get in touch and let&apos;s create something amazing.
                </motion.p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <motion.div className="space-y-4" {...staggerProps}>
                <motion.div variants={fadeInLeft} {...contactItemHover} className="flex items-center gap-4">
                  <div className="rounded-full bg-primary-foreground/10 p-2">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Email</h3>
                    <p className="text-primary-foreground/80">dioflorio@yahoo.com</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeInLeft} {...contactItemHover} className="flex items-center gap-4">
                  <div className="rounded-full bg-primary-foreground/10 p-2">
                    <Smartphone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Phone</h3>
                    <p className="text-primary-foreground/80">+1 (747) 400-7432</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeInLeft} className="mt-8">
                  <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
                  <div className="flex gap-4">
                    <motion.div {...iconSpinHover}>
                      <Link href="#" className="rounded-full bg-primary-foreground/10 p-3 hover:bg-primary-foreground/20">
                        <Github className="h-6 w-6 text-primary-foreground" />
                      </Link>
                    </motion.div>
                    <motion.div {...iconSpinHover}>
                      <Link href="#" className="rounded-full bg-primary-foreground/10 p-3 hover:bg-primary-foreground/20">
                        <Linkedin className="h-6 w-6 text-primary-foreground" />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div className="rounded-lg border bg-card p-6 shadow-sm text-foreground" {...animationProps} variants={fadeInRight}>
                <h3 className="text-lg font-bold mb-4">Send Me a Message</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <motion.div className="space-y-2" {...formInputFocus}>
                      <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Name
                      </label>
                      <input id="name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Your name" />
                    </motion.div>
                    <motion.div className="space-y-2" {...formInputFocus}>
                      <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Email
                      </label>
                      <input id="email" type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Your email" />
                    </motion.div>
                  </div>
                  <motion.div className="space-y-2" {...formInputFocus}>
                    <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Subject
                    </label>
                    <input id="subject" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Project inquiry" />
                  </motion.div>
                  <motion.div className="space-y-2" {...formInputFocus}>
                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Message
                    </label>
                    <textarea id="message" className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Tell me about your project..." />
                  </motion.div>
                  <motion.div {...scaleOnHover}>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <motion.footer className="w-full border-t bg-background py-6" {...footerAnimation}>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <motion.div className="flex items-center gap-2" {...logoHover}>
              <Image src="/logo_1.png" alt="Dio's Digital Solutions Logo" width={24} height={24} className="dark:hidden" />
              <Image src="/logo.png" alt="Dio's Digital Solutions Logo" width={24} height={24} className="hidden dark:block" />                    
              <span className="text-xl font-bold">Dio&apos;s Digital Solutions</span>
            </motion.div>
            <div className="flex gap-4">
              {[Github, Linkedin, Mail].map((Icon, index) => (
                <motion.div key={index} {...iconSpinHover}>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    <Icon className="h-5 w-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}