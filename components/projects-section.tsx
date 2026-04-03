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
  const featured = projects.filter(p => p.featured);
  const other = projects.filter(p => !p.featured);

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
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
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

          {/* Featured Projects Row 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            {featured.slice(2).map((project, index) => (
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

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {other.map((project, index) => (
              <div
                key={index}
                className="group glass rounded-xl p-6 border-border hover:border-primary/40 transition-all duration-300 hover:bg-primary/5 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-foreground flex-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 p-1.5 hover:bg-primary/20 rounded transition-colors flex-shrink-0"
                  >
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground hover:text-primary" />
                  </a>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-secondary/50 text-muted-foreground px-2 py-1 rounded group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
