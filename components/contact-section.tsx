"use client"

import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"

const contactLinks = [
  {
    name: "Email",
    value: "rushabhkothari414@gmail.com",
    href: "mailto:rushabhkothari414@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/vrushabh-kothari-a33119235",
    href: "https://www.linkedin.com/in/vrushabh-kothari-a33119235/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    value: "github.com/vrushabhk-byte",
    href: "https://github.com/vrushabhk-byte",
    icon: Github,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px flex-1 bg-border" />
          <h2 className="text-2xl font-bold text-foreground">Contact</h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
          If you&apos;d like to discuss a project or just say hi, I&apos;m always down to chat.
          Feel free to reach out through any of the channels below.
        </p>

        <Button size="lg" className="mb-12" asChild>
          <a href="mailto:rushabhkothari414@gmail.com">
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </a>
        </Button>

        <div className="grid sm:grid-cols-3 gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className="group p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/30 transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <link.icon className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">{link.name}</span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground">{link.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
