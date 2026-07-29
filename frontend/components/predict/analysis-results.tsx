"use client"

import {
  AlertTriangle,
  CheckCircle2,
  Leaf,
  Pill,
  Activity,
  Shield,
  TrendingUp,
  Info,
} from "lucide-react"
import { cn } from "@/lib/utils"

export interface AnalysisResult {
  disease: string
  crop: string
  confidence: number
  severity: "Low" | "Moderate" | "High" | "Critical"
  description: string
  symptoms: string[]
  treatments: string[]
  prevention: string[]
}

interface AnalysisResultsProps {
  result: AnalysisResult
}

const severityColors: Record<string, string> = {
  Low: "text-chart-2 bg-chart-2/10 ring-chart-2/20",
  Moderate: "text-chart-4 bg-chart-4/10 ring-chart-4/20",
  High: "text-destructive bg-destructive/10 ring-destructive/20",
  Critical: "text-destructive bg-destructive/10 ring-destructive/20",
}

export function AnalysisResults({ result }: AnalysisResultsProps) {
  return (
    <div className="flex flex-col gap-5">
      {/* Disease Header */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
            <Leaf className="h-7 w-7 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Disease Identified
            </p>
            <h3 className="mt-1 text-xl font-bold text-foreground truncate">
              {result.disease}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Crop: {result.crop}
            </p>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Confidence */}
        <div className="glass rounded-xl p-5">
          <div className="flex items-center gap-2 text-muted-foreground">
            <TrendingUp className="h-4 w-4" />
            <span className="text-xs font-medium uppercase tracking-wider">
              Confidence Score
            </span>
          </div>
          <div className="mt-3 flex items-end gap-2">
            <span className="text-3xl font-bold text-primary">
              {result.confidence}%
            </span>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
              style={{ width: `${result.confidence}%` }}
            />
          </div>
        </div>

        {/* Severity */}
        <div className="glass rounded-xl p-5">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Activity className="h-4 w-4" />
            <span className="text-xs font-medium uppercase tracking-wider">
              Severity Level
            </span>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold ring-1",
                severityColors[result.severity]
              )}
            >
              <AlertTriangle className="h-3.5 w-3.5" />
              {result.severity}
            </span>
          </div>
          <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
            {result.severity === "Low" && "Minor impact. Monitor the crop and apply preventive measures."}
            {result.severity === "Moderate" && "Moderate risk. Begin treatment soon to prevent escalation."}
            {result.severity === "High" && "Significant damage. Immediate intervention is recommended."}
            {result.severity === "Critical" && "Critical damage. Urgent action required to save the crop."}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="glass rounded-xl p-5">
        <div className="flex items-center gap-2 text-muted-foreground mb-3">
          <Info className="h-4 w-4" />
          <span className="text-xs font-medium uppercase tracking-wider">
            About This Disease
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {result.description}
        </p>
      </div>

      {/* Symptoms */}
      <div className="glass rounded-xl p-5">
        <div className="flex items-center gap-2 text-muted-foreground mb-3">
          <AlertTriangle className="h-4 w-4" />
          <span className="text-xs font-medium uppercase tracking-wider">
            Symptoms
          </span>
        </div>
        <ul className="flex flex-col gap-2">
          {result.symptoms.map((s, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Treatments */}
      <div className="glass rounded-xl p-5">
        <div className="flex items-center gap-2 text-muted-foreground mb-3">
          <Pill className="h-4 w-4 text-primary" />
          <span className="text-xs font-medium uppercase tracking-wider">
            Recommended Treatment
          </span>
        </div>
        <ul className="flex flex-col gap-2">
          {result.treatments.map((t, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Prevention */}
      <div className="glass rounded-xl p-5">
        <div className="flex items-center gap-2 text-muted-foreground mb-3">
          <Shield className="h-4 w-4 text-accent" />
          <span className="text-xs font-medium uppercase tracking-wider">
            Prevention Tips
          </span>
        </div>
        <ul className="flex flex-col gap-2">
          {result.prevention.map((p, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
