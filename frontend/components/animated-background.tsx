"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  left: string
  top: string
  size: number
  driftX: string
  driftY: string
  duration: string
  delay: string
  opacity: number
}

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 1,
      driftX: `${(Math.random() - 0.5) * 200}px`,
      driftY: `${-Math.random() * 300 - 100}px`,
      duration: `${Math.random() * 15 + 10}s`,
      delay: `${Math.random() * 10}s`,
      opacity: Math.random() * 0.4 + 0.1,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Primary gradient orbs */}
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/[0.07] blur-[120px] animate-float" />
      <div className="absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full bg-accent/[0.05] blur-[100px] animate-float-delayed" />
      <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-primary/[0.04] blur-[80px] animate-float" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(152 76% 48% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(152 76% 48% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-primary animate-drift"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            "--drift-x": p.driftX,
            "--drift-y": p.driftY,
            "--drift-duration": p.duration,
            animationDelay: p.delay,
            animationDuration: p.duration,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
