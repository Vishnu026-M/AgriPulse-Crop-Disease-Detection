"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { ScrollSection } from "@/components/scroll-section"
import {
  Leaf,
  Brain,
  Database,
  Cpu,
  Layers,
  GitBranch,
  GraduationCap,
  Target,
  Code2,
  Server,
  Monitor,
  Boxes,
} from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Project Member 1",
    role: "ML Engineer & Backend",
    focus: "Model Training, CNN Architecture, API Development",
  },
  {
    name: "Project Member 2",
    role: "Frontend & UI/UX",
    focus: "UI Design, React Development, Data Visualization",
  },
  {
    name: "Project Member 3",
    role: "Data Engineer",
    focus: "Dataset Curation, Preprocessing, Augmentation Pipeline",
  },
  {
    name: "Project Member 4",
    role: "Research & Testing",
    focus: "Literature Survey, Model Evaluation, Documentation",
  },
]

const techStack = [
  { icon: Brain, label: "TensorFlow / Keras", category: "ML Framework" },
  { icon: Layers, label: "ResNet-50 / VGG16", category: "CNN Architecture" },
  { icon: Database, label: "PlantVillage Dataset", category: "Training Data" },
  { icon: Code2, label: "Next.js / React", category: "Frontend" },
  { icon: Server, label: "Python / Flask", category: "Backend API" },
  { icon: Monitor, label: "Tailwind CSS", category: "Styling" },
  { icon: Boxes, label: "Docker", category: "Deployment" },
  { icon: Cpu, label: "NVIDIA CUDA", category: "GPU Compute" },
]

const milestones = [
  {
    phase: "Phase 1",
    title: "Research & Data Collection",
    description:
      "Literature review of CNN-based plant disease detection. Collection and preprocessing of the PlantVillage dataset with 54,306 leaf images across 38 disease classes.",
    status: "Completed",
  },
  {
    phase: "Phase 2",
    title: "Model Development & Training",
    description:
      "Design and implementation of the CNN architecture. Transfer learning with ResNet-50 pre-trained on ImageNet. Data augmentation and hyperparameter tuning for optimal accuracy.",
    status: "Completed",
  },
  {
    phase: "Phase 3",
    title: "Web Application Development",
    description:
      "Development of the full-stack web application with Next.js frontend, Flask REST API backend, and real-time image classification pipeline with sub-2-second inference.",
    status: "Completed",
  },
  {
    phase: "Phase 4",
    title: "Testing & Deployment",
    description:
      "Comprehensive testing with unseen data, cross-validation, confusion matrix analysis. Containerized deployment with Docker for production readiness.",
    status: "In Progress",
  },
]

export default function AboutPage() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-28">
        {/* Header */}
        <ScrollSection>
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Final Year Engineering Project
              </span>
            </div>
            <h1 className="text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              About AgriPulse
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-muted-foreground">
              An AI-powered crop disease prediction system built as a final-year
              capstone project in Computer Engineering, leveraging deep learning to
              protect agriculture worldwide.
            </p>
          </div>
        </ScrollSection>

        {/* Mission Section */}
        <ScrollSection delay={100}>
          <div className="mt-16 glass rounded-2xl p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Crop diseases account for 20-40% of global agricultural yield losses
                  annually, costing billions of dollars and threatening food security for
                  millions. Traditional disease identification relies on expert
                  pathologists who are often unavailable in rural farming communities.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  AgriPulse bridges this gap by bringing state-of-the-art AI directly to
                  farmers and agronomists through a simple, accessible web interface. By
                  enabling instant disease identification from a smartphone photo, we aim
                  to reduce crop losses and empower data-driven agricultural decisions.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "54,306", label: "Training Images" },
                  { value: "38+", label: "Disease Classes" },
                  { value: "96.4%", label: "Top Accuracy" },
                  { value: "14", label: "Crop Species" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-muted/50 p-4 text-center ring-1 ring-border"
                  >
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollSection>

        {/* Tech Stack */}
        <ScrollSection delay={200}>
          <div className="mt-16">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Technology Stack
              </span>
              <h2 className="mt-3 text-balance text-2xl font-bold text-foreground md:text-3xl">
                Built with Modern AI & Web Technologies
              </h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {techStack.map((tech, i) => (
                <ScrollSection key={tech.label} delay={i * 60}>
                  <div className="glass group rounded-xl p-5 text-center transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5">
                    <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20 transition-all group-hover:bg-primary/20">
                      <tech.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">
                      {tech.label}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {tech.category}
                    </p>
                  </div>
                </ScrollSection>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* Project Timeline */}
        <ScrollSection delay={300}>
          <div className="mt-16">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Project Timeline
              </span>
              <h2 className="mt-3 text-balance text-2xl font-bold text-foreground md:text-3xl">
                Development Milestones
              </h2>
            </div>
            <div className="mt-10 relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2" />

              <div className="flex flex-col gap-10">
                {milestones.map((m, i) => (
                  <ScrollSection key={m.phase} delay={i * 100}>
                    <div
                      className={`relative flex flex-col md:flex-row md:items-center gap-6 ${
                        i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Content */}
                      <div className="ml-14 md:ml-0 md:w-[calc(50%-2rem)] glass rounded-xl p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold uppercase tracking-widest text-primary">
                            {m.phase}
                          </span>
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                              m.status === "Completed"
                                ? "bg-primary/10 text-primary"
                                : "bg-chart-4/10 text-chart-4"
                            }`}
                          >
                            {m.status}
                          </span>
                        </div>
                        <h3 className="text-base font-semibold text-foreground">
                          {m.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {m.description}
                        </p>
                      </div>

                      {/* Dot */}
                      <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 flex h-3 w-3 items-center justify-center">
                        <span
                          className={`h-3 w-3 rounded-full ring-4 ring-background ${
                            m.status === "Completed" ? "bg-primary" : "bg-chart-4"
                          }`}
                        />
                      </div>

                      {/* Spacer */}
                      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                    </div>
                  </ScrollSection>
                ))}
              </div>
            </div>
          </div>
        </ScrollSection>

        {/* Team */}
        <ScrollSection delay={400}>
          <div className="mt-16">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Project Team
              </span>
              <h2 className="mt-3 text-balance text-2xl font-bold text-foreground md:text-3xl">
                The Engineers Behind AgriPulse
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, i) => (
                <ScrollSection key={member.name} delay={i * 80}>
                  <div className="glass group rounded-2xl p-6 text-center transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5">
                    {/* Avatar placeholder */}
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary/20 transition-all group-hover:ring-primary/40">
                      <span className="text-lg font-bold text-primary">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-primary">
                      {member.role}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {member.focus}
                    </p>
                  </div>
                </ScrollSection>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* Model Architecture */}
        <ScrollSection delay={500}>
          <div className="mt-16 glass rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                <GitBranch className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                CNN Model Architecture
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
                Our disease classification pipeline leverages transfer learning with a
                ResNet-50 backbone, fine-tuned on agricultural image data.
              </p>
            </div>

            {/* Architecture flow */}
            <div className="mt-10 flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-0">
              {[
                { label: "Input Image", sub: "256 x 256 x 3" },
                { label: "ResNet-50", sub: "Feature Extraction" },
                { label: "Global Avg Pool", sub: "2048-d Vector" },
                { label: "Dense Layers", sub: "512 > 256 > 128" },
                { label: "Softmax Output", sub: "38 Classes" },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center gap-3 md:gap-0">
                  <div className="flex flex-col items-center rounded-xl bg-muted/50 px-5 py-4 ring-1 ring-border text-center min-w-[140px]">
                    <p className="text-sm font-semibold text-foreground">
                      {step.label}
                    </p>
                    <p className="mt-1 text-[10px] font-mono text-primary">
                      {step.sub}
                    </p>
                  </div>
                  {i < 4 && (
                    <div className="hidden md:flex items-center px-2">
                      <div className="h-px w-8 bg-primary/30" />
                      <div className="h-0 w-0 border-y-4 border-y-transparent border-l-4 border-l-primary/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* CTA */}
        <ScrollSection delay={600}>
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Try AgriPulse Now
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Experience the power of AI-driven crop disease prediction. Upload a leaf
              image and get instant results.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/predict"
                className="flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:shadow-primary/40 hover:brightness-110"
              >
                <Target className="h-5 w-5" />
                Start Prediction
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center gap-2 rounded-xl border border-border bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground transition-all hover:bg-secondary/80"
              >
                View Dashboard
              </Link>
            </div>
          </div>
        </ScrollSection>
      </main>
      <Footer />
    </>
  )
}
