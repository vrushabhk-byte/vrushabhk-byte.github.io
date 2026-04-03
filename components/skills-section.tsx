"use client"

import { Cloud, Container, GitBranch, Terminal, Server, Shield, Database, Workflow } from "lucide-react"

const skillCategories = [
  {
    name: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS (EC2, S3, IAM, Lambda, VPC, ALB, Route53, CloudFront, RDS)"],
  },
  {
    name: "Infrastructure as Code",
    icon: Server,
    skills: ["Terraform", "Ansible", "CloudFormation", "YAML"],
  },
  {
    name: "Containers & Orchestration",
    icon: Container,
    skills: ["Docker", "Kubernetes", "kubectl", "Helm", "Container Images"],
  },
  {
    name: "CI/CD",
    icon: GitBranch,
    skills: ["GitHub Actions", "Jenkins", "GitOps", "Git", "Automated Deployments"],
  },
  {
    name: "Programming & Scripting",
    icon: Terminal,
    skills: ["Python", "Bash", "Shell Scripting", "Git"],
  },
  {
    name: "Data & ETL",
    icon: Database,
    skills: ["Airflow", "PySpark", "Pandas", "PostgreSQL", "MongoDB", "SQL"],
  },
  {
    name: "Operating Systems",
    icon: Shield,
    skills: ["Linux", "Windows", "System Administration"],
  },
  {
    name: "ML/AI Infrastructure",
    icon: Workflow,
    skills: ["Docker ML Workflows", "NVIDIA CUDA", "GPU Support", "Kubernetes ML"],
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
