"use client"

import { useCallback, useState, useRef } from "react"
import { Upload, X, ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageUploaderProps {
  onImageSelect: (file: File, preview: string) => void
  preview: string | null
  onClear: () => void
}

export function ImageUploader({ onImageSelect, preview, onClear }: ImageUploaderProps) {
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) return
      const reader = new FileReader()
      reader.onload = (e) => {
        onImageSelect(file, e.target?.result as string)
      }
      reader.readAsDataURL(file)
    },
    [onImageSelect]
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      const file = e.dataTransfer.files[0]
      if (file) handleFile(file)
    },
    [handleFile]
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) handleFile(file)
    },
    [handleFile]
  )

  if (preview) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card">
        <img
          src={preview}
          alt="Uploaded crop leaf for analysis"
          className="h-full w-full object-cover"
          style={{ maxHeight: 420 }}
        />
        {/* Scanning overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="animate-scan absolute left-0 right-0 h-1 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        </div>
        <button
          onClick={onClear}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm text-foreground ring-1 ring-border transition-all hover:bg-destructive hover:text-destructive-foreground hover:ring-destructive"
          aria-label="Remove uploaded image"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card to-transparent p-4">
          <p className="text-center text-sm font-medium text-primary">
            Image loaded - Ready for analysis
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={() => inputRef.current?.click()}
      className={cn(
        "group relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-12 transition-all",
        isDragging
          ? "border-primary bg-primary/5 scale-[1.02]"
          : "border-border bg-card hover:border-primary/40 hover:bg-primary/[0.02]"
      )}
      role="button"
      tabIndex={0}
      aria-label="Upload a crop leaf image for disease analysis"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") inputRef.current?.click()
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="sr-only"
        aria-label="Choose image file"
      />

      <div className={cn(
        "mb-6 flex h-20 w-20 items-center justify-center rounded-2xl transition-all",
        isDragging
          ? "bg-primary/20 ring-2 ring-primary/40"
          : "bg-primary/10 ring-1 ring-primary/20 group-hover:bg-primary/15 group-hover:ring-primary/30"
      )}>
        {isDragging ? (
          <ImageIcon className="h-10 w-10 text-primary" />
        ) : (
          <Upload className="h-10 w-10 text-primary" />
        )}
      </div>

      <p className="text-lg font-semibold text-foreground">
        {isDragging ? "Drop your image here" : "Upload Crop Leaf Image"}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        Drag & drop or click to browse
      </p>
      <p className="mt-1 text-xs text-muted-foreground">
        Supports JPG, PNG, WebP up to 10MB
      </p>

      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/5 to-transparent group-hover:animate-shimmer" />
      </div>
    </div>
  )
}
