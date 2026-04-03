"use client"

import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Briefcase } from "lucide-react"

const experiences = [
  {
    period: "April 2022 — Present",
    title: "DevOps Engineer",
    company: "Automaton AI Infosystem Pvt. Ltd.",
    companyUrl: "https://www.linkedin.com/in/vrushabh-kothari-a33119235/",
    description:
      "Systematized application deployments across dev, staging, and production. Built Docker images and Kubernetes manifests for consistent deployments. Orchestrated ML workflows on Kubernetes with GPU support (NVIDIA CUDA). Automated infrastructure using Ansible playbooks and Terraform IaC. Implemented CI/CD pipelines with GitHub Actions and Jenkins. Designed scalable ETL pipelines reducing processing time through optimization strategies.",
    skills: ["Docker", "Kubernetes", "Ansible", "Terraform", "GitHub Actions", "Jenkins", "AWS", "Python", "GitOps"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent -z-10" />
      
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm mb-6">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Professional Journey</h2>
          <p className="text-muted-foreground text-lg">
            Driven by passion for infrastructure excellence and cloud innovation
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-8 md:p-10 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:bg-primary/5"
            >
              {/* Timeline marker */}
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="inline-block px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full mb-3">
                    <p className="text-sm font-semibold text-primary">{exp.period}</p>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link"
                  >
                    {exp.company}
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                {exp.description}
              </p>

              <div className="border-t border-border/50 pt-6">
                <p className="text-sm font-semibold text-foreground mb-4">Key Skills</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3.5 py-1.5 bg-primary/10 border border-primary/30 text-primary text-sm font-medium rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
