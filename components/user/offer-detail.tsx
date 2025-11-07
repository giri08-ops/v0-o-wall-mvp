"use client"

import { Button } from "@/components/ui/button"

export default function OfferDetail({
  offer,
  onNavigate,
}: {
  offer: any
  onNavigate: (screen: string) => void
}) {
  return (
    <div className="h-screen w-full bg-background flex flex-col animate-slide-up overflow-y-auto pb-20">
      {/* Header */}
      <button
        onClick={() => onNavigate("offers")}
        className="sticky top-0 z-40 self-start text-primary font-semibold p-6 hover:opacity-70 bg-background"
      >
        ← Back
      </button>

      <div className="flex-1 px-6 pb-6 space-y-6">
        {/* Offer Card */}
        <div className="bg-secondary rounded-3xl p-8 text-center">
          <div className="text-7xl mb-4">{offer?.logo}</div>
          <h1 className="text-3xl font-bold text-foreground mb-2">{offer?.name}</h1>
          <p className="text-accent text-2xl font-bold mb-4">{offer?.discount}</p>
          <p className="text-muted-foreground text-sm">Limited time offer</p>
        </div>

        {/* Details */}
        <div className="space-y-3">
          <div className="bg-secondary rounded-2xl p-5">
            <p className="text-xs text-muted-foreground font-medium mb-2">Points Required</p>
            <p className="text-2xl font-bold text-primary">{offer?.pointsNeeded}</p>
          </div>

          <div className="bg-secondary rounded-2xl p-5">
            <p className="text-xs text-muted-foreground font-medium mb-2">Valid Until</p>
            <p className="font-semibold text-foreground">Dec 31, 2024</p>
          </div>

          <div className="bg-secondary rounded-2xl p-5">
            <p className="text-xs text-muted-foreground font-medium mb-3">About This Offer</p>
            <p className="text-sm text-foreground leading-relaxed">
              Get {offer?.discount} off at {offer?.name}. Valid for one-time use. Redeem instantly and use in-store or
              online.
            </p>
          </div>
        </div>

        {/* Action */}
        <Button className="w-full h-12 bg-primary text-white font-semibold rounded-lg hover:opacity-90">
          Redeem Now
        </Button>
      </div>
    </div>
  )
}
