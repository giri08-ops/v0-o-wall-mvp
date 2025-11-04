"use client"

import { useState, useEffect } from "react"
import UserApp from "@/components/portals/user-app"
import AdminPortal from "@/components/portals/admin-portal"
import BrandPortal from "@/components/portals/brand-portal"

export default function PrototypeSwitcher() {
  const [portal, setPortal] = useState<"user" | "admin" | "brand">("user")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="min-h-screen bg-background">
      {/* Portal Switcher */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 p-3 bg-white rounded-lg shadow-lg border border-border">
        <button
          onClick={() => setPortal("user")}
          className={`px-3 py-1.5 rounded font-medium text-sm transition-all ${
            portal === "user" ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-secondary"
          }`}
        >
          User App
        </button>
        <button
          onClick={() => setPortal("admin")}
          className={`px-3 py-1.5 rounded font-medium text-sm transition-all ${
            portal === "admin" ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-secondary"
          }`}
        >
          Admin
        </button>
        <button
          onClick={() => setPortal("brand")}
          className={`px-3 py-1.5 rounded font-medium text-sm transition-all ${
            portal === "brand" ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-secondary"
          }`}
        >
          Brand
        </button>
      </div>

      {/* Portal Content */}
      {portal === "user" && <UserApp />}
      {portal === "admin" && <AdminPortal />}
      {portal === "brand" && <BrandPortal />}
    </div>
  )
}
