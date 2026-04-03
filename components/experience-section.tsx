"use client"

import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

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
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="h-px flex-1 bg-border" />
          <h2 className="text-2xl font-bold text-foreground">Experience</h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[200px_1fr] gap-4 p-6 -mx-6 rounded-lg hover:bg-secondary/30 transition-all duration-300"
            >
              <div className="text-sm text-muted-foreground font-medium">
                {exp.period}
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-1">
                  {exp.title} ·{" "}
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    {exp.company}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs font-normal">
                      {skill}
                    </Badge>
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
