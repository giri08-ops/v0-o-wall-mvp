"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginOTP({
  onNavigate,
}: {
  onNavigate: (screen: string) => void
}) {
  const [step, setStep] = useState<"email" | "otp">("email")
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")

  const handleSendOTP = () => {
    if (email) {
      setStep("otp")
    }
  }

  const handleVerifyOTP = () => {
    if (otp) {
      onNavigate("home")
    }
  }

  return (
    <div className="h-screen w-full bg-background flex flex-col p-6 animate-slide-up">
      <div className="flex-1 flex flex-col justify-center gap-8">
        <div className="text-center gap-2 flex flex-col">
          <div className="text-4xl font-bold text-primary">O'Wall</div>
          <p className="text-muted-foreground">Sign in to your account</p>
        </div>

        <div className="flex flex-col gap-6">
          {step === "email" ? (
            <>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-foreground">Email Address</label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-lg border-border bg-input"
                />
              </div>
              <Button
                onClick={handleSendOTP}
                className="h-12 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-all"
              >
                Send OTP
              </Button>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-foreground">Enter OTP</label>
                <p className="text-xs text-muted-foreground">Sent to {email}</p>
                <Input
                  type="text"
                  placeholder="000000"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.slice(0, 6))}
                  className="h-12 rounded-lg border-border bg-input text-center text-2xl tracking-widest"
                  maxLength={6}
                />
              </div>
              <div className="flex gap-3">
                <Button onClick={() => setStep("email")} variant="outline" className="h-12 flex-1">
                  Back
                </Button>
                <Button
                  onClick={handleVerifyOTP}
                  className="h-12 flex-1 bg-primary text-white font-semibold rounded-lg hover:opacity-90"
                >
                  Verify
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
