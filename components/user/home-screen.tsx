"use client"

type HomeScreenProps = {
  onNavigate: (screen: string) => void
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="h-screen w-full bg-background flex flex-col overflow-y-auto pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-gradient-to-b from-primary to-primary/90 px-6 pt-6 pb-8 text-white">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-sm font-medium opacity-90">Welcome back!</p>
            <h1 className="text-2xl font-bold">John Doe</h1>
          </div>
          <button
            onClick={() => onNavigate("notifications")}
            className="relative w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
          >
            🔔
          </button>
        </div>

        {/* Points Card */}
        <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20">
          <p className="text-xs opacity-75 font-medium mb-2">Current Balance</p>
          <h2 className="text-4xl font-bold mb-1">2,450</h2>
          <p className="text-xs opacity-75">Points available</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 py-6 space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate("upload")}
            className="bg-secondary rounded-2xl p-5 text-left hover:shadow-card transition-all transform hover:scale-105 active:scale-95"
          >
            <div className="text-2xl mb-2">📷</div>
            <p className="font-semibold text-sm text-foreground">Upload Receipt</p>
            <p className="text-xs text-muted-foreground mt-1">Earn points</p>
          </button>

          <button
            onClick={() => onNavigate("wallet")}
            className="bg-secondary rounded-2xl p-5 text-left hover:shadow-card transition-all transform hover:scale-105 active:scale-95"
          >
            <div className="text-2xl mb-2">💳</div>
            <p className="font-semibold text-sm text-foreground">Wallet</p>
            <p className="text-xs text-muted-foreground mt-1">Manage points</p>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate("offers")}
            className="bg-secondary rounded-2xl p-5 text-left hover:shadow-card transition-all transform hover:scale-105 active:scale-95"
          >
            <div className="text-2xl mb-2">🎁</div>
            <p className="font-semibold text-sm text-foreground">Offers</p>
            <p className="text-xs text-muted-foreground mt-1">Browse deals</p>
          </button>

          <button
            onClick={() => onNavigate("profile")}
            className="bg-secondary rounded-2xl p-5 text-left hover:shadow-card transition-all transform hover:scale-105 active:scale-95"
          >
            <div className="text-2xl mb-2">👤</div>
            <p className="font-semibold text-sm text-foreground">Profile</p>
            <p className="text-xs text-muted-foreground mt-1">Settings</p>
          </button>
        </div>

        {/* Recent Activity */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground text-sm">Recent Activity</h3>
          {[
            { label: "Starbucks Purchase", points: "+150", date: "Today" },
            { label: "Amazon Reward", points: "+200", date: "Yesterday" },
            { label: "Redeemed Gift", points: "-500", date: "2 days ago" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-secondary rounded-xl">
              <div className="flex-1">
                <p className="font-medium text-sm text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.date}</p>
              </div>
              <p className={`font-bold text-sm ${item.points.startsWith("+") ? "text-accent" : "text-foreground"}`}>
                {item.points}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
