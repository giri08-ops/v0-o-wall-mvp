"use client"

import { Button } from "@/components/ui/button"

export default function ProfileScreen({
  onNavigate,
}: {
  onNavigate: (screen: string) => void
}) {
  return (
    <div className="h-screen w-full bg-background flex flex-col overflow-y-auto pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-primary px-6 pt-6 pb-8 text-white">
        <button
          onClick={() => onNavigate("home")}
          className="mb-4 text-white/70 hover:text-white font-semibold text-sm"
        >
          ← Back
        </button>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl border-2 border-white/40">
            👤
          </div>
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-white/80 text-sm">Member since Nov 2024</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 space-y-4">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-secondary rounded-2xl p-5 text-center">
            <p className="text-3xl font-bold text-primary">2,450</p>
            <p className="text-xs text-muted-foreground mt-2">Total Points</p>
          </div>
          <div className="bg-secondary rounded-2xl p-5 text-center">
            <p className="text-3xl font-bold text-accent">12</p>
            <p className="text-xs text-muted-foreground mt-2">Receipts</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-2 mt-6">
          {[
            { label: "Account Settings", icon: "⚙️" },
            { label: "Payment Methods", icon: "💳" },
            { label: "Privacy & Security", icon: "🔒" },
            { label: "Help & Support", icon: "❓" },
            { label: "About O'Wall", icon: "ℹ️" },
          ].map((item, i) => (
            <button
              key={i}
              className="w-full flex items-center justify-between p-4 bg-secondary rounded-xl hover:bg-muted transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium text-sm text-foreground">{item.label}</span>
              </div>
              <span className="text-muted-foreground">›</span>
            </button>
          ))}
        </div>

        {/* Sign Out */}
        <Button
          onClick={() => onNavigate("login")}
          className="w-full h-12 mt-8 bg-primary/10 text-primary font-semibold rounded-lg hover:bg-primary/20"
        >
          Sign Out
        </Button>
      </div>
    </div>
  )
}
