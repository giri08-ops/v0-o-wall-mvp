"use client"

import { Button } from "@/components/ui/button"

export default function CampaignDetail({
  campaign,
  onNavigate,
}: {
  campaign: any
  onNavigate: (screen: string) => void
}) {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <button onClick={() => onNavigate("campaigns")} className="text-primary font-semibold mb-8 hover:opacity-70">
          ← Back to Campaigns
        </button>

        <div className="grid grid-cols-2 gap-8">
          {/* Campaign Info */}
          <div className="bg-white rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">{campaign?.name}</h2>

            <div className="space-y-4">
              <div>
                <p className="text-muted-foreground text-sm font-medium mb-1">Discount</p>
                <p className="font-semibold text-lg text-primary">{campaign?.discount}</p>
              </div>

              <div>
                <p className="text-muted-foreground text-sm font-medium mb-1">Status</p>
                <p className="font-semibold text-foreground capitalize">{campaign?.status}</p>
              </div>

              <div>
                <p className="text-muted-foreground text-sm font-medium mb-1">Created</p>
                <p className="font-semibold text-foreground">{campaign?.created}</p>
              </div>

              <div className="pt-4 border-t border-border flex gap-3">
                <Button onClick={() => onNavigate("campaigns")} className="flex-1 h-10 bg-primary text-white">
                  Edit
                </Button>
                <Button onClick={() => onNavigate("campaigns")} variant="outline" className="flex-1 h-10">
                  Duplicate
                </Button>
              </div>
            </div>
          </div>

          {/* Performance Chart */}
          <div className="bg-white rounded-2xl p-8 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-6">Performance</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-muted-foreground">Engagement</p>
                  <p className="text-sm font-semibold text-foreground">2,450</p>
                </div>
                <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-accent rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-muted-foreground">Redemptions</p>
                  <p className="text-sm font-semibold text-foreground">1,820</p>
                </div>
                <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                  <div className="h-full w-3/5 bg-primary rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
