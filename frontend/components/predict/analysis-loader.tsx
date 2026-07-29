"use client"

import { useEffect, useState } from "react"
import { Brain } from "lucide-react"

const stages = [
  "Preprocessing image...",
  "Extracting features via CNN...",
  "Running inference model...",
  "Classifying disease patterns...",
  "Generating diagnosis report...",
]

export function AnalysisLoader() {
  const [currentStage, setCurrentStage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prev) => {
        if (prev >= stages.length - 1) return prev
        return prev + 1
      })
    }, 600)
    return () => clearInterval(interval)
  }, [])

  const progress = ((currentStage + 1) / stages.length) * 100

  return (
    <div className="glass rounded-2xl p-8 text-center">
      {/* Animated brain */}
      <div className="mx-auto mb-6 relative flex h-24 w-24 items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: "4s" }} />
        <div className="absolute inset-2 rounded-full border border-primary/20 animate-spin" style={{ animationDuration: "3s", animationDirection: "reverse" }} />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 animate-pulse">
          <Brain className="h-7 w-7 text-primary" />
        </div>
      </div>

      <h3 className="text-lg font-semibold text-foreground">
        AI Analysis in Progress
      </h3>

      {/* Progress bar */}
      <div className="mx-auto mt-6 max-w-xs">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Stage list */}
      <div className="mx-auto mt-6 max-w-xs text-left">
        {stages.map((stage, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 py-1.5 text-xs transition-all duration-300 ${
              i <= currentStage
                ? "text-primary opacity-100"
                : "text-muted-foreground opacity-40"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                i <= currentStage ? "bg-primary" : "bg-muted-foreground"
              }`}
            />
            {stage}
            {i === currentStage && (
              <span className="ml-auto animate-pulse text-primary font-mono">...</span>
            )}
            {i < currentStage && (
              <span className="ml-auto text-primary font-mono">done</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
