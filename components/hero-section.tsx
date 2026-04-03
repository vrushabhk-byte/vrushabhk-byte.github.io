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
                href="https://github.com/vrushabhk-byte"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/vrushabh-kothari-a33119235/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:rushabhkothari414@gmail.com"
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
                DevOps Engineer at Automaton AI Infosystem (since April 2022) with a passion for designing 
                and implementing cloud-native solutions. I specialize in building robust, scalable infrastructure 
                at the intersection of development and operations.
              </p>
              <p>
                I have hands-on experience with <span className="text-foreground font-medium">AWS</span>, 
                <span className="text-foreground font-medium"> Kubernetes</span>, 
                <span className="text-foreground font-medium"> Docker</span>, and 
                <span className="text-foreground font-medium"> Terraform</span>. I architect infrastructure 
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
          </div>
        </div>
      </div>
    </section>
  )
}
