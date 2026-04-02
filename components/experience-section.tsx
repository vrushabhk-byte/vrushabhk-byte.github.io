"use client"

import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "2023 — Present",
    title: "Senior DevOps Engineer",
    company: "TechCorp Inc.",
    companyUrl: "https://example.com",
    description:
      "Lead the infrastructure team in designing and implementing cloud-native solutions on AWS. Architected multi-region deployment strategies reducing downtime by 99%. Mentored junior engineers on Kubernetes and IaC best practices.",
    skills: ["AWS", "Kubernetes", "Terraform", "GitHub Actions", "ArgoCD"],
  },
  {
    period: "2021 — 2023",
    title: "DevOps Engineer",
    company: "CloudScale Solutions",
    companyUrl: "https://example.com",
    description:
      "Built and maintained CI/CD pipelines for 50+ microservices. Implemented infrastructure as code using Terraform, reducing provisioning time by 80%. Set up comprehensive monitoring with Prometheus and Grafana.",
    skills: ["Docker", "Jenkins", "Terraform", "Prometheus", "Grafana"],
  },
  {
    period: "2019 — 2021",
    title: "Systems Administrator",
    company: "DataFlow Systems",
    companyUrl: "https://example.com",
    description:
      "Managed Linux servers and automated routine tasks with Ansible and Bash scripts. Migrated legacy applications to containerized environments. Improved system security posture through automated patching.",
    skills: ["Linux", "Ansible", "Bash", "Docker", "Nginx"],
  },
  {
    period: "2018 — 2019",
    title: "Junior Cloud Engineer",
    company: "StartupHub",
    companyUrl: "https://example.com",
    description:
      "Assisted in setting up AWS infrastructure for startup clients. Created documentation and runbooks for common operational procedures. Learned cloud architecture patterns and DevOps methodologies.",
    skills: ["AWS", "Linux", "Python", "CloudWatch"],
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
