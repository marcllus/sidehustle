"use client"

import Link from "next/link"

const stats = [
  { value: "12k+", label: "Freelancers", gradient: true },
  { value: "$340", label: "Avg extra / month", color: "text-teal" },
  { value: "4.9★", label: "Average rating", color: "text-amber" },
  { value: "2.4×", label: "Faster invoicing", color: "text-foreground" },
]

export function FinalCTA() {
  return (
    <section className="py-[120px] relative z-10">
      <div className="max-w-[1140px] mx-auto px-8">
        <div className="reveal text-center bg-gradient-to-br from-blue/[0.07] via-purple/[0.05] to-teal/[0.04] border border-blue/[0.18] rounded-[32px] p-[96px_48px] relative overflow-hidden max-sm:p-[64px_24px]">
          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-30%,rgba(59,130,246,0.12),transparent_70%)]" />

          <div className="relative">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.1em] uppercase text-muted-2 justify-center mb-6">
              <span className="w-7 h-px bg-border-3" />
              Stop leaving money on the table
            </div>

            <h2 className="font-[var(--font-syne)] text-[clamp(34px,5.5vw,64px)] font-extrabold tracking-[-0.04em] leading-[1.1] mb-5">
              Your freelance business
              <br />
              deserves better tools
            </h2>

            <p className="text-lg text-foreground-muted max-w-[480px] mx-auto mb-11 leading-relaxed">
              Join 12,000+ freelancers who finally know what they&apos;re earning — and get paid faster for it.
            </p>

            <div className="flex gap-3.5 justify-center flex-wrap">
              <Link
                href="#pricing"
                className="font-[var(--font-syne)] font-bold text-base px-9 py-4 rounded-xl bg-gradient-to-br from-blue to-[#1d4ed8] text-white shadow-[0_0_40px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all hover:translate-y-[-2px] hover:shadow-[0_0_60px_rgba(59,130,246,0.5),inset_0_1px_0_rgba(255,255,255,0.15)]"
              >
                Start free — no card needed →
              </Link>
              <Link
                href="#testimonials"
                className="font-[var(--font-syne)] font-bold text-[15px] px-8 py-4 rounded-xl bg-border-1 text-foreground-muted border border-border-2 backdrop-blur-lg transition-all hover:bg-border-2 hover:text-foreground"
              >
                Read reviews
              </Link>
            </div>

            <div className="flex gap-10 justify-center flex-wrap mt-12 pt-10 border-t border-border-1">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className={`font-[var(--font-syne)] text-[30px] font-extrabold tracking-[-0.03em] ${
                      stat.gradient ? "gradient-blue" : stat.color
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-2 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
