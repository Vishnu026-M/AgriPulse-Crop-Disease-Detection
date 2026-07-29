"use client"

import Link from "next/link"
import { ArrowRight, Leaf } from "lucide-react"
import { ScrollSection } from "@/components/scroll-section"

export function CTASection() {
  return (
    <section className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <ScrollSection>
          <div className="glass relative overflow-hidden rounded-3xl p-12 text-center md:p-16">
            {/* Glow effects */}
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/10 blur-[80px]" />

            <div className="relative z-10">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                Ready to Protect Your Crops?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Upload your first leaf image and get instant AI-powered disease
                analysis. No signup required - start diagnosing now.
              </p>
              <Link
                href="/predict"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:shadow-primary/40 hover:brightness-110"
              >
                Launch AI Diagnosis
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </ScrollSection>
      </div>
    </section>
  )
}
