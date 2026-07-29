"use client"

import {
  AreaChart,
  Area,
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
  { month: "Jan", tomato: 120, potato: 80, corn: 45, apple: 30 },
  { month: "Feb", tomato: 145, potato: 95, corn: 52, apple: 35 },
  { month: "Mar", tomato: 210, potato: 130, corn: 78, apple: 50 },
  { month: "Apr", tomato: 320, potato: 190, corn: 125, apple: 72 },
  { month: "May", tomato: 480, potato: 260, corn: 185, apple: 95 },
  { month: "Jun", tomato: 580, potato: 310, corn: 240, apple: 110 },
  { month: "Jul", tomato: 640, potato: 350, corn: 290, apple: 130 },
  { month: "Aug", tomato: 590, potato: 320, corn: 260, apple: 120 },
  { month: "Sep", tomato: 430, potato: 240, corn: 190, apple: 140 },
  { month: "Oct", tomato: 280, potato: 160, corn: 120, apple: 160 },
  { month: "Nov", tomato: 180, potato: 100, corn: 60, apple: 90 },
  { month: "Dec", tomato: 130, potato: 70, corn: 40, apple: 40 },
]

export function CropAnalysisChart() {
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="text-base font-semibold text-foreground">
        Monthly Analyses by Crop
      </h3>
      <p className="mt-1 text-xs text-muted-foreground">
        Number of disease predictions per crop type throughout the year
      </p>
      <div className="mt-6">
        <ChartContainer
          config={{
            tomato: { label: "Tomato", color: "#22c55e" },
            potato: { label: "Potato", color: "#4ade80" },
            corn: { label: "Corn", color: "#86efac" },
            apple: { label: "Apple", color: "#34d399" },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
            >
              <defs>
                <linearGradient id="gradTomato" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gradPotato" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4ade80" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#4ade80" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gradCorn" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#86efac" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#86efac" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gradApple" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#34d399" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(150 10% 16%)" />
              <XAxis
                dataKey="month"
                tick={{ fill: "hsl(150 10% 55%)", fontSize: 11 }}
              />
              <YAxis tick={{ fill: "hsl(150 10% 55%)", fontSize: 11 }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="tomato" stroke="#22c55e" fill="url(#gradTomato)" strokeWidth={2} />
              <Area type="monotone" dataKey="potato" stroke="#4ade80" fill="url(#gradPotato)" strokeWidth={1.5} />
              <Area type="monotone" dataKey="corn" stroke="#86efac" fill="url(#gradCorn)" strokeWidth={1.5} />
              <Area type="monotone" dataKey="apple" stroke="#34d399" fill="url(#gradApple)" strokeWidth={1.5} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          {[
            { label: "Tomato", color: "#22c55e" },
            { label: "Potato", color: "#4ade80" },
            { label: "Corn", color: "#86efac" },
            { label: "Apple", color: "#34d399" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
