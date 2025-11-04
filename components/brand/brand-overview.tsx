"use client"

import { Button } from "@/components/ui/button"

export default function BrandOverview({
  onNavigate,
}: {
  onNavigate: (screen: string) => void
}) {
  const campaigns = [
    { id: 1, name: "Fall Promo", active: true, engagement: 2450 },
    { id: 2, name: "Holiday Bundle", active: true, engagement: 1890 },
    { id: 3, name: "Summer Sale", active: false, engagement: 5200 },
  ]

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-2">Welcome, Starbucks Team</p>
          </div>
          <div className="flex gap-3">
            <Button onClick={() => onNavigate("create")} className="h-12 px-6 bg-primary text-white">
              + New Campaign
            </Button>
            <Button onClick={() => onNavigate("settings")} variant="outline" className="h-12 px-6">
              Settings
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {[
            { label: "Active Campaigns", value: "2", color: "bg-primary/10" },
            { label: "Total Engagement", value: "4,340", color: "bg-accent/10" },
            { label: "Points Distributed", value: "127,500", color: "bg-primary/10" },
          ].map((card, i) => (
            <div key={i} className={`${card.color} rounded-2xl p-8 border border-border`}>
              <p className="text-muted-foreground text-sm font-medium mb-2">{card.label}</p>
              <p className="text-4xl font-bold text-foreground">{card.value}</p>
            </div>
          ))}
        </div>

        {/* Campaigns Section */}
        <div className="bg-white rounded-2xl p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">Recent Campaigns</h2>
          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <button
                key={campaign.id}
                onClick={() => onNavigate("campaign-detail", campaign)}
                className="w-full flex items-center justify-between p-5 bg-secondary rounded-xl hover:shadow-card transition-all text-left"
              >
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{campaign.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{campaign.engagement} engagements</p>
                </div>
                <span
                  className={`px-4 py-2 rounded-full text-xs font-semibold ${
                    campaign.active ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {campaign.active ? "Active" : "Inactive"}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
