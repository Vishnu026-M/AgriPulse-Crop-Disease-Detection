"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  { version: "v1.0", accuracy: 78.2, f1: 75.1 },
  { version: "v1.2", accuracy: 82.5, f1: 80.3 },
  { version: "v1.5", accuracy: 86.1, f1: 84.0 },
  { version: "v1.8", accuracy: 89.3, f1: 87.6 },
  { version: "v2.0", accuracy: 92.7, f1: 91.2 },
  { version: "v2.2", accuracy: 94.5, f1: 93.1 },
  { version: "v2.3", accuracy: 96.4, f1: 95.8 },
]

export function AccuracyTimelineChart() {
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="text-base font-semibold text-foreground">
        Model Accuracy Over Versions
      </h3>
      <p className="mt-1 text-xs text-muted-foreground">
        Training accuracy and F1-score improvement across model iterations
      </p>
      <div className="mt-6">
        <ChartContainer
          config={{
            accuracy: {
              label: "Accuracy %",
              color: "#22c55e",
            },
            f1: {
              label: "F1 Score %",
              color: "#34d399",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(150 10% 16%)" />
              <XAxis
                dataKey="version"
                tick={{ fill: "hsl(150 10% 55%)", fontSize: 11 }}
              />
              <YAxis
                domain={[70, 100]}
                tick={{ fill: "hsl(150 10% 55%)", fontSize: 11 }}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="accuracy"
                stroke="#22c55e"
                strokeWidth={2.5}
                dot={{ fill: "#22c55e", r: 4, stroke: "#0a1a10", strokeWidth: 2 }}
                activeDot={{ r: 6, stroke: "#22c55e", strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="f1"
                stroke="#34d399"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: "#34d399", r: 3, stroke: "#0a1a10", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-4 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#22c55e]" />
            <span className="text-xs text-muted-foreground">Accuracy</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#34d399]" />
            <span className="text-xs text-muted-foreground">F1 Score</span>
          </div>
        </div>
      </div>
    </div>
  )
}
