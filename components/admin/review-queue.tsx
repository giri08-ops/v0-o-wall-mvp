"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const receipts = [
  {
    id: 1,
    merchant: "Whole Foods Market",
    amount: 45.99,
    user: "John Doe",
    status: "pending",
    date: "Nov 3, 2024",
  },
  {
    id: 2,
    merchant: "Starbucks",
    amount: 12.5,
    user: "Jane Smith",
    status: "pending",
    date: "Nov 3, 2024",
  },
  {
    id: 3,
    merchant: "Target",
    amount: 89.99,
    user: "Mike Johnson",
    status: "pending",
    date: "Nov 3, 2024",
  },
  {
    id: 4,
    merchant: "Trader Joe's",
    amount: 67.45,
    user: "Sarah Williams",
    status: "pending",
    date: "Nov 2, 2024",
  },
]

export default function ReviewQueue({
  onNavigate,
}: {
  onNavigate: (screen: string, data?: any) => void
}) {
  const [selectedRows, setSelectedRows] = useState<number[]>([])

  const toggleRow = (id: number) => {
    setSelectedRows((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Review Queue</h1>
            <p className="text-muted-foreground mt-2">{receipts.length} receipts pending review</p>
          </div>
          <div className="flex gap-3">
            <Button onClick={() => onNavigate("fraud")} variant="outline" className="h-12 px-6">
              Fraud Dashboard
            </Button>
            <Button onClick={() => onNavigate("queue")} className="h-12 px-6 bg-primary text-white">
              Refresh
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-card">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary border-b border-border">
                <th className="w-12 px-6 py-4 text-left">
                  <input type="checkbox" className="w-4 h-4 rounded cursor-pointer" />
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Merchant</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">User</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Date</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {receipts.map((receipt, i) => (
                <tr key={receipt.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(receipt.id)}
                      onChange={() => toggleRow(receipt.id)}
                      className="w-4 h-4 rounded cursor-pointer"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-foreground">{receipt.merchant}</p>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{receipt.user}</td>
                  <td className="px-6 py-4 font-semibold text-foreground">${receipt.amount.toFixed(2)}</td>
                  <td className="px-6 py-4 text-muted-foreground text-sm">{receipt.date}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => onNavigate("detail", receipt)}
                      className="text-primary font-semibold hover:opacity-70 transition-all"
                    >
                      Review
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
