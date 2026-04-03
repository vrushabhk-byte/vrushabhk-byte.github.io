"use client"

import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, ArrowUpRight, Send } from "lucide-react"

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
    <section id="contact" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-accent/10 -z-10" />

      <div className="container mx-auto max-w-3xl">
        <div className="glass rounded-3xl p-10 md:p-16 border-primary/20 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm mb-6">
              <Send className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let&apos;s work together
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto">
              Have a project in mind or want to discuss DevOps solutions? I&apos;m always excited to collaborate
              on cloud infrastructure, automation, and innovative deployment strategies. Let&apos;s connect!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="group bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all" asChild>
              <a href="mailto:rushabhkothari414@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send an Email
              </a>
            </Button>
            <Button size="lg" variant="outline" className="glass hover:glass-dark" asChild>
              <a href="https://www.linkedin.com/in/vrushabh-kothari-a33119235/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                Message on LinkedIn
              </a>
            </Button>
          </div>

          <div className="border-t border-border/50 pt-12">
            <p className="text-sm font-semibold text-foreground mb-6">Connect via any channel</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  className="group glass rounded-xl p-5 border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <link.icon className="h-5 w-5 text-primary" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="font-semibold text-foreground mb-1 text-sm">{link.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{link.value}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass rounded-xl p-6 text-center border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">4+</div>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="glass rounded-xl p-6 text-center border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <p className="text-sm text-muted-foreground">Projects Delivered</p>
          </div>
          <div className="glass rounded-xl p-6 text-center border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <p className="text-sm text-muted-foreground">Technologies</p>
          </div>
          <div className="glass rounded-xl p-6 text-center border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <p className="text-sm text-muted-foreground">Uptime Focused</p>
          </div>
        </div>
      </div>
    </section>
  )
}
