"use client"

import { Upload, Cpu, FileCheck, Pill } from "lucide-react"
import { ScrollSection } from "@/components/scroll-section"

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Leaf Image",
    description:
      "Take a clear photo of the affected crop leaf and upload it through our intuitive drag-and-drop interface.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Processing",
    description:
      "Our CNN model preprocesses the image, extracts features, and runs inference through the trained neural network.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Disease Detection",
    description:
      "The system classifies the disease with a confidence score, identifies the severity level, and logs the analysis.",
  },
  {
    icon: Pill,
    step: "04",
    title: "Get Treatment Plan",
    description:
      "Receive actionable treatment recommendations, preventive measures, and best practices to protect your crop.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <ScrollSection>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              How It Works
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
              From Leaf Photo to Diagnosis in Seconds
            </h2>
          </div>
        </ScrollSection>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Connecting line - desktop */}
          <div className="absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, i) => (
              <ScrollSection key={item.step} delay={i * 120}>
                <div className="group relative text-center">
                  {/* Step number & icon */}
                  <div className="relative mx-auto mb-6 flex h-32 w-32 items-center justify-center">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border border-dashed border-primary/20 transition-all group-hover:border-primary/40 group-hover:scale-110" />
                    {/* Inner circle */}
                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary/20 transition-all group-hover:bg-primary/15 group-hover:ring-primary/40">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    {/* Step badge */}
                    <span className="absolute -top-1 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-card text-xs font-bold text-primary ring-2 ring-primary/30">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
