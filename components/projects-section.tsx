"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Github, Folder } from "lucide-react"

const projects = [
  {
    title: "CI/CD Pipeline for Flask Application Using Jenkins and Docker",
    description:
      "Developed a complete CI/CD pipeline using Jenkins for a Python Flask application. Automated code integration, testing, containerization, and deployment to production environments.",
    tech: ["Jenkins", "Docker", "GitHub", "Python", "Flask", "Shell Scripting"],
    github: "https://github.com/vrushabhk-byte",
    featured: true,
  },
  {
    title: "Containerized Monolithic E-commerce API with Flask and Docker",
    description:
      "Built and containerized a production-ready Flask REST API for an e-commerce platform. Designed clean API routes for products, cart management, and health checks with Gunicorn.",
    tech: ["Python", "Flask", "Docker", "Gunicorn", "Pytest"],
    github: "https://github.com/vrushabhk-byte",
    featured: true,
  },
  {
    title: "Automated ML API Deployment (Docker + CI/CD + Remote Server)",
    description:
      "Containerized a Python-based ML inference API with Docker and integrated GitHub Actions for automated CI/CD. Enabled GPU inference with NVIDIA CUDA drivers and automated remote deployment.",
    tech: ["Docker", "Python", "FastAPI", "GitHub Actions", "Bash", "Pytest", "Git"],
    github: "https://github.com/vrushabhk-byte",
    featured: true,
  },
  {
    title: "Terraform Modules with Remote State Management (AWS IaC)",
    description:
      "Designed reusable Terraform modules for provisioning AWS infrastructure including VPC, EC2, and RDS. Implemented remote state management with S3 and DynamoDB for consistency and locking.",
    tech: ["Terraform", "AWS", "HCL", "S3", "DynamoDB", "Git"],
    github: "https://github.com/vrushabhk-byte",
    featured: true,
  },
  {
    title: "Kubernetes Manifests & Orchestration",
    description:
      "Created and maintained Kubernetes manifests for Deployments, Services, ConfigMaps, and Secrets. Performed rolling updates, monitored workload health, and ensured high availability.",
    tech: ["Kubernetes", "kubectl", "YAML", "Helm"],
    github: "https://github.com/vrushabhk-byte",
    featured: false,
  },
  {
    title: "Ansible Playbooks for Infrastructure Automation",
    description:
      "Automated server configuration, application setup, and system provisioning using Ansible playbooks and roles. Improved environment consistency and reduced manual setup time significantly.",
    tech: ["Ansible", "Linux", "YAML", "Shell Scripting"],
    github: "https://github.com/vrushabhk-byte",
    featured: false,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="h-px flex-1 bg-border" />
          <h2 className="text-2xl font-bold text-foreground">Projects</h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card hover:bg-secondary/50 border-border hover:border-primary/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Folder className="h-10 w-10 text-primary" />
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Open ${project.title}`}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
