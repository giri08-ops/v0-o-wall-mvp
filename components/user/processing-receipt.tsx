"use client"

import { useEffect } from "react"

export default function ProcessingReceipt({
  onNavigate,
}: {
  onNavigate: (screen: string) => void
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNavigate("validation", {
        amount: 45.99,
        confidence: 92,
        merchant: "Whole Foods Market",
        date: "Nov 3, 2024",
        earnedPoints: 460,
      })
    }, 2500)
    return () => clearTimeout(timer)
  }, [onNavigate])

  return (
    <div className="h-screen w-full bg-background flex flex-col items-center justify-center gap-8 p-6">
      <div className="text-center gap-3 flex flex-col">
        <h1 className="text-2xl font-bold text-foreground">Processing</h1>
        <p className="text-muted-foreground">Analyzing your receipt...</p>
      </div>

      {/* Animated spinner */}
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-4 border-border" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin" />
      </div>

      {/* Progress steps */}
      <div className="w-full space-y-3 mt-8">
        {["Scanning", "Validating", "Processing"].map((step, i) => (
          <div key={i} className="flex items-center gap-3 animate-pulse-soft">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <p className="text-sm font-medium text-foreground">{step}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
