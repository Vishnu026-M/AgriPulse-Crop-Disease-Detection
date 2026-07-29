"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { ScrollSection } from "@/components/scroll-section"
import { StatCard } from "@/components/stat-card"
import {
  Target,
  Database,
  Layers,
  Timer,
  BarChart3,
} from "lucide-react"
import { DiseaseDistributionChart } from "@/components/dashboard/disease-distribution-chart"
import { AccuracyTimelineChart } from "@/components/dashboard/accuracy-timeline-chart"
import { CropAnalysisChart } from "@/components/dashboard/crop-analysis-chart"
import { SeverityBreakdownChart } from "@/components/dashboard/severity-breakdown-chart"
import { RecentPredictions } from "@/components/dashboard/recent-predictions"

const stats = [
  { icon: Target, value: "96.4%", label: "Model Accuracy" },
  { icon: Database, value: "54,306", label: "Images Analyzed" },
  { icon: Layers, value: "38", label: "Disease Classes" },
  { icon: Timer, value: "1.2s", label: "Avg. Inference" },
]

export default function DashboardPage() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-28">
        {/* Header */}
        <ScrollSection>
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Analytics Dashboard
              </span>
            </div>
            <h1 className="text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              System Performance & Analytics
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
              Monitor model performance, disease trends, prediction history, and crop health
              analytics across all analyzed samples.
            </p>
          </div>
        </ScrollSection>

        {/* Stats Row */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollSection key={stat.label} delay={i * 80}>
              <StatCard {...stat} />
            </ScrollSection>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ScrollSection delay={100}>
            <DiseaseDistributionChart />
          </ScrollSection>
          <ScrollSection delay={200}>
            <AccuracyTimelineChart />
          </ScrollSection>
          <ScrollSection delay={300}>
            <CropAnalysisChart />
          </ScrollSection>
          <ScrollSection delay={400}>
            <SeverityBreakdownChart />
          </ScrollSection>
        </div>

        {/* Recent Predictions */}
        <ScrollSection delay={500}>
          <div className="mt-10">
            <RecentPredictions />
          </div>
        </ScrollSection>
      </main>
      <Footer />
    </>
  )
}
