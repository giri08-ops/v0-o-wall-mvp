"use client"

import { Button } from "@/components/ui/button"

const campaignData = [
  {
    id: 1,
    name: "Fall Promo",
    status: "active",
    discount: "20%",
    created: "Oct 15",
  },
  {
    id: 2,
    name: "Holiday Bundle",
    status: "active",
    discount: "$10 off",
    created: "Nov 1",
  },
  {
    id: 3,
    name: "Summer Sale",
    status: "inactive",
    discount: "15%",
    created: "Aug 20",
  },
]

export default function CampaignList({
  onNavigate,
}: {
  onNavigate: (screen: string, data?: any) => void
}) {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Campaigns</h1>
            <p className="text-muted-foreground mt-2">{campaignData.length} total campaigns</p>
          </div>
          <div className="flex gap-3">
            <Button onClick={() => onNavigate("create")} className="h-12 px-6 bg-primary text-white">
              + Create Campaign
            </Button>
            <Button onClick={() => onNavigate("overview")} variant="outline" className="h-12 px-6">
              Back
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl overflow-hidden border border-border">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary border-b border-border">
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Campaign Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Discount</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Created</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {campaignData.map((campaign) => (
                <tr key={campaign.id} className="border-b border-border hover:bg-secondary/50">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-foreground">{campaign.name}</p>
                  </td>
                  <td className="px-6 py-4 text-foreground">{campaign.discount}</td>
                  <td className="px-6 py-4 text-muted-foreground text-sm">{campaign.created}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        campaign.status === "active" ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => onNavigate("campaign-detail", campaign)}
                      className="text-primary font-semibold hover:opacity-70"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
