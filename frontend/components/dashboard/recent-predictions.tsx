"use client"

import { cn } from "@/lib/utils"
import { AlertTriangle, CheckCircle2 } from "lucide-react"

const recentPredictions = [
  {
    id: 1,
    crop: "Tomato",
    disease: "Late Blight",
    confidence: 96.4,
    severity: "High",
    date: "Feb 14, 2026",
    time: "10:24 AM",
  },
  {
    id: 2,
    crop: "Potato",
    disease: "Early Blight",
    confidence: 93.7,
    severity: "Moderate",
    date: "Feb 14, 2026",
    time: "09:51 AM",
  },
  {
    id: 3,
    crop: "Corn",
    disease: "Northern Leaf Blight",
    confidence: 91.2,
    severity: "Moderate",
    date: "Feb 13, 2026",
    time: "04:12 PM",
  },
  {
    id: 4,
    crop: "Apple",
    disease: "Healthy",
    confidence: 98.1,
    severity: "Low",
    date: "Feb 13, 2026",
    time: "02:38 PM",
  },
  {
    id: 5,
    crop: "Grape",
    disease: "Leaf Blight",
    confidence: 88.1,
    severity: "Low",
    date: "Feb 13, 2026",
    time: "11:05 AM",
  },
  {
    id: 6,
    crop: "Tomato",
    disease: "Bacterial Spot",
    confidence: 90.5,
    severity: "High",
    date: "Feb 12, 2026",
    time: "03:47 PM",
  },
  {
    id: 7,
    crop: "Potato",
    disease: "Healthy",
    confidence: 97.3,
    severity: "Low",
    date: "Feb 12, 2026",
    time: "10:18 AM",
  },
  {
    id: 8,
    crop: "Corn",
    disease: "Gray Leaf Spot",
    confidence: 85.9,
    severity: "Critical",
    date: "Feb 11, 2026",
    time: "05:22 PM",
  },
]

const severityStyles: Record<string, string> = {
  Low: "text-[#4ade80] bg-[#4ade80]/10",
  Moderate: "text-[#facc15] bg-[#facc15]/10",
  High: "text-[#f97316] bg-[#f97316]/10",
  Critical: "text-[#ef4444] bg-[#ef4444]/10",
}

export function RecentPredictions() {
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="text-base font-semibold text-foreground">
        Recent Predictions
      </h3>
      <p className="mt-1 text-xs text-muted-foreground">
        Latest disease analysis results from the system
      </p>

      {/* Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="pb-3 pr-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Crop
              </th>
              <th className="pb-3 pr-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Disease
              </th>
              <th className="pb-3 pr-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Confidence
              </th>
              <th className="pb-3 pr-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Severity
              </th>
              <th className="pb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {recentPredictions.map((pred) => (
              <tr
                key={pred.id}
                className="border-b border-border/50 transition-colors hover:bg-muted/20"
              >
                <td className="py-3 pr-4">
                  <span className="font-medium text-foreground">{pred.crop}</span>
                </td>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2">
                    {pred.disease === "Healthy" ? (
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span className="text-muted-foreground">{pred.disease}</span>
                  </div>
                </td>
                <td className="py-3 pr-4">
                  <span className="font-mono text-primary">{pred.confidence}%</span>
                </td>
                <td className="py-3 pr-4">
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-xs font-medium",
                      severityStyles[pred.severity]
                    )}
                  >
                    {pred.severity}
                  </span>
                </td>
                <td className="py-3">
                  <div className="text-muted-foreground">
                    <span>{pred.date}</span>
                    <span className="ml-2 text-xs opacity-60">{pred.time}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
