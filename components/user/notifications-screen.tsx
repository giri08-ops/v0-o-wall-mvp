"use client"

const notifications = [
  {
    id: 1,
    title: "Receipt Approved",
    message: "Your Starbucks receipt earned 150 points",
    time: "2 hours ago",
    icon: "✓",
  },
  {
    id: 2,
    title: "New Offer Available",
    message: "Exclusive 30% off at Nike just for you",
    time: "1 day ago",
    icon: "🎁",
  },
  {
    id: 3,
    title: "Points Expiring Soon",
    message: "500 points expire in 7 days",
    time: "3 days ago",
    icon: "⏰",
  },
]

export default function NotificationsScreen({
  onNavigate,
}: {
  onNavigate: (screen: string) => void
}) {
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
        <h1 className="text-3xl font-bold">Notifications</h1>
      </div>

      {/* List */}
      <div className="flex-1 px-6 py-6 space-y-3">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="bg-secondary rounded-xl p-4 border-l-4 border-primary hover:shadow-card transition-all"
          >
            <div className="flex gap-3">
              <div className="text-2xl flex-shrink-0">{notif.icon}</div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-foreground">{notif.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{notif.message}</p>
                <p className="text-xs text-muted-foreground/70 mt-2">{notif.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
