"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight, Github, Linkedin, Mail, Terminal } from "lucide-react"

const technologies = ["AWS", "Kubernetes", "Docker", "Terraform", "Jenkins"]

export function HeroSection() {
  return (
    <section id="about" className="relative overflow-hidden px-6 pb-24 pt-36 md:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_10%,rgba(31,214,185,0.12),transparent_32%),linear-gradient(180deg,rgba(9,15,20,0.2),transparent)]" />
      <div className="container mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_currentColor]" /> Available for opportunities
          </div>
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground">Cloud infrastructure / automation</p>
          <h1 className="max-w-4xl text-6xl font-semibold leading-[0.95] tracking-[-0.07em] text-foreground md:text-8xl">
            Vrushabh<br /><span className="text-primary">Kothari</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            DevOps Engineer building reliable cloud platforms that ship faster, scale cleanly, and stay observable in production.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-none bg-primary px-6 font-mono text-sm text-primary-foreground hover:bg-primary/90">
              <a href="#projects">View projects <ArrowUpRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-none border-border bg-transparent px-6 font-mono text-sm hover:border-primary hover:bg-primary/5">
              <a href="#contact">Send a message</a>
            </Button>
          </div>
          <div className="mt-10 flex gap-3">
            {[{ label: "GitHub", icon: Github, href: "https://github.com/vrushabhk-byte" }, { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/vrushabh-kothari-a33119235/" }, { label: "Email", icon: Mail, href: "mailto:rushabhkothari414@gmail.com" }].map(({ label, icon: Icon, href }) => (
              <a key={label} href={href} target={label !== "Email" ? "_blank" : undefined} rel={label !== "Email" ? "noopener noreferrer" : undefined} aria-label={label} className="border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="border border-border bg-card/40 p-6 font-mono text-sm shadow-2xl shadow-black/20 md:p-8">
          <div className="mb-8 flex items-center justify-between border-b border-border pb-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-2"><Terminal className="h-4 w-4 text-primary" /> profile.yaml</span>
            <span className="text-primary">01</span>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p><span className="text-primary">name:</span> <span className="text-foreground">Vrushabh Kothari</span></p>
            <p><span className="text-primary">role:</span> <span className="text-foreground">DevOps Engineer</span></p>
            <p><span className="text-primary">company:</span> <span className="text-foreground">Automaton AI Infosystem</span></p>
            <p><span className="text-primary">focus:</span> <span className="text-foreground">cloud-native systems</span></p>
            <p><span className="text-primary">experience:</span> <span className="text-foreground">4+ years</span></p>
          </div>
          <div className="mt-10 border-t border-border pt-5">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Core stack</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => <span key={technology} className="border border-primary/30 px-2.5 py-1 text-xs text-primary">{technology}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
