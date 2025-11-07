"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ReceiptDetail({
  receipt,
  onNavigate,
}: {
  receipt: any
  onNavigate: (screen: string) => void
}) {
  const [action, setAction] = useState<"approve" | "reject" | null>(null)

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <button onClick={() => onNavigate("queue")} className="text-primary font-semibold mb-8 hover:opacity-70">
          ← Back to Queue
        </button>

        <div className="grid grid-cols-3 gap-8">
          {/* Receipt Image */}
          <div className="col-span-1">
            <div className="bg-secondary rounded-2xl h-96 flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center">
                <div className="text-5xl mb-2">🧾</div>
                <p className="text-muted-foreground text-sm">Receipt Image Preview</p>
              </div>
            </div>
          </div>

          {/* Details and Actions */}
          <div className="col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Receipt Details</h2>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium mb-1">Merchant</p>
                    <p className="font-semibold text-foreground">{receipt?.merchant}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm font-medium mb-1">Amount</p>
                    <p className="font-semibold text-foreground">${receipt?.amount.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm font-medium mb-1">User</p>
                    <p className="font-semibold text-foreground">{receipt?.user}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm font-medium mb-1">Date</p>
                    <p className="font-semibold text-foreground">{receipt?.date}</p>
                  </div>
                </div>

                {/* Confidence */}
                <div className="pt-4 border-t border-border">
                  <p className="text-muted-foreground text-sm font-medium mb-2">Confidence Score</p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-3 bg-border rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-accent rounded-full" />
                    </div>
                    <span className="font-bold text-accent">92%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                onClick={() => setAction("approve")}
                className="flex-1 h-12 bg-accent text-white font-semibold rounded-lg hover:opacity-90"
              >
                ✓ Approve
              </Button>
              <Button
                onClick={() => setAction("reject")}
                variant="outline"
                className="flex-1 h-12 border-red-500 text-red-500"
              >
                ✕ Reject
              </Button>
            </div>

            {action && (
              <div className="bg-primary/10 border border-primary rounded-2xl p-6 text-center">
                <p className="text-primary font-semibold">
                  {action === "approve" ? "Receipt approved! Points awarded." : "Receipt rejected. User notified."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
