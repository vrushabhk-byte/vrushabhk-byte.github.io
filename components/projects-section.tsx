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
    github: "https://github.com/vrushabhk-byte/CI-CD.git",
    featured: true,
  },
  {
    title: "Containerized Monolithic E-commerce API with Flask and Docker",
    description:
      "Built and containerized a production-ready Flask REST API for an e-commerce platform. Designed clean API routes for products, cart management, and health checks with Gunicorn.",
    tech: ["Python", "Flask", "Docker", "Gunicorn", "Pytest"],
    github: "https://github.com/vrushabhk-byte/Containerization-Flask.git",
    featured: true,
  },
  {
    title: "Automated ML API Deployment (Docker + CI/CD + Remote Server)",
    description:
      "Containerized a Python-based ML inference API with Docker and integrated GitHub Actions for automated CI/CD. Enabled GPU inference with NVIDIA CUDA drivers and automated remote deployment.",
    tech: ["Docker", "Python", "FastAPI", "GitHub Actions", "Bash", "Pytest", "Git"],
    github: "https://github.com/vrushabhk-byte/sklearn-model-deployment.git",
    featured: true,
  },
  {
    title: "Terraform Modules with Remote State Management (AWS IaC)",
    description:
      "Designed reusable Terraform modules for provisioning AWS infrastructure including VPC, EC2, and RDS. Implemented remote state management with S3 and DynamoDB for consistency and locking.",
    tech: ["Terraform", "AWS", "HCL", "S3", "DynamoDB", "Git"],
    github: "https://github.com/vrushabhk-byte/Terraform-Modules-Remote-State-Project.git",
    featured: true,
  },
]

export function ProjectsSection() {
  const featured = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent -z-10" />
      
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm mb-6">
            <Folder className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Projects & Experiences</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Building cloud-native solutions and infrastructure that powers modern applications
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-6 md:p-8 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:bg-primary/5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Folder className="h-6 w-6 text-primary" />
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-primary/20 rounded-lg transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-primary/20 rounded-lg transition-colors"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground hover:text-primary" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <div
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/30 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
