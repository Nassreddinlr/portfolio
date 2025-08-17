"use client"
import { useState } from "react"
import type React from "react"

import clsx from "clsx"
import { Download, Mail, Linkedin } from "lucide-react"

interface PortfolioTabsProps {
  initialTab?: "home" | "projects" | "contact"
}

export function PortfolioTabs({ initialTab = "home" }: PortfolioTabsProps) {
  const [activeTab, setActiveTab] = useState(initialTab)

  const tabs = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ] as const

  return (
    <div className="w-full">
      {/* Navigation */}
      <div className="flex flex-col items-center justify-center mb-8">
        <nav className="bg-slate-1 rounded-full">
          <div
            className={clsx(
              "bg-slate-1 rounded-full p-1 flex relative items-center",
              "shadow-[0px_-1px_3px_0px_rgba(0,_0,_0,_0.05),_0px_7px_2px_0px_rgba(0,_0,_0,_0.02),_0px_4px_2px_0px_rgba(0,_0,_0,_0.05),_0px_2px_1px_0px_rgba(0,_0,_0,_0.05),_0px_1px_1px_0px_rgba(0,_0,_0,_0.03),_0px_0px_1px_0px_rgba(0,_0,_0,_0.04)]",
              "dark:shadow-[0px_-1px_3px_0px_rgba(0,_0,_0,_0.03),_0px_7px_2px_0px_rgba(0,_0,_0,_0.03),_0px_4px_2px_0px_rgba(0,_0,_0,_0.05),_0px_2px_1px_0px_rgba(0,_0,_0,_0.1),_0px_1px_1px_0px_rgba(0,_0,_0,_0.1),_0px_0px_1px_0px_rgba(0,_0,_0,_0.1)]",
            )}
          >
            {/* Animated background */}
            <div
              className={clsx("absolute transition-all duration-200 ease-in-out h-7 rounded-full bg-slate-3")}
              style={{
                width: "90px",
                left: `calc((${tabs.findIndex((tab) => tab.id === activeTab)} * 90px) + 4px)`,
              }}
            />

            {/* Navigation items */}
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={clsx(
                  "relative text-sm font-medium py-1 px-3 transition-colors duration-200 text-slate-12 w-[90px] flex items-center justify-center",
                  activeTab === tab.id ? "opacity-100" : "opacity-30 hover:opacity-60",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="transition-all duration-300 ease-in-out">
        {activeTab === "home" && <HomeTab />}
        {activeTab === "projects" && <ProjectsTab />}
        {activeTab === "contact" && <ContactTab />}
      </div>
    </div>
  )
}

function HomeTab() {
  return (
    <div className="space-y-8">
      {/* Profile Picture */}
      <div className="flex justify-center">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-slate-3 border-4 border-slate-6">
          <img
            src="/profileimage.jpg"
            alt="Nassreddine Larbi Aissa"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-12">Nassreddine Larbi Aissa</h1>
        <p className="text-lg text-slate-11 font-medium">Full Stack Web Developer</p>
        <p className="text-sm text-slate-10">Blida, Algeria</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <button
          onClick={() => {
            // Create a dummy PDF download
            const link = document.createElement("a")
            link.href = "/Resume Nassreddine Larbi Aissa.pdf"
            link.download = "Nassreddine_Larbi_Aissa_Resume.pdf"
            link.click()
          }}
          className="flex items-center gap-2 px-4 py-2 bg-slate-12 text-slate-1 rounded-lg hover:bg-slate-11 transition-colors duration-200 text-sm font-medium"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </button>

        <button
          onClick={() => {
            window.location.href = "mailto:larbiaissanassreddine@gmail.com?subject=Let's work together"
          }}
          className="flex items-center gap-2 px-4 py-2 bg-slate-3 text-slate-12 border border-slate-6 rounded-lg hover:bg-slate-4 transition-colors duration-200 text-sm font-medium"
        >
          <Mail className="w-4 h-4" />
          Email Me
        </button>

        <button
          onClick={() => {
            window.open("https://linkedin.com/in/nassreddine-larbi-aissa", "_blank")
          }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </button>
      </div>

      {/* About Me */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-12">About Me</h2>
        <p className="text-slate-11 leading-relaxed text-sm">
          I'm a passionate web developer with over 3 years of experience creating modern, responsive web applications. I
          specialize in React, TypeScript, and full-stack development. I love turning complex problems into simple,
          beautiful, and intuitive solutions. When I'm not coding, you'll find me exploring new technologies or
          contributing to open-source projects.
        </p>
      </div>

      {/* Skills */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-12">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "TypeScript",
            "JavaScript",
            "Node.js",
            "Django",
            "Express.js",
            "Next.js",
            "Tailwind CSS",
            "Git",
            "Docker",
            "PostgreSQL",
            "REST APIs",
            "Socket.io",
            "Prisma",
            "AWS",
            "Firebase",
            "Redux",
            "Ubuntu",
            "Linux",
            "WordPress",
            "Web Design",
          ].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-slate-3 text-slate-12 rounded-full text-xs font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-12">Experience</h2>
        <div className="space-y-2">
          <div className="border-l-2 border-slate-6 pl-4">
            <h3 className="font-semibold text-slate-12">Full Stack Developer</h3>
            <p className="text-sm text-slate-10">New World Digital Agency • 2024 - 2025</p>
            <p className="text-sm text-slate-11 mt-1">
              Developed end-to-end web applications using React, Django, and PostgreSQL. Designed and coded complete
              projects from conception to deployment.
            </p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-12">Education</h2>
        <div className="space-y-3">
          <div className="border-l-2 border-slate-6 pl-4">
            <h3 className="font-semibold text-slate-12">Bachelor's in Web Development and Multimedia</h3>
            <p className="text-sm text-slate-10">
              National Institute of Graphic Arts and Industries, Blida • 2022 - 2025
            </p>
            <p className="text-sm text-slate-11 mt-1">
              Specialized in web development and multimedia design (graphic design)
            </p>
          </div>
          <div className="border-l-2 border-slate-6 pl-4">
            <h3 className="font-semibold text-slate-12">Accounting Studies</h3>
            <p className="text-sm text-slate-10">Mohamed Boudief El Affroune Secondary School • 2015 - 2019</p>
            <p className="text-sm text-slate-11 mt-1">
              Initially studied accounting but discovered passion for web development
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

function ProjectsTab() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-12">My Projects</h1>
        <p className="text-slate-11">A showcase of my recent web development work</p>
      </div>

      {/* Projects */}
      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

function ContactTab() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string>("") 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setStatus("idle"), 3000)
      } else {
        setStatus("error")
        setErrorMessage(data.error || "Failed to send message. Please try again.")
        setTimeout(() => setStatus("idle"), 3000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setStatus("error")
      setErrorMessage("An unexpected error occurred. Please try again later.")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-12">Get In Touch</h1>
        <p className="text-slate-11">Let's discuss your next web development project</p>
      </div>

      {/* Contact Info */}
      <div className="space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-slate-12">Contact Information</h2>
          <div className="space-y-1 text-sm text-slate-11">
            <p>📍 Blida, Algeria</p>
            <p>💼 Available for freelance projects</p>
            <p>Specializing in React, TypeScript & Full-Stack Development</p>
          </div>
        </div>

        <div className="bg-slate-2 rounded-lg p-4 space-y-2">
          <h3 className="font-semibold text-slate-12">Services I Offer</h3>
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-11">
            <div>• Web Application Development</div>
            <div>• E-commerce Solutions</div>
            <div>• Full-Stack Development</div>
            <div>• Web Design</div>
            <div>• WordPress Development</div>
            <div>• Hosting Setup</div>
            <div>• Front-End Development</div>
            <div>• API Development</div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-12 text-center">Send Me a Message</h2>
        <p className="text-sm text-slate-11 text-center">
          Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-3 border border-slate-6 rounded-lg text-slate-12 placeholder:text-slate-10 focus:outline-none focus:ring-2 focus:ring-slate-8 text-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-3 border border-slate-6 rounded-lg text-slate-12 placeholder:text-slate-10 focus:outline-none focus:ring-2 focus:ring-slate-8 text-sm"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-3 border border-slate-6 rounded-lg text-slate-12 placeholder:text-slate-10 focus:outline-none focus:ring-2 focus:ring-slate-8 text-sm"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-slate-3 border border-slate-6 rounded-lg text-slate-12 placeholder:text-slate-10 focus:outline-none focus:ring-2 focus:ring-slate-8 text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={clsx(
              "w-full py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200",
              "bg-slate-12 text-slate-1 hover:bg-slate-11",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              status === "success" && "bg-green-600 hover:bg-green-600",
              status === "error" && "bg-red-600 hover:bg-red-700",
            )}
          >
            {status === "loading" && (
              <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-slate-1 border-t-transparent rounded-full animate-spin" />
                Sending...
              </span>
            )}
            {status === "success" && "Message Sent Successfully!"}
            {status === "idle" && "Send Message"}
            {status === "error" && (errorMessage || "Failed to send. Try Again")}
          </button>
          
          {status === "error" && errorMessage && (
            <div className="mt-2 text-sm text-red-500 text-center">
              {errorMessage}
            </div>
          )}
        </form>
      </div>

      {/* Additional Info */}
      <div className="bg-slate-2 rounded-lg p-4 space-y-2 text-center">
        <h3 className="font-semibold text-slate-12">Response Time</h3>
        <p className="text-sm text-slate-11">
          I typically respond to messages within 24 hours. For urgent projects, please mention it in your message.
        </p>
      </div>
    </div>
  )
}
