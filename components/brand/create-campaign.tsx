"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CreateCampaign({
  onNavigate,
}: {
  onNavigate: (screen: string) => void
}) {
  const [formData, setFormData] = useState({
    name: "",
    discount: "",
    description: "",
  })

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <button onClick={() => onNavigate("campaigns")} className="text-primary font-semibold mb-8 hover:opacity-70">
          ← Back
        </button>

        <div className="bg-white rounded-2xl p-8 border border-border">
          <h1 className="text-3xl font-bold text-foreground mb-8">Create Campaign</h1>

          <div className="space-y-6">
            <div>
              <label className="text-sm font-semibold text-foreground block mb-2">Campaign Name</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., Black Friday 2024"
                className="h-12"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-foreground block mb-2">Discount Value</label>
              <Input
                value={formData.discount}
                onChange={(e) => setFormData({ ...formData, discount: e.target.value })}
                placeholder="e.g., 20% or $10 off"
                className="h-12"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-foreground block mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Campaign details..."
                className="w-full h-32 p-4 border border-border rounded-lg font-sans resize-none"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                onClick={() => onNavigate("campaigns")}
                className="flex-1 h-12 bg-primary text-white font-semibold rounded-lg"
              >
                Create Campaign
              </Button>
              <Button onClick={() => onNavigate("campaigns")} variant="outline" className="flex-1 h-12">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
