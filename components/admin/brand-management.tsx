"use client"

import { Button } from "@/components/ui/button"

const brands = [
  { id: 1, name: "Starbucks", status: "active", partnersince: "Jan 2024" },
  { id: 2, name: "Amazon", status: "active", partnersince: "Feb 2024" },
  { id: 3, name: "Nike", status: "pending", partnersince: "Nov 2024" },
  { id: 4, name: "Target", status: "active", partnersince: "Mar 2024" },
]

export default function BrandManagement({
  onNavigate,
}: {
  onNavigate: (screen: string) => void
}) {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Brand Management</h1>
            <p className="text-muted-foreground mt-2">{brands.length} partners</p>
          </div>
          <Button onClick={() => onNavigate("queue")} variant="outline" className="h-12 px-6">
            ← Back
          </Button>
        </div>

        {/* Brand List */}
        <div className="space-y-3">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-2xl p-6 border border-border hover:shadow-card transition-all flex items-center justify-between"
            >
              <div className="flex-1">
                <p className="font-semibold text-foreground text-lg">{brand.name}</p>
                <p className="text-sm text-muted-foreground mt-1">Partner since {brand.partnersince}</p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`px-4 py-2 rounded-full text-xs font-semibold ${
                    brand.status === "active" ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary"
                  }`}
                >
                  {brand.status}
                </span>
                <Button variant="outline" className="h-10 px-4 bg-transparent" onClick={() => onNavigate("queue")}>
                  Edit
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
