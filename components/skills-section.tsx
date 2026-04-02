"use client"

import { Cloud, Container, GitBranch, Terminal, Server, Shield, Database, Workflow } from "lucide-react"

const skillCategories = [
  {
    name: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS", "GCP", "Azure"],
  },
  {
    name: "Infrastructure as Code",
    icon: Server,
    skills: ["Terraform", "CloudFormation", "Pulumi", "Ansible"],
  },
  {
    name: "Containers & Orchestration",
    icon: Container,
    skills: ["Docker", "Kubernetes", "ECS", "Helm"],
  },
  {
    name: "CI/CD",
    icon: GitBranch,
    skills: ["GitHub Actions", "Jenkins", "ArgoCD", "GitLab CI"],
  },
  {
    name: "Monitoring & Observability",
    icon: Workflow,
    skills: ["Prometheus", "Grafana", "Datadog", "ELK Stack"],
  },
  {
    name: "Scripting & Languages",
    icon: Terminal,
    skills: ["Python", "Bash", "Go", "JavaScript"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    name: "Security",
    icon: Shield,
    skills: ["IAM", "Vault", "Security Groups", "SSL/TLS"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="h-px flex-1 bg-border" />
          <h2 className="text-2xl font-bold text-foreground">Skills</h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium text-foreground text-sm">{category.name}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
