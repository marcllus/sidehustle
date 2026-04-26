"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"

export function RateCounter() {
  const [rate, setRate] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateRate()
          }
        })
      },
      { threshold: 0.12 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateRate = () => {
    const start = 20
    const end = 68
    const duration = 1800
    const startTime = performance.now()

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setRate(Math.round(start + (end - start) * ease))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }

  return (
    <section ref={sectionRef} className="py-[120px] relative z-10">
      <div className="max-w-[1140px] mx-auto px-8">
        <div className="reveal bg-gradient-to-br from-blue/[0.06] via-purple/[0.04] to-teal/[0.03] border border-blue/15 rounded-[28px] p-[72px_60px] text-center relative overflow-hidden max-sm:p-[48px_24px]">
          {/* Glow */}
          <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />

          <div className="relative inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.1em] uppercase text-muted-2 justify-center mb-4">
            <span className="w-7 h-px bg-border-3" />
            The wake-up call
          </div>
          <h2 className="relative font-[var(--font-syne)] text-[clamp(30px,4.5vw,52px)] font-extrabold tracking-[-0.04em] leading-[1.1]">
            {"What's your "}
            <span className="gradient-blue">real rate</span>?
          </h2>

          <div className="relative font-[var(--font-syne)] text-[clamp(64px,12vw,120px)] font-extrabold tracking-[-0.06em] leading-none bg-gradient-to-br from-white via-blue-2 to-teal bg-clip-text text-transparent my-6">
            ${rate}
            <span className="text-[clamp(28px,4vw,42px)] opacity-60">/hr</span>
          </div>

          <p className="relative text-base text-foreground-muted max-w-[500px] mx-auto mb-10 leading-relaxed">
            Most freelancers think they charge $80–100/hr. After tracking actual hours — meetings, revisions, email — the real rate is usually{" "}
            <strong className="text-foreground">$38–55</strong>. SideHustle shows you the truth.
          </p>

          {/* Calculation */}
          <div className="relative inline-grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4 bg-background-2 border border-border-2 rounded-2xl p-5 px-8 mb-12 max-sm:grid-cols-1 max-sm:gap-2">
            <div className="text-center">
              <div className="font-[var(--font-syne)] text-[26px] font-extrabold text-teal">$4,820</div>
              <div className="text-[11px] text-muted-2 mt-0.5">Monthly revenue</div>
            </div>
            <div className="font-[var(--font-syne)] text-[22px] font-extrabold text-muted max-sm:hidden">÷</div>
            <div className="text-center">
              <div className="font-[var(--font-syne)] text-[26px] font-extrabold text-blue-2">71h</div>
              <div className="text-[11px] text-muted-2 mt-0.5">Actual hours logged</div>
            </div>
            <div className="font-[var(--font-syne)] text-[22px] font-extrabold text-muted max-sm:hidden">=</div>
            <div className="text-center">
              <div className="font-[var(--font-syne)] text-[26px] font-extrabold text-amber">$68</div>
              <div className="text-[11px] text-muted-2 mt-0.5">Real hourly rate</div>
            </div>
          </div>

          <div className="relative">
            <Link
              href="#pricing"
              className="font-[var(--font-syne)] font-bold text-[15px] px-8 py-3.5 rounded-xl bg-gradient-to-br from-blue to-[#1d4ed8] text-white shadow-[0_0_40px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all hover:translate-y-[-2px] hover:shadow-[0_0_60px_rgba(59,130,246,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] inline-flex items-center gap-2"
            >
              Find out your real rate →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
