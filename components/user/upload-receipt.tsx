"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function UploadReceipt({
  onNavigate,
}: {
  onNavigate: (screen: string) => void
}) {
  const [preview, setPreview] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setPreview(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = () => {
    if (preview) {
      onNavigate("processing")
    }
  }

  return (
    <div className="h-screen w-full bg-background flex flex-col p-6 animate-slide-up">
      {/* Header */}
      <button
        onClick={() => onNavigate("home")}
        className="self-start text-primary font-semibold mb-6 hover:opacity-70"
      >
        ← Back
      </button>

      <div className="flex-1 flex flex-col justify-center gap-8">
        <div className="text-center gap-2 flex flex-col">
          <h1 className="text-3xl font-bold text-foreground">Upload Receipt</h1>
          <p className="text-muted-foreground">Earn points by submitting your receipts</p>
        </div>

        {preview ? (
          <div className="flex flex-col gap-4">
            <div className="w-full h-48 bg-muted rounded-2xl overflow-hidden border-2 border-border">
              <img src={preview || "/placeholder.svg"} alt="Receipt preview" className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-3">
              <Button onClick={() => setPreview(null)} variant="outline" className="h-12 flex-1">
                Choose Different
              </Button>
              <Button
                onClick={handleSubmit}
                className="h-12 flex-1 bg-primary text-white font-semibold rounded-lg hover:opacity-90"
              >
                Upload
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="w-full h-48 bg-secondary rounded-2xl border-2 border-dashed border-border flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📸</div>
                <p className="text-sm font-medium text-foreground">No image selected</p>
              </div>
            </div>

            <div className="relative">
              <Input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <Button className="w-full h-12 bg-primary text-white font-semibold rounded-lg hover:opacity-90">
                Choose Photo
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">JPG, PNG, or PDF • Max 10MB</p>
          </div>
        )}
      </div>
    </div>
  )
}
