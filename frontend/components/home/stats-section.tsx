"use client"

import { Database, Target, Layers, Timer } from "lucide-react"
import { ScrollSection } from "@/components/scroll-section"
import { StatCard } from "@/components/stat-card"

const stats = [
  { icon: Target, value: "96.4%", label: "Model Accuracy" },
  { icon: Database, value: "50K+", label: "Training Images" },
  { icon: Layers, value: "38+", label: "Disease Classes" },
  { icon: Timer, value: "<2s", label: "Inference Time" },
]

export function StatsSection() {
  return (
    <section className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollSection>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Performance Metrics
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
              Built for Accuracy & Speed
            </h2>
          </div>
        </ScrollSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollSection key={stat.label} delay={i * 100}>
              <StatCard {...stat} />
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  )
}
