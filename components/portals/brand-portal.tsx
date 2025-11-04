"use client"

import { useState } from "react"
import BrandLogin from "@/components/brand/brand-login"
import BrandOverview from "@/components/brand/brand-overview"
import CampaignList from "@/components/brand/campaign-list"
import CampaignDetail from "@/components/brand/campaign-detail"
import CreateCampaign from "@/components/brand/create-campaign"
import BrandReports from "@/components/brand/brand-reports"
import BrandSettings from "@/components/brand/brand-settings"

type BrandScreen = "login" | "overview" | "campaigns" | "campaign-detail" | "create" | "reports" | "settings"

export default function BrandPortal() {
  const [screen, setScreen] = useState<BrandScreen>("login")
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null)

  const handleNavigation = (nextScreen: BrandScreen, data?: any) => {
    if (nextScreen === "campaign-detail" && data) {
      setSelectedCampaign(data)
    }
    setScreen(nextScreen)
  }

  return (
    <div className="w-full min-h-screen bg-background">
      {screen === "login" && <BrandLogin onNavigate={handleNavigation} />}
      {screen === "overview" && <BrandOverview onNavigate={handleNavigation} />}
      {screen === "campaigns" && <CampaignList onNavigate={handleNavigation} />}
      {screen === "campaign-detail" && <CampaignDetail campaign={selectedCampaign} onNavigate={handleNavigation} />}
      {screen === "create" && <CreateCampaign onNavigate={handleNavigation} />}
      {screen === "reports" && <BrandReports onNavigate={handleNavigation} />}
      {screen === "settings" && <BrandSettings onNavigate={handleNavigation} />}
    </div>
  )
}
