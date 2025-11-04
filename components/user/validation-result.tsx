"use client"

import { Button } from "@/components/ui/button"

type ValidationData = {
  amount: number
  confidence: number
  merchant: string
  date: string
  earnedPoints: number
}

export default function ValidationResult({
  onNavigate,
  data,
}: {
  onNavigate: (screen: string) => void
  data: ValidationData
}) {
  return (
    <div className="h-screen w-full bg-background flex flex-col p-6 animate-slide-up">
      {/* Header */}
      <div className="text-center mb-8 mt-4">
        <div className="text-5xl mb-4">✓</div>
        <h1 className="text-2xl font-bold text-foreground">Receipt Validated</h1>
      </div>

      {/* Details */}
      <div className="flex-1 space-y-4">
        <div className="bg-secondary rounded-2xl p-5 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">Merchant</span>
            <span className="font-semibold text-foreground">{data.merchant}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">Amount</span>
            <span className="font-semibold text-foreground">${data.amount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">Date</span>
            <span className="font-semibold text-foreground">{data.date}</span>
          </div>
        </div>

        {/* Confidence Bar */}
        <div className="bg-secondary rounded-2xl p-5">
          <div className="flex justify-between items-center mb-3">
            <span className="text-muted-foreground text-sm">Confidence</span>
            <span className="font-semibold text-accent">{data.confidence}%</span>
          </div>
          <div className="w-full h-3 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
              style={{ width: `${data.confidence}%` }}
            />
          </div>
        </div>

        {/* Earned Points */}
        <div className="bg-accent/10 border border-accent rounded-2xl p-6 text-center">
          <p className="text-sm text-accent font-medium mb-2">Earned</p>
          <p className="text-4xl font-bold text-accent">+{data.earnedPoints}</p>
          <p className="text-xs text-muted-foreground mt-2">Points</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button
          onClick={() => onNavigate("home")}
          className="flex-1 h-12 bg-primary text-white font-semibold rounded-lg hover:opacity-90"
        >
          Back Home
        </Button>
        <Button onClick={() => onNavigate("upload")} variant="outline" className="flex-1 h-12">
          Upload Another
        </Button>
      </div>
    </div>
  )
}
