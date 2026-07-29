import Link from "next/link"
import { Leaf } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                <Leaf className="h-4 w-4 text-primary" />
              </div>
              <span className="text-lg font-bold text-foreground">AgriPulse</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              AI-powered crop disease prediction system designed for modern agriculture. Protecting
              harvests with deep learning technology.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Platform
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/predict", label: "Disease Prediction" },
                { href: "/dashboard", label: "Analytics Dashboard" },
                { href: "/about", label: "About AgriPulse" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Technology
            </h3>
            <ul className="flex flex-col gap-3">
              {["Deep Learning (CNN)", "Transfer Learning", "Image Classification", "Real-Time Analysis"].map(
                (item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Project
            </h3>
            <ul className="flex flex-col gap-3">
              {["Final Year Project", "Computer Engineering", "AI / ML Department", "2025-2026"].map(
                (item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            2026 AgriPulse. AI Powered Crop Disease Prediction System. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <span>Built with</span>
            <span className="text-primary">Next.js</span>
            <span>&</span>
            <span className="text-primary">TensorFlow</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
