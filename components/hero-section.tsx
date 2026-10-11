"use client"

import { ArrowRight, ChevronDown, Filter, Search, Send, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section id="about" className="reference-hero relative overflow-hidden px-6 pb-12 pt-40 md:px-10 md:pt-44">
      <div className="hero-network" aria-hidden="true" />
      <div className="hero-glow hero-glow-left" aria-hidden="true" />
      <div className="hero-glow hero-glow-right" aria-hidden="true" />
      <div className="hero-orbit" aria-hidden="true"><span /></div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-[#3048d8] md:mb-12">
          <span className="h-px w-5 bg-[#3048d8]" /> Available for hire
        </div>

        <h1 className="reference-title max-w-4xl text-[4.5rem] leading-[0.86] tracking-[-0.075em] md:text-[7rem] lg:text-[8rem]">
          Vrushabh <span>Kothari</span>
        </h1>
        <p className="mt-7 font-mono text-xl font-semibold tracking-[0.02em] text-[#3048d8] md:text-2xl">DevOps Engineer</p>
        <p className="mt-9 max-w-xl text-[15px] leading-7 text-[#33466d] md:text-base">
          Building scalable cloud infrastructure and reliable deployment systems with AWS, Kubernetes, Docker, Terraform, and CI/CD automation. Turning complex operations into resilient, repeatable workflows.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#projects" className="reference-button reference-button-primary">View Projects <ArrowRight className="h-4 w-4" /></a>
          <a href="#projects" className="reference-button reference-button-outline">Live Demos <Zap className="h-4 w-4 text-[#ffca05]" /></a>
          <a href="#contact" className="reference-button reference-button-soft"><Send className="h-4 w-4" /> Send a Message</a>
        </div>

        <div className="reference-tools" aria-hidden="true">
          <Search className="h-5 w-5" />
          <div className="reference-command">Navigate... try &apos;projects&apos;</div>
          <div className="reference-filter"><Filter className="h-4 w-4" /></div>
        </div>

        <div className="mt-20 flex flex-wrap gap-x-12 gap-y-8 md:mt-24 md:gap-x-16">
          {[['4+', 'Years in DevOps'], ['10+', 'Projects Built'], ['AWS', 'Cloud Platform'], ['24/7', 'Reliable Systems']].map(([value, label]) => (
            <div key={label}>
              <div className="reference-stat">{value}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6d83ae]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HeroScrollHint() {
  return <div className="sr-only">Scroll to explore Vrushabh&apos;s work</div>
}

export function HeroNavHint() {
  return <ChevronDown className="h-3 w-3" />
}
