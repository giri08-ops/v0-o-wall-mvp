"use client"

import { useEffect } from "react"

export default function SplashScreen({
  onNavigate,
}: {
  onNavigate: (screen: string) => void
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNavigate("login")
    }, 2000)
    return () => clearTimeout(timer)
  }, [onNavigate])

  return (
    <div className="h-screen w-full bg-gradient-to-b from-primary/90 to-primary flex flex-col items-center justify-center gap-6 animate-fade-in">
      <div className="text-6xl font-bold text-white drop-shadow-lg">O'Wall</div>
      <div className="text-lg text-white/90 font-medium">Earn Rewards Today</div>
      <div className="w-12 h-12 rounded-full border-4 border-white/30 border-t-white animate-spin" />
    </div>
  )
}
