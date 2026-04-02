"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Github, Folder } from "lucide-react"

const projects = [
  {
    title: "Terraform Modules Project",
    description:
      "A collection of reusable Terraform modules for AWS infrastructure. Includes VPC, ECS, RDS, and Lambda modules with best practices for security and scalability.",
    tech: ["Terraform", "AWS", "HCL", "GitHub Actions"],
    github: "https://github.com",
    featured: true,
  },
  {
    title: "Fault-Tolerant Multi-Region Architecture",
    description:
      "Designed and implemented a multi-region AWS architecture with automatic failover, ensuring 99.99% availability. Features Route53 health checks and cross-region replication.",
    tech: ["AWS", "Route53", "RDS", "S3", "CloudFront"],
    github: "https://github.com",
    featured: true,
  },
  {
    title: "CI/CD Pipeline using GitHub Actions",
    description:
      "End-to-end CI/CD pipeline for microservices with automated testing, security scanning, Docker builds, and blue-green deployments to EKS clusters.",
    tech: ["GitHub Actions", "Docker", "Kubernetes", "Helm", "ArgoCD"],
    github: "https://github.com",
    featured: true,
  },
  {
    title: "Kubernetes Monitoring Stack",
    description:
      "Complete observability solution with Prometheus, Grafana, and Alertmanager. Custom dashboards for cluster health, application metrics, and cost optimization.",
    tech: ["Kubernetes", "Prometheus", "Grafana", "Helm"],
    github: "https://github.com",
    featured: false,
  },
  {
    title: "AWS Cost Optimization Tool",
    description:
      "Python-based tool that analyzes AWS costs and provides recommendations for rightsizing, reserved instances, and unused resource cleanup.",
    tech: ["Python", "AWS SDK", "Lambda", "CloudWatch"],
    github: "https://github.com",
    featured: false,
  },
  {
    title: "Docker Compose Templates",
    description:
      "Production-ready Docker Compose templates for common development stacks including databases, message queues, and caching solutions.",
    tech: ["Docker", "Docker Compose", "PostgreSQL", "Redis"],
    github: "https://github.com",
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
