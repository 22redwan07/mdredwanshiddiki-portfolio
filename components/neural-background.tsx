"use client"

import { useEffect, useRef } from "react"

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  phase: number
}

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    let width = 0
    let height = 0
    let nodes: Node[] = []
    let raf = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    function resize() {
      const parent = canvas.parentElement
      if (!parent) return
      width = parent.clientWidth
      height = parent.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(70, Math.floor((width * height) / 20000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: 1.1 + Math.random() * 1.6,
        phase: Math.random() * Math.PI * 2,
      }))
    }

    let t = 0
    function draw() {
      ctx.clearRect(0, 0, width, height)
      const maxDist = 150
      t += 0.01

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        if (!prefersReduced) {
          n.x += n.vx
          n.y += n.vy
        }
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j]
          const dx = n.x - m.x
          const dy = n.y - m.y
          const dist = Math.hypot(dx, dy)
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.4
            ctx.strokeStyle = `oklch(0.7 0.14 250 / ${alpha})`
            ctx.lineWidth = 0.7
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(m.x, m.y)
            ctx.stroke()
          }
        }

        const pulse = prefersReduced ? 0.7 : 0.55 + 0.35 * Math.sin(t + n.phase)
        ctx.fillStyle = `oklch(0.74 0.15 250 / ${pulse})`
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}
