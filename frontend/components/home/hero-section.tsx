"use client"

import Link from "next/link"
import { ArrowRight, Scan, Shield } from "lucide-react"
import { ScrollSection } from "@/components/scroll-section"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <ScrollSection>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-sm font-medium text-primary">
              AI-Powered Agricultural Intelligence
            </span>
          </div>
        </ScrollSection>

        {/* Headline */}
        <ScrollSection delay={100}>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Predict Crop Diseases{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Before They Spread
              </span>
              <span className="absolute -inset-1 -z-0 rounded-lg bg-primary/10 blur-lg" />
            </span>
          </h1>
        </ScrollSection>

        {/* Subtitle */}
        <ScrollSection delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            AgriPulse leverages deep learning and convolutional neural networks to instantly
            analyze crop leaf images, identify diseases, and recommend treatments - all in
            real-time.
          </p>
        </ScrollSection>

        {/* CTA Buttons */}
        <ScrollSection delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/predict"
              className="group flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:shadow-primary/40 hover:brightness-110"
            >
              <Scan className="h-5 w-5" />
              Start AI Diagnosis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-xl border border-border bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground transition-all hover:bg-secondary/80"
            >
              <Shield className="h-5 w-5" />
              View Dashboard
            </Link>
          </div>
        </ScrollSection>

        {/* Floating UI Preview */}
        <ScrollSection delay={400}>
          <div className="relative mx-auto mt-16 max-w-3xl">
            <div className="glass animate-pulse-glow rounded-2xl p-1">
              <div className="relative overflow-hidden rounded-xl bg-card">
                {/* Fake analysis UI */}
                <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-chart-4/60" />
                  <div className="h-3 w-3 rounded-full bg-primary/60" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">
                    agripulse://disease-analysis
                  </span>
                </div>
                <div className="grid gap-4 p-6 md:grid-cols-2">
                  {/* Left: Image area */}
                  <div className="flex aspect-square items-center justify-center rounded-xl border border-dashed border-primary/30 bg-primary/[0.03]">
                    <div className="text-center">
                      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                        <Scan className="h-7 w-7 text-primary" />
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Leaf Image Analyzed
                      </p>
                      <p className="mt-1 text-xs text-primary">
                        CNN Processing Complete
                      </p>
                    </div>
                  </div>
                  {/* Right: Results */}
                  <div className="flex flex-col gap-3">
                    <div className="rounded-lg bg-primary/5 p-3 ring-1 ring-primary/10">
                      <p className="text-xs font-medium text-muted-foreground">Disease Detected</p>
                      <p className="mt-1 text-sm font-semibold text-foreground">
                        Tomato Late Blight
                      </p>
                    </div>
                    <div className="rounded-lg bg-primary/5 p-3 ring-1 ring-primary/10">
                      <p className="text-xs font-medium text-muted-foreground">Confidence Score</p>
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                        <div className="h-full w-[96%] rounded-full bg-primary" />
                      </div>
                      <p className="mt-1 text-right text-xs font-bold text-primary">96.4%</p>
                    </div>
                    <div className="rounded-lg bg-primary/5 p-3 ring-1 ring-primary/10">
                      <p className="text-xs font-medium text-muted-foreground">Severity Level</p>
                      <p className="mt-1 text-sm font-semibold text-destructive">High - Immediate Action</p>
                    </div>
                    <div className="rounded-lg bg-primary/5 p-3 ring-1 ring-primary/10">
                      <p className="text-xs font-medium text-muted-foreground">Model</p>
                      <p className="mt-1 text-xs font-mono text-primary">ResNet-50 v2.3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Glow behind preview */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/[0.06] blur-2xl" />
          </div>
        </ScrollSection>
      </div>
    </section>
  )
}
