"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

const navLinks = [
  { name: "About", href: "#about", dropdown: true },
  { name: "Work", href: "#projects", dropdown: true },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="reference-header">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10" aria-label="Main navigation">
        <a href="#about" className="reference-logo" aria-label="Rahul Dangi home">RD</a>
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="reference-nav-link">
              {link.name}{link.dropdown && <ChevronDown className="h-3 w-3" />}
            </a>
          ))}
        </div>
        <a href="#contact" className="reference-hire"><span /> Hire Me</a>
        <button type="button" className="reference-mobile-button md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && <div className="reference-mobile-menu md:hidden">{navLinks.map((link) => <a key={link.name} href={link.href} onClick={() => setOpen(false)}>{link.name}</a>)}</div>}
    </header>
  )
}
