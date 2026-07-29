"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  { name: "Late Blight", cases: 1842 },
  { name: "Early Blight", cases: 1534 },
  { name: "Leaf Spot", cases: 1289 },
  { name: "Black Rot", cases: 1076 },
  { name: "Powdery Mildew", cases: 945 },
  { name: "Leaf Curl", cases: 823 },
  { name: "Bacterial Spot", cases: 712 },
  { name: "Mosaic Virus", cases: 548 },
]

const COLORS = [
  "#22c55e",
  "#16a34a",
  "#15803d",
  "#4ade80",
  "#86efac",
  "#34d399",
  "#10b981",
  "#059669",
]

export function DiseaseDistributionChart() {
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="text-base font-semibold text-foreground">
        Top Disease Detections
      </h3>
      <p className="mt-1 text-xs text-muted-foreground">
        Most frequently identified diseases across all analyzed samples
      </p>
      <div className="mt-6">
        <ChartContainer
          config={{
            cases: {
              label: "Cases",
              color: "#22c55e",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(150 10% 16%)" />
              <XAxis
                dataKey="name"
                tick={{ fill: "hsl(150 10% 55%)", fontSize: 10 }}
                angle={-35}
                textAnchor="end"
                height={60}
              />
              <YAxis tick={{ fill: "hsl(150 10% 55%)", fontSize: 11 }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="cases" radius={[6, 6, 0, 0]}>
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  )
}
