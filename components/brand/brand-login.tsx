"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BrandLogin({
  onNavigate,
}: {
  onNavigate: (screen: string) => void
}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    if (email && password) {
      onNavigate("overview")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-accent/10 to-background p-6">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-lg border border-border">
        <h1 className="text-3xl font-bold text-foreground mb-2">O'Wall</h1>
        <p className="text-muted-foreground mb-8">Brand Partner Portal</p>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-foreground block mb-2">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="brand@company.com"
              className="h-12"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-foreground block mb-2">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="h-12"
            />
          </div>

          <Button
            onClick={handleLogin}
            className="w-full h-12 bg-primary text-white font-semibold rounded-lg hover:opacity-90"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  )
}
