"use client"

import { useState } from "react"
import SplashScreen from "@/components/user/splash-screen"
import LoginOTP from "@/components/user/login-otp"
import HomeScreen from "@/components/user/home-screen"
import UploadReceipt from "@/components/user/upload-receipt"
import ProcessingReceipt from "@/components/user/processing-receipt"
import ValidationResult from "@/components/user/validation-result"
import WalletScreen from "@/components/user/wallet-screen"
import OffersScreen from "@/components/user/offers-screen"
import OfferDetail from "@/components/user/offer-detail"
import NotificationsScreen from "@/components/user/notifications-screen"
import ProfileScreen from "@/components/user/profile-screen"

type UserScreens =
  | "splash"
  | "login"
  | "home"
  | "upload"
  | "processing"
  | "validation"
  | "wallet"
  | "offers"
  | "offer-detail"
  | "notifications"
  | "profile"

export default function UserApp() {
  const [currentScreen, setCurrentScreen] = useState<UserScreens>("splash")
  const [selectedOffer, setSelectedOffer] = useState<any>(null)
  const [validationData, setValidationData] = useState<any>(null)

  const handleNavigation = (screen: UserScreens, data?: any) => {
    if (screen === "offer-detail" && data) {
      setSelectedOffer(data)
    }
    if (screen === "validation" && data) {
      setValidationData(data)
    }
    setCurrentScreen(screen)
  }

  // Mobile viewport container
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-[375px] bg-background rounded-2xl shadow-2xl overflow-hidden border-8 border-gray-300">
        {currentScreen === "splash" && <SplashScreen onNavigate={handleNavigation} />}
        {currentScreen === "login" && <LoginOTP onNavigate={handleNavigation} />}
        {currentScreen === "home" && <HomeScreen onNavigate={handleNavigation} />}
        {currentScreen === "upload" && <UploadReceipt onNavigate={handleNavigation} />}
        {currentScreen === "processing" && <ProcessingReceipt onNavigate={handleNavigation} />}
        {currentScreen === "validation" && <ValidationResult onNavigate={handleNavigation} data={validationData} />}
        {currentScreen === "wallet" && <WalletScreen onNavigate={handleNavigation} />}
        {currentScreen === "offers" && <OffersScreen onNavigate={handleNavigation} />}
        {currentScreen === "offer-detail" && <OfferDetail offer={selectedOffer} onNavigate={handleNavigation} />}
        {currentScreen === "notifications" && <NotificationsScreen onNavigate={handleNavigation} />}
        {currentScreen === "profile" && <ProfileScreen onNavigate={handleNavigation} />}
      </div>
    </div>
  )
}
