"use client"

const tickerItems = [
  { icon: "★★★★★", text: '"Finally know my real hourly rate"', author: "Sarah K." },
  { icon: "📈", text: "12,000+", label: "freelancers track their income" },
  { icon: "💰", text: "$340 more/month", label: "Average user earns after raising rates" },
  { icon: "★★★★★", text: '"Invoicing is finally stress-free"', author: "Marcus T." },
  { icon: "⏱", text: "under 5 minutes", label: "Setup takes" },
  { icon: "🔥", text: "2.4×", label: "faster invoice cycle on average" },
  { icon: "★★★★★", text: '"Best $7 I spend every month"', author: "Priya M." },
  { icon: "🏆", text: "4.9 stars", label: "across 800+ reviews" },
]

export function Ticker() {
  const items = [...tickerItems, ...tickerItems]

  return (
    <div className="relative border-y border-border-1 bg-background-2 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute top-0 bottom-0 left-0 w-[120px] bg-gradient-to-r from-background-2 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-[120px] bg-gradient-to-l from-background-2 to-transparent z-10 pointer-events-none" />

      <div className="flex gap-0 py-3.5 whitespace-nowrap animate-ticker">
        {items.map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2.5 px-8 text-[13px] text-muted-2 font-medium border-r border-border-1"
          >
            <span className={item.icon.includes("★") ? "text-amber" : ""}>{item.icon}</span>
            <span>
              {item.label && <span>{item.label} </span>}
              <strong className="text-foreground-muted font-bold">{item.text}</strong>
              {item.author && <span> — {item.author}</span>}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
