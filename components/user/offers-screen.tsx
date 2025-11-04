"use client"

const brands = [
  {
    id: 1,
    name: "Starbucks",
    logo: "☕",
    discount: "20%",
    pointsNeeded: 500,
  },
  {
    id: 2,
    name: "Amazon",
    logo: "📦",
    discount: "$10 off",
    pointsNeeded: 1000,
  },
  {
    id: 3,
    name: "Nike",
    logo: "👟",
    discount: "15%",
    pointsNeeded: 800,
  },
  {
    id: 4,
    name: "Uber Eats",
    logo: "🍕",
    discount: "$15 credit",
    pointsNeeded: 1200,
  },
  {
    id: 5,
    name: "Spotify",
    logo: "🎵",
    discount: "1 month free",
    pointsNeeded: 2000,
  },
  {
    id: 6,
    name: "Target",
    logo: "🛍️",
    discount: "10%",
    pointsNeeded: 600,
  },
]

export default function OffersScreen({
  onNavigate,
}: {
  onNavigate: (screen: string, data?: any) => void
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
        <h1 className="text-3xl font-bold">Offers</h1>
        <p className="text-white/80 text-sm mt-1">Browse and redeem rewards</p>
      </div>

      {/* Grid */}
      <div className="flex-1 px-6 py-6 grid grid-cols-2 gap-4">
        {brands.map((brand) => (
          <button
            key={brand.id}
            onClick={() => onNavigate("offer-detail", brand)}
            className="bg-secondary rounded-2xl p-5 text-left hover:shadow-card transition-all transform hover:scale-105 active:scale-95 space-y-3"
          >
            <div className="text-4xl">{brand.logo}</div>
            <div>
              <p className="font-bold text-foreground text-sm">{brand.name}</p>
              <p className="text-accent font-semibold text-sm mt-1">{brand.discount}</p>
              <p className="text-xs text-muted-foreground mt-2">{brand.pointsNeeded} pts</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
