"use client"

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  { name: "Low", value: 3420, pct: "32%" },
  { name: "Moderate", value: 4180, pct: "39%" },
  { name: "High", value: 2150, pct: "20%" },
  { name: "Critical", value: 950, pct: "9%" },
]

const COLORS = ["#4ade80", "#facc15", "#f97316", "#ef4444"]

export function SeverityBreakdownChart() {
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="text-base font-semibold text-foreground">
        Severity Distribution
      </h3>
      <p className="mt-1 text-xs text-muted-foreground">
        Breakdown of detected diseases by severity level
      </p>
      <div className="mt-6">
        <ChartContainer
          config={{
            Low: { label: "Low", color: "#4ade80" },
            Moderate: { label: "Moderate", color: "#facc15" },
            High: { label: "High", color: "#f97316" },
            Critical: { label: "Critical", color: "#ef4444" },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent />} />
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={4}
                dataKey="value"
                nameKey="name"
                strokeWidth={0}
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        {/* Legend */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          {data.map((item, i) => (
            <div key={item.name} className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full shrink-0"
                style={{ backgroundColor: COLORS[i] }}
              />
              <span className="text-xs text-muted-foreground">
                {item.name}{" "}
                <span className="font-semibold text-foreground">{item.pct}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
