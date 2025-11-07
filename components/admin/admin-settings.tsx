"use client"

import { Button } from "@/components/ui/button"

export default function AdminSettings({
  onNavigate,
}: {
  onNavigate: (screen: string) => void
}) {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-foreground">Settings</h1>
          <Button onClick={() => onNavigate("queue")} variant="outline" className="h-12 px-6">
            ← Back
          </Button>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {[
            {
              title: "System Configuration",
              items: ["Confidence Threshold", "Points Multiplier", "API Keys"],
            },
            {
              title: "Notifications",
              items: ["Alert Preferences", "Email Settings", "Webhooks"],
            },
            {
              title: "Security",
              items: ["Two-Factor Auth", "IP Whitelist", "Session Management"],
            },
          ].map((section, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-border">
              <h2 className="font-bold text-lg text-foreground mb-4">{section.title}</h2>
              <div className="space-y-3">
                {section.items.map((item, j) => (
                  <button
                    key={j}
                    className="w-full flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-muted transition-all"
                  >
                    <span className="font-medium text-foreground text-sm">{item}</span>
                    <span className="text-muted-foreground">›</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
