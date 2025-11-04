"use client"

import { Button } from "@/components/ui/button"

export default function FraudDashboard({
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
            <h1 className="text-4xl font-bold text-foreground">Fraud Dashboard</h1>
            <p className="text-muted-foreground mt-2">System analytics & alerts</p>
          </div>
          <Button onClick={() => onNavigate("queue")} variant="outline" className="h-12 px-6">
            ← Back
          </Button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            {
              label: "Flagged This Week",
              value: "12",
              color: "text-red-500",
            },
            {
              label: "Approval Rate",
              value: "96.2%",
              color: "text-accent",
            },
            {
              label: "Avg. Processing Time",
              value: "2.3s",
              color: "text-primary",
            },
            {
              label: "Total Receipts",
              value: "8,421",
              color: "text-foreground",
            },
          ].map((kpi, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-border shadow-card">
              <p className="text-muted-foreground text-sm font-medium mb-2">{kpi.label}</p>
              <p className={`text-3xl font-bold ${kpi.color}`}>{kpi.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-2 gap-6">
          {/* Chart Placeholder 1 */}
          <div className="bg-white rounded-2xl p-6 border border-border h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              <p className="text-muted-foreground">Daily Submission Rate</p>
              <div className="mt-4 h-32 bg-secondary rounded flex items-end justify-center gap-1 p-2">
                {[40, 60, 50, 75, 55, 80, 65].map((h, i) => (
                  <div key={i} className="bg-accent rounded-t flex-1" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>

          {/* Chart Placeholder 2 */}
          <div className="bg-white rounded-2xl p-6 border border-border h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🎯</div>
              <p className="text-muted-foreground">Fraud Detected by Category</p>
              <div className="mt-4 space-y-2">
                {["Duplicate", "Invalid", "Suspicious", "Clear"].map((cat) => (
                  <div key={cat} className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-primary/30 rounded" />
                    <span className="text-xs text-muted-foreground">{cat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
