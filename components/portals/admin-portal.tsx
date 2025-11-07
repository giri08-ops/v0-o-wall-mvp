"use client"

import { useState } from "react"
import AdminLogin from "@/components/admin/admin-login"
import ReviewQueue from "@/components/admin/review-queue"
import ReceiptDetail from "@/components/admin/receipt-detail"
import FraudDashboard from "@/components/admin/fraud-dashboard"
import BrandManagement from "@/components/admin/brand-management"
import AdminSettings from "@/components/admin/admin-settings"

type AdminScreen = "login" | "queue" | "detail" | "fraud" | "brands" | "settings"

export default function AdminPortal() {
  const [screen, setScreen] = useState<AdminScreen>("login")
  const [selectedReceipt, setSelectedReceipt] = useState<any>(null)

  const handleNavigation = (nextScreen: AdminScreen, data?: any) => {
    if (nextScreen === "detail" && data) {
      setSelectedReceipt(data)
    }
    setScreen(nextScreen)
  }

  return (
    <div className="w-full min-h-screen bg-background">
      {screen === "login" && <AdminLogin onNavigate={handleNavigation} />}
      {screen === "queue" && <ReviewQueue onNavigate={handleNavigation} />}
      {screen === "detail" && <ReceiptDetail receipt={selectedReceipt} onNavigate={handleNavigation} />}
      {screen === "fraud" && <FraudDashboard onNavigate={handleNavigation} />}
      {screen === "brands" && <BrandManagement onNavigate={handleNavigation} />}
      {screen === "settings" && <AdminSettings onNavigate={handleNavigation} />}
    </div>
  )
}
