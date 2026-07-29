"use client"

import {
  Brain,
  Camera,
  Zap,
  BarChart3,
  Shield,
  Smartphone,
} from "lucide-react"
import { ScrollSection } from "@/components/scroll-section"

const features = [
  {
    icon: Brain,
    title: "Deep Learning CNN",
    description:
      "Powered by convolutional neural networks trained on 50,000+ labeled leaf images for high-accuracy disease detection.",
  },
  {
    icon: Camera,
    title: "Instant Image Analysis",
    description:
      "Upload a crop leaf photo and receive real-time disease predictions with confidence scores in under 2 seconds.",
  },
  {
    icon: Zap,
    title: "38+ Disease Classes",
    description:
      "Identifies diseases across major crops including tomato, potato, corn, apple, grape, and more with high precision.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track prediction history, disease trends, and crop health metrics through an interactive analytics panel.",
  },
  {
    icon: Shield,
    title: "Treatment Recommendations",
    description:
      "Receive AI-generated treatment suggestions, preventive measures, and best practices for each detected disease.",
  },
  {
    icon: Smartphone,
    title: "Responsive & Accessible",
    description:
      "Works seamlessly on any device - capture leaf images directly from your smartphone in the field.",
  },
]

export function FeaturesSection() {
  return (
    <section className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <ScrollSection>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Core Features
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
              Advanced AI for Smarter Agriculture
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              Every tool you need to monitor, predict, and prevent crop diseases -
              powered by state-of-the-art machine learning models.
            </p>
          </div>
        </ScrollSection>

        {/* Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <ScrollSection key={feature.title} delay={i * 80}>
              <div className="group glass h-full rounded-2xl p-6 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 transition-all group-hover:bg-primary/20 group-hover:ring-primary/40">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  )
}
