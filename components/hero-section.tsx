"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left side - Name and navigation */}
          <div className="lg:sticky lg:top-24 lg:w-1/3">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              Vrushabh Kothari
            </h1>
            <h2 className="text-xl text-primary font-medium mb-4">
              DevOps Engineer | Cloud Enthusiast
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Building scalable, resilient cloud infrastructure
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild className="group">
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:vrushabh@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right side - About content */}
          <div className="lg:w-2/3">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a passionate DevOps Engineer with expertise in designing and implementing 
                cloud-native solutions. My focus lies at the intersection of development and 
                operations, where I build robust infrastructure that scales effortlessly.
              </p>
              <p>
                With deep experience in <span className="text-foreground font-medium">AWS</span>, 
                <span className="text-foreground font-medium"> Kubernetes</span>, and 
                <span className="text-foreground font-medium"> Terraform</span>, I architect 
                fault-tolerant systems that handle millions of requests while maintaining 
                99.99% uptime. I believe in infrastructure as code and automate everything 
                from provisioning to deployment.
              </p>
              <p>
                When I&apos;m not optimizing CI/CD pipelines or containerizing applications, 
                you&apos;ll find me exploring new cloud technologies, contributing to open-source 
                projects, and sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
