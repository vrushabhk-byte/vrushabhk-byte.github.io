"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-50" />
        <div className="absolute top-0 -right-40 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left side - Name and navigation */}
          <div className="lg:sticky lg:top-24 lg:w-1/3 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary font-medium">DevOps Engineer</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Vrushabh<br />Kothari
              </h1>
              <p className="text-lg text-muted-foreground font-medium">
                Building scalable, resilient cloud infrastructure
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all">
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="glass hover:glass-dark">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/vrushabhk-byte"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/vrushabh-kothari-a33119235/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a
                href="mailto:rushabhkothari414@gmail.com"
                className="p-3 glass rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Right side - About content */}
          <div className="lg:w-2/3">
            <div className="glass rounded-2xl p-8 md:p-10 space-y-8 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  DevOps Engineer at Automaton AI Infosystem (since April 2022) with a passion for designing 
                  and implementing cloud-native solutions. I specialize in building robust, scalable infrastructure 
                  at the intersection of development and operations.
                </p>
                <p>
                  I have hands-on experience with <span className="text-primary font-semibold">AWS</span>, 
                  <span className="text-primary font-semibold"> Kubernetes</span>, 
                  <span className="text-primary font-semibold"> Docker</span>, and 
                  <span className="text-primary font-semibold"> Terraform</span>. I architect infrastructure 
                  as code, automate CI/CD pipelines using Jenkins and GitHub Actions, and containerize ML/AI 
                  workflows with GPU support. My focus is on creating reliable, fault-tolerant systems that 
                  scale effortlessly.
                </p>
                <p>
                  When I&apos;m not orchestrating Kubernetes clusters or optimizing ETL pipelines, 
                  you&apos;ll find me exploring cloud technologies, working with infrastructure automation, 
                  and collaborating with data scientists on production-grade deployments.
                </p>
              </div>

              {/* Tech Stack Quick View */}
              <div className="pt-6 border-t border-border/50">
                <p className="text-sm font-semibold text-foreground mb-4">Key Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Kubernetes", "Docker", "Terraform", "Python", "CI/CD"].map((tech) => (
                    <div key={tech} className="px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-xs font-medium text-primary hover:bg-primary/20 transition-colors">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
