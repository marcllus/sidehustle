"use client"

interface StatCardProps {
  label: string
  value: string
  change?: string
  changeDirection?: "up" | "down" | "neutral"
  glowColor?: string
  sparklineData?: number[]
  sparklineColor?: string
}

export function StatCard({
  label,
  value,
  change,
  changeDirection = "up",
  glowColor = "rgba(59,130,246,0.3)",
  sparklineData,
  sparklineColor = "var(--blue)",
}: StatCardProps) {
  return (
    <div
      className="bg-surface-1 border border-border-1 rounded-[20px] p-[22px] relative overflow-hidden transition-all hover:border-border-2 hover:translate-y-[-2px]"
      style={{ "--stat-glow": glowColor } as React.CSSProperties}
    >
      {/* Glow effect */}
      <div
        className="absolute -bottom-[30px] -right-[30px] w-[100px] h-[100px] rounded-full opacity-20"
        style={{ background: glowColor }}
      />

      <div className="text-xs font-semibold text-muted uppercase tracking-[0.06em] mb-2.5">
        {label}
      </div>
      
      <div className="font-[var(--font-syne)] text-[32px] font-extrabold tracking-[-0.03em] leading-none">
        {value}
      </div>

      {change && (
        <div
          className={`text-xs font-semibold mt-2 flex items-center gap-1 ${
            changeDirection === "up"
              ? "text-teal"
              : changeDirection === "down"
              ? "text-red"
              : "text-amber"
          }`}
        >
          {changeDirection === "up" ? "▲" : changeDirection === "down" ? "▼" : "⏳"} {change}
        </div>
      )}

      {sparklineData && (
        <div className="flex items-end gap-0.5 h-8 mt-3">
          {sparklineData.map((height, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-[3px] opacity-60 transition-opacity hover:opacity-100"
              style={{
                height: `${height}%`,
                background: sparklineColor,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
