"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import Hero3DScene from "@/components/Hero3D"
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
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo_1.png" alt="Dio's Digital Solutions Logo" width={24} height={24} className="dark:hidden" />
            <Image src="/logo.png" alt="Dio's Digital Solutions Logo" width={24} height={24} className="hidden dark:block" />            
            <span className="text-xl font-bold">Dio's Digital Solutions</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button>Get Quote</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-flex bg-primary text-primary-foreground">Available for Hire</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Web Developer & <span className="text-primary">Digital Craftsman</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    I build exceptional and accessible digital experiences for the web. Transforming ideas into elegant,
                    functional websites is my passion.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Contact Me
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
                  <Hero3DScene />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="border-primary/20 text-primary">
                  About Me
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <p className="text-muted-foreground mb-4">
                  Hi im Claudio, im a FSU graduate with over 4 years of experience in web development. I've worked on a diverse range of projects from
                  small business websites to complex web applications. My journey began with a fascination for how the
                  internet works, and has evolved into a career building digital experiences.
                </p>
                <p className="text-muted-foreground">
                  I'm constantly learning and adapting to new technologies and best practices to deliver the highest
                  quality work for my clients.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">My Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border bg-card p-3">
                    <div className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      <span className="font-medium">Frontend Development</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">HTML, CSS, JavaScript, React, Next.js</p>
                  </div>
                  <div className="rounded-lg border bg-card p-3">
                    <div className="flex items-center gap-2">
                      <Database className="h-5 w-5 text-primary" />
                      <span className="font-medium">Backend Development</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">Node.js, Express, MongoDB, SQL</p>
                  </div>
                  <div className="rounded-lg border bg-card p-3">
                    <div className="flex items-center gap-2">
                      <Layout className="h-5 w-5 text-primary" />
                      <span className="font-medium">UI/UX Design</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">Figma, Responsive Design, Accessibility</p>
                  </div>
                  <div className="rounded-lg border bg-card p-3">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-primary" />
                      <span className="font-medium">Mobile Development</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">React Native, Progressive Web Apps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="border-primary/20 text-primary">
                  Projects
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Work</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A selection of my recent projects and collaborations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Project 1 */}
              <div className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden">
                <Image
                    src="/project1.jpeg"
                    alt="Cineverse Movie Recommendation System"
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Cineverse</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    A personalized movie recommendation platform using hybrid algorithms combining content-based and collaborative filtering for accurate film suggestions.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">FastAPI</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">Redux</Badge>
                    <Badge variant="secondary">Python</Badge>
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <Link href="https://cineverse1.vercel.app/" target="_blank" className="text-sm font-medium text-primary hover:underline">
                      View Project
                    </Link>
                    <Link href="https://github.com/Dio27073/movie-recommender" target="_blank" className="text-sm font-medium text-muted-foreground hover:text-primary">
                      <Github className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/project2.jpeg"
                    alt="Kinderland Creator - Interactive E-book Builder"
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Kinderland Creator</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    An interactive children's e-book builder with text-to-speech, audio recording, and SCORM export capabilities for educational platforms.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary">Vue.js</Badge>
                    <Badge variant="secondary">TTS API</Badge>
                    <Badge variant="secondary">SCORM</Badge>
                    <Badge variant="secondary">Audio Recording</Badge>
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <Link href=" " className="text-sm font-medium text-primary hover:underline">
                      View Project
                    </Link>
                    <Link href="https://github.com/Dio27073/Kinderland-Creator" target="_blank" className="text-sm font-medium text-muted-foreground hover:text-primary">
                      <Github className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/project3.jpeg"
                    alt="Crystal Handyman Pros Website"
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Crystal Handyman Pros</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Complete WordPress website optimization including SEO improvements, performance enhancements, and 14 service-specific landing pages for better search targeting.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary">WordPress</Badge>
                    <Badge variant="secondary">SEO</Badge>
                    <Badge variant="secondary">WebP</Badge>
                    <Badge variant="secondary">Performance</Badge>
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <Link href="https://crystalhandymanpros.com/" target="_blank" className="text-sm font-medium text-primary hover:underline">
                      View Project
                    </Link>
                    <Link href="https://github.com/Dio27073/crystal-handyman" target="_blank" className="text-sm font-medium text-muted-foreground hover:text-primary">
                      <Github className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="https://github.com/Dio27073?tab=repositories" target="_blank">
                  View All Projects
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="border-primary/20 text-primary">
                  Services
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What I Offer</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive web development services tailored to your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Layout className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Website Development</h3>
                <p className="text-center text-muted-foreground">
                  Custom, responsive websites built with modern technologies that look great on all devices.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Web Application</h3>
                <p className="text-center text-muted-foreground">
                  Complex, interactive web applications with robust functionality and intuitive user interfaces.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Mobile-First Development</h3>
                <p className="text-center text-muted-foreground">
                  Mobile-optimized websites and progressive web apps that provide a native-like experience.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Backend Development</h3>
                <p className="text-center text-muted-foreground">
                  Robust server-side solutions, APIs, and database architecture to power your applications.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">E-commerce Solutions</h3>
                <p className="text-center text-muted-foreground">
                  Online stores with secure payment processing, inventory management, and customer accounts.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Website Maintenance</h3>
                <p className="text-center text-muted-foreground">
                  Ongoing support, updates, and optimization to keep your website secure and performing at its best.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="border-primary/20 text-primary">
                  Testimonials
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Client Feedback</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  What my clients say about working with me.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <div className="h-10 w-10 rounded-full bg-muted" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Alex Thompson</h3>
                    <p className="text-sm text-muted-foreground">CEO, TechStart</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="italic text-muted-foreground">
                    "Working with this developer was a game-changer for our business. They delivered a website that
                    exceeded our expectations and has significantly increased our online conversions."
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <div className="h-10 w-10 rounded-full bg-muted" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">Marketing Director, StyleBoutique</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="italic text-muted-foreground">
                    "Our e-commerce site has never looked or performed better. The attention to detail and focus on user
                    experience has transformed our online presence."
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <div className="h-10 w-10 rounded-full bg-muted" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Michael Chen</h3>
                    <p className="text-sm text-muted-foreground">Founder, FitnessPro</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="italic text-muted-foreground">
                    "The mobile app developed for our fitness brand has received outstanding feedback from our users.
                    The developer was responsive, professional, and delivered on time."
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <div className="h-10 w-10 rounded-full bg-muted" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Emily Rodriguez</h3>
                    <p className="text-sm text-muted-foreground">Owner, Creative Studio</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="italic text-muted-foreground">
                    "I've worked with many developers, but none have matched the level of creativity, technical skill,
                    and communication that I experienced with this developer."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let's Work Together</h2>
                <p className="max-w-[900px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind? Get in touch and let's create something amazing.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary-foreground/10 p-2">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Email</h3>
                    <p className="text-primary-foreground/80">dioflorio@yahoo.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary-foreground/10 p-2">
                    <Smartphone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Phone</h3>
                    <p className="text-primary-foreground/80">+1 (747) 400-7432</p>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
                  <div className="flex gap-4">
                    <Link href="#" className="rounded-full bg-primary-foreground/10 p-3 hover:bg-primary-foreground/20">
                      <Github className="h-6 w-6 text-primary-foreground" />
                    </Link>
                    <Link href="#" className="rounded-full bg-primary-foreground/10 p-3 hover:bg-primary-foreground/20">
                      <Linkedin className="h-6 w-6 text-primary-foreground" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm text-foreground">
                <h3 className="text-lg font-bold mb-4">Send Me a Message</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Project inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center gap-2">
              <Image src="/logo_1.png" alt="Dio's Digital Solutions Logo" width={24} height={24} className="dark:hidden" />
              <Image src="/logo.png" alt="Dio's Digital Solutions Logo" width={24} height={24} className="hidden dark:block" />                    
              <span className="text-xl font-bold">Dio's Digital Solutions</span>
            </div>
            <p className="text-sm text-muted-foreground">
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}