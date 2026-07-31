"use client"

import { useState, useCallback } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { ImageUploader } from "@/components/predict/image-uploader"
import { AnalysisResults, type AnalysisResult } from "@/components/predict/analysis-results"
import { AnalysisLoader } from "@/components/predict/analysis-loader"
import { ScrollSection } from "@/components/scroll-section"
import { Brain, RotateCcw, Download, History } from "lucide-react"

type State = "idle" | "ready" | "analyzing" | "complete"

interface PredictionHistoryEntry {
  id: number
  disease: string
  confidence: number
  timestamp: string
}

export default function PredictPage() {
  const [state, setState] = useState<State>("idle")
  const [preview, setPreview] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string>("")
  const [file, setFile] = useState<File | null>(null)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [history, setHistory] = useState<PredictionHistoryEntry[]>([])

const handleImageSelect = useCallback((selectedFile: File, dataUrl: string) => {
  setFile(selectedFile)
  setPreview(dataUrl)
  setFileName(selectedFile.name)
  setState("ready")
  setResult(null)
}, [])


  const handleClear = useCallback(() => {
    setPreview(null)
    setFileName("")
    setState("idle")
    setResult(null)
  }, [])

 const handleAnalyze = useCallback(async () => {
  if (!file) {
    alert("Please upload an image first")
    return
  }

  setState("analyzing")

  try {
    const formData = new FormData()
    formData.append("file", file)

   const response = await fetch("https://agripulse-backend-01ip.onrender.com/predict", {
      method: "POST",
      body: formData,
    })


    if (!response.ok) {
      throw new Error("Server error")
    }

    const data = await response.json()

    if (!data.valid) {
      alert(data.message)
      setState("ready")
      return
    }

    const formattedResult: AnalysisResult = {
      disease: data.disease,
      crop: data.disease.split(" ")[0],
      confidence: data.confidence,
      severity:
        data.confidence > 85
          ? "High"
          : data.confidence > 70
          ? "Medium"
          : "Low",
      description:
        "AI model analyzed leaf texture, color variation, and lesion patterns.",
      symptoms: [
        "Visible leaf discoloration",
        "Spots or irregular patterns",
        "Possible fungal/bacterial signs",
      ],
      treatments: [data.treatment],
      prevention: [data.prevention],
    }

    setResult(formattedResult)
    setState("complete")

  } catch (error) {
    console.error(error)
    alert("Backend connection failed")
    setState("ready")
  }
}, [file])


  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-28">
        {/* Page Header */}
        <ScrollSection>
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
              <Brain className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                AI Disease Prediction Engine
              </span>
            </div>
            <h1 className="text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Crop Disease Diagnosis
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
              Upload a clear photo of your crop leaf. Our deep learning model will
              analyze it and provide an instant diagnosis with treatment recommendations.
            </p>
          </div>
        </ScrollSection>

        {/* Main Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Left: Upload Area */}
          <ScrollSection delay={100}>
            <div className="flex flex-col gap-6">
              <ImageUploader
                onImageSelect={handleImageSelect}
                preview={preview}
                onClear={handleClear}
              />

              {/* Controls */}
              {state === "ready" && (
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={handleAnalyze}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:brightness-110"
                  >
                    <Brain className="h-5 w-5" />
                    Analyze with AI
                  </button>
                  <button
                    onClick={handleClear}
                    className="flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-6 py-3.5 text-sm font-medium text-secondary-foreground transition-all hover:bg-secondary/80"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Reset
                  </button>
                </div>
              )}

              {state === "complete" && (
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={handleClear}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:brightness-110"
                  >
                    <RotateCcw className="h-4 w-4" />
                    New Analysis
                  </button>
                  <button
                    onClick={() => {
                      if (result) {
                        const report = `AgriPulse Disease Report\n${"=".repeat(40)}\nDisease: ${result.disease}\nCrop: ${result.crop}\nConfidence: ${result.confidence}%\nSeverity: ${result.severity}\n\nDescription:\n${result.description}\n\nSymptoms:\n${result.symptoms.map((s) => `- ${s}`).join("\n")}\n\nTreatments:\n${result.treatments.map((t) => `- ${t}`).join("\n")}\n\nPrevention:\n${result.prevention.map((p) => `- ${p}`).join("\n")}`
                        const blob = new Blob([report], { type: "text/plain" })
                        const url = URL.createObjectURL(blob)
                        const a = document.createElement("a")
                        a.href = url
                        a.download = `agripulse-report-${Date.now()}.txt`
                        a.click()
                        URL.revokeObjectURL(url)
                      }
                    }}
                    className="flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-6 py-3.5 text-sm font-medium text-secondary-foreground transition-all hover:bg-secondary/80"
                  >
                    <Download className="h-4 w-4" />
                    Export Report
                  </button>
                </div>
              )}

              {/* File info */}
              {fileName && (
                <div className="glass rounded-xl px-4 py-3">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">File: </span>
                    {fileName}
                  </p>
                </div>
              )}

              {/* Prediction History */}
              {history.length > 0 && (
                <div className="glass rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                    <History className="h-4 w-4" />
                    <span className="text-xs font-medium uppercase tracking-wider">
                      Session History
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {history.slice(0, 5).map((entry) => (
                      <div
                        key={entry.id}
                        className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2"
                      >
                        <span className="text-sm text-foreground truncate mr-2">
                          {entry.disease}
                        </span>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-xs font-mono text-primary">
                            {entry.confidence}%
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {entry.timestamp}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </ScrollSection>

          {/* Right: Results */}
          <ScrollSection delay={200}>
            {state === "idle" && (
              <div className="glass flex h-full min-h-[400px] flex-col items-center justify-center rounded-2xl p-12 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
                  <Brain className="h-10 w-10 text-primary/40" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Waiting for Input
                </h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                  Upload a crop leaf image to begin AI-powered disease analysis.
                  Results will appear here.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {["Tomato", "Potato", "Corn", "Apple", "Grape"].map((crop) => (
                    <span
                      key={crop}
                      className="rounded-full bg-primary/5 px-3 py-1 text-xs text-primary ring-1 ring-primary/10"
                    >
                      {crop}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {state === "ready" && (
              <div className="glass flex h-full min-h-[400px] flex-col items-center justify-center rounded-2xl p-12 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/30 animate-pulse-glow">
                  <Brain className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Image Ready
                </h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                  Your image has been loaded successfully. Click{" "}
                  <span className="font-semibold text-primary">Analyze with AI</span>{" "}
                  to start the diagnosis.
                </p>
              </div>
            )}

            {state === "analyzing" && <AnalysisLoader />}

            {state === "complete" && result && <AnalysisResults result={result} />}
          </ScrollSection>
        </div>
      </main>
      <Footer />
    </>
  )
}
