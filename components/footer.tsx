import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/vrushabhk-byte",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vrushabh-kothari-a33119235/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:rushabhkothari414@gmail.com",
    icon: Mail,
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-border/50 bg-gradient-to-t from-primary/5 to-transparent">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              © {currentYear} Vrushabh Kothari. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/60">
              Building scalable cloud infrastructure one day at a time.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className="p-2.5 glass rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
