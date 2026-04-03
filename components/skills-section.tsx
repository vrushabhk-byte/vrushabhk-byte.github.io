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
    <section id="skills" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5 -z-10" />
      
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm mb-6">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Technical Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Technology Stack</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Expertise across cloud infrastructure, containerization, automation, and modern DevOps practices
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="group glass rounded-2xl p-6 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:bg-primary/5"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors flex-shrink-0">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-start gap-3 group/skill">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-primary/60 group-hover/skill:bg-primary transition-colors flex-shrink-0" />
                    <p className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors leading-relaxed">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Matrix */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          <div className="glass rounded-2xl p-8 border-primary/20">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <p className="text-muted-foreground">Technologies mastered</p>
          </div>
          <div className="glass rounded-2xl p-8 border-primary/20">
            <div className="text-4xl font-bold text-primary mb-2">2+</div>
            <p className="text-muted-foreground">Years of DevOps expertise</p>
          </div>
          <div className="glass rounded-2xl p-8 border-primary/20">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <p className="text-muted-foreground">Production-ready solutions</p>
          </div>
        </div>
      </div>
    </section>
  )
}
