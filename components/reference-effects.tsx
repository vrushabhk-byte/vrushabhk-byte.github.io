"use client"

import { useEffect, useState } from "react"

export function ReferenceEffects() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    let frame = 0
    let target = { x: -100, y: -100 }
    let current = { x: -100, y: -100 }
    const animate = () => {
      current.x += (target.x - current.x) * 0.18
      current.y += (target.y - current.y) * 0.18
      setPosition({ x: current.x, y: current.y })
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    const move = (event: MouseEvent) => {
      target = { x: event.clientX, y: event.clientY }
      setVisible(true)
      setVisible(true)
      const element = event.target as HTMLElement
      setHovering(Boolean(element.closest("a, button, [data-cursor-hover]")))
    }
    const leave = () => setVisible(false)
    window.addEventListener("mousemove", move, { passive: true })
    document.documentElement.addEventListener("mouseleave", leave)
    return () => {
      window.removeEventListener("mousemove", move)
      document.documentElement.removeEventListener("mouseleave", leave)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className={`reference-cursor ${visible ? "is-visible" : ""} ${hovering ? "is-hovering" : ""}`}
      style={{ left: position.x, top: position.y, position: "fixed" }}
    >
      <span className="reference-cursor-dot" />
      <span className="reference-cursor-label">View</span>
    </div>
  )
}

export function NetworkCanvas() {
  useEffect(() => {
    const canvas = document.querySelector<HTMLCanvasElement>("[data-network-canvas]")
    if (!canvas) return
    const context = canvas.getContext("2d")
    if (!context) return
    const resize = () => {
      const ratio = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * ratio
      canvas.height = window.innerHeight * ratio
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }
    resize()
    const points = Array.from({ length: 42 }, (_, index) => ({
      x: (index * 193) % window.innerWidth,
      y: (index * 117) % window.innerHeight,
      dx: (index % 2 ? 1 : -1) * 0.08,
      dy: (index % 3 ? 0.05 : -0.08),
    }))
    let frame = 0
    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight)
      points.forEach((point, index) => {
        point.x += point.dx
        point.y += point.dy
        if (point.x < 0 || point.x > window.innerWidth) point.dx *= -1
        if (point.y < 0 || point.y > window.innerHeight) point.dy *= -1
        context.fillStyle = "rgba(48,72,216,.28)"
        context.beginPath()
        context.arc(point.x, point.y, index % 4 === 0 ? 2 : 1.3, 0, Math.PI * 2)
        context.fill()
        points.slice(index + 1).forEach((other) => {
          const distance = Math.hypot(point.x - other.x, point.y - other.y)
          if (distance < 155) {
            context.strokeStyle = `rgba(48,72,216,${0.07 * (1 - distance / 155)})`
            context.lineWidth = 1
            context.beginPath()
            context.moveTo(point.x, point.y)
            context.lineTo(other.x, other.y)
            context.stroke()
          }
        })
      })
      frame = requestAnimationFrame(draw)
    }
    draw()
    window.addEventListener("resize", resize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas data-network-canvas className="reference-network-canvas" aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />
}
