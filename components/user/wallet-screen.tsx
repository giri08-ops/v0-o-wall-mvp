"use client"

import { useState } from "react"

type WalletTab = "earned" | "redeemed" | "pending"

export default function WalletScreen({
  onNavigate,
}: {
  onNavigate: (screen: string) => void
}) {
  const [activeTab, setActiveTab] = useState<WalletTab>("earned")

  const earned = [
    { label: "Grocery Store", points: 150, date: "Nov 3" },
    { label: "Gas Station", points: 100, date: "Nov 2" },
    { label: "Restaurant", points: 200, date: "Nov 1" },
  ]

  const redeemed = [
    { label: "Coffee Voucher", points: 500, date: "Oct 30" },
    { label: "Discount Code", points: 300, date: "Oct 28" },
  ]

  const pending = [{ label: "Starbucks Receipt", points: 150, date: "Processing" }]

  const tabData = {
    earned: earned,
    redeemed: redeemed,
    pending: pending,
  }

  return (
    <div className="h-screen w-full bg-background flex flex-col overflow-y-auto pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-primary px-6 pt-6 pb-6 text-white">
        <button
          onClick={() => onNavigate("home")}
          className="mb-4 text-white/70 hover:text-white font-semibold text-sm"
        >
          ← Back
        </button>
        <h1 className="text-3xl font-bold">Wallet</h1>
      </div>

      {/* Tabs */}
      <div className="sticky top-16 z-30 bg-background border-b border-border px-6 flex gap-1">
        {(["earned", "redeemed", "pending"] as WalletTab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-4 px-4 font-semibold text-sm transition-all border-b-2 ${
              activeTab === tab
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 space-y-3">
        {tabData[activeTab].map((item, i) => (
          <div
            key={i}
            className="bg-secondary rounded-xl p-4 flex items-center justify-between hover:shadow-card transition-all"
          >
            <div className="flex-1">
              <p className="font-semibold text-sm text-foreground">{item.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
            </div>
            <p className={`font-bold text-sm ${activeTab === "earned" ? "text-accent" : "text-foreground"}`}>
              {activeTab === "earned" ? "+" : "-"}
              {item.points}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
