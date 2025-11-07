"use client"

import { Button } from "@/components/ui/button"

export default function BrandReports({
  onNavigate,
}: {
  onNavigate: (screen: string) => void
}) {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Reports</h1>
            <p className="text-muted-foreground mt-2">Analytics & Insights</p>
          </div>
          <div className="flex gap-3">
            <Button onClick={() => onNavigate("overview")} variant="outline" className="h-12 px-6">
              Export PDF
            </Button>
            <Button onClick={() => onNavigate("overview")} variant="outline" className="h-12 px-6">
              ← Back
            </Button>
          </div>
        </div>

        {/* Report Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {[
            { label: "Total Impressions", value: "45,230" },
            { label: "Click-Through Rate", value: "8.2%" },
            { label: "Conversion Rate", value: "3.4%" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-border">
              <p className="text-muted-foreground text-sm font-medium mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Report Sections */}
        <div className="bg-white rounded-2xl p-8 border border-border mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">Monthly Performance</h2>
          <div className="h-64 flex items-end justify-center gap-2 p-4 bg-secondary rounded-xl">
            {[30, 45, 35, 60, 50, 75, 65].map((h, i) => (
              <div key={i} className="bg-primary/70 rounded-t flex-1" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        {/* Detailed Table */}
        <div className="bg-white rounded-2xl p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">Campaign Performance</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold text-sm text-foreground">Campaign</th>
                  <th className="text-left px-4 py-3 font-semibold text-sm text-foreground">Impressions</th>
                  <th className="text-left px-4 py-3 font-semibold text-sm text-foreground">Clicks</th>
                  <th className="text-left px-4 py-3 font-semibold text-sm text-foreground">Conversions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Fall Promo",
                    impressions: "15,230",
                    clicks: "1,245",
                    conversions: "420",
                  },
                  {
                    name: "Holiday Bundle",
                    impressions: "18,900",
                    clicks: "1,512",
                    conversions: "510",
                  },
                  {
                    name: "Summer Sale",
                    impressions: "11,100",
                    clicks: "890",
                    conversions: "280",
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="px-4 py-3 text-foreground font-medium">{row.name}</td>
                    <td className="px-4 py-3 text-foreground">{row.impressions}</td>
                    <td className="px-4 py-3 text-foreground">{row.clicks}</td>
                    <td className="px-4 py-3 text-foreground">{row.conversions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
