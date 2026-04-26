"use client"

import Link from "next/link"
import { Check } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-8 py-[120px] relative z-10">
      {/* Eyebrow */}
      <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full bg-teal/10 text-teal border border-teal/20 mb-7 animate-fade-up-delay-1">
        <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse-dot" />
        Built for freelancers · 12,000+ side hustlers
      </div>

      {/* Title */}
      <h1 className="font-[var(--font-syne)] text-[clamp(44px,7.5vw,96px)] font-extrabold leading-[1.0] tracking-[-0.05em] mb-7 animate-fade-up-delay-2">
        Stop guessing.
        <br />
        Know your{" "}
        <em className="not-italic relative inline-block">
          <span className="gradient-blue">real money</span>
          <span className="absolute bottom-[-4px] left-0 right-0 h-[3px] bg-gradient-to-r from-blue to-teal rounded-sm line-grow" />
        </em>
        .
      </h1>

      {/* Subtitle */}
      <p className="text-[clamp(16px,2.2vw,22px)] text-foreground-muted max-w-[600px] leading-relaxed mx-auto mb-11 animate-fade-up-delay-3">
        Track projects, send invoices, and finally see what you&apos;re actually earning per hour — after scope creep, revisions, and late nights.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-3.5 flex-wrap justify-center mb-5 animate-fade-up-delay-4">
        <Link
          href="#pricing"
          className="font-[var(--font-syne)] font-bold text-[15px] px-8 py-3.5 rounded-xl bg-gradient-to-br from-blue to-[#1d4ed8] text-white shadow-[0_0_40px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all hover:translate-y-[-2px] hover:shadow-[0_0_60px_rgba(59,130,246,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] inline-flex items-center gap-2"
        >
          Start free trial — no card needed →
        </Link>
        <Link
          href="#features"
          className="font-[var(--font-syne)] font-bold text-[15px] px-8 py-3.5 rounded-xl bg-border-1 text-foreground-muted border border-border-2 backdrop-blur-lg transition-all hover:bg-border-2 hover:text-foreground inline-flex items-center gap-2"
        >
          ▶ See how it works
        </Link>
      </div>

      {/* Trust badges */}
      <div className="flex gap-5 flex-wrap justify-center text-xs text-muted-2 animate-fade-up-delay-5 mb-[72px]">
        {["Free 14-day trial", "No credit card", "Cancel anytime", "Setup in 5 min"].map((item) => (
          <span key={item} className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-teal" />
            {item}
          </span>
        ))}
      </div>

      {/* Dashboard Mockup */}
      <div className="max-w-[860px] w-full mx-auto relative animate-fade-up-delay-6">
        {/* Glow */}
        <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_50%_50%,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none" />
        
        {/* Frame */}
        <div className="bg-surface-1 border border-border-2 rounded-[18px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.7),0_0_0_1px_var(--border-1),inset_0_1px_0_rgba(255,255,255,0.06)]">
          {/* Browser bar */}
          <div className="bg-background-2 border-b border-border-1 px-5 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
              <div className="w-[11px] h-[11px] rounded-full bg-[#ffbd2e]" />
              <div className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 max-w-[260px] mx-auto bg-background-3 border border-border-1 rounded-[7px] px-3.5 py-1.5 font-mono text-[11px] text-muted-2 flex items-center gap-1.5">
              🔒 app.getsidehustle.com
            </div>
          </div>

          {/* Dashboard body */}
          <div className="p-5 grid grid-cols-[180px_1fr] gap-3 min-h-[340px] max-md:grid-cols-1">
            {/* Sidebar */}
            <div className="bg-background-2 border border-border-1 rounded-xl p-3.5 flex flex-col gap-2 max-md:hidden">
              <div className="font-[var(--font-syne)] text-[13px] font-extrabold px-2.5 py-2 gradient-blue">
                ⚡ SideHustle
              </div>
              {[
                { label: "Dashboard", active: true },
                { label: "Projects", active: false },
                { label: "Invoices", active: false },
                { label: "Income", active: false },
                { label: "Clients", active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`px-2.5 py-2 rounded-[7px] text-[11px] font-medium flex items-center gap-1.5 ${
                    item.active ? "bg-blue/10 text-blue-2" : "text-muted-2"
                  }`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${item.active ? "bg-blue" : "bg-muted"}`}
                  />
                  {item.label}
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="flex flex-col gap-2.5">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2 max-sm:grid-cols-2">
                <div className="bg-background-2 border border-border-1 rounded-[10px] p-3">
                  <div className="font-[var(--font-syne)] text-xl font-extrabold tracking-[-0.03em] text-teal">
                    $4,820
                  </div>
                  <div className="text-[10px] text-muted-2 mt-0.5">This month</div>
                </div>
                <div className="bg-background-2 border border-border-1 rounded-[10px] p-3">
                  <div className="font-[var(--font-syne)] text-xl font-extrabold tracking-[-0.03em] text-blue-2">
                    4
                  </div>
                  <div className="text-[10px] text-muted-2 mt-0.5">Active projects</div>
                </div>
                <div className="bg-background-2 border border-border-1 rounded-[10px] p-3">
                  <div className="font-[var(--font-syne)] text-xl font-extrabold tracking-[-0.03em] text-amber">
                    $68<span className="text-sm opacity-60">/hr</span>
                  </div>
                  <div className="text-[10px] text-muted-2 mt-0.5">Real hourly rate</div>
                </div>
              </div>

              {/* Chart */}
              <div className="bg-background-2 border border-border-1 rounded-[10px] p-3.5 flex-1">
                <div className="text-[10px] font-bold text-muted-2 uppercase tracking-[0.07em] mb-2.5">
                  Income — last 6 months
                </div>
                <div className="flex items-end gap-[5px] h-[60px]">
                  {[55, 70, 48, 85, 72, 96].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-[3px]"
                      style={{
                        height: `${height}%`,
                        background:
                          i === 5
                            ? "linear-gradient(to top, var(--blue), var(--teal))"
                            : `rgba(59, 130, 246, ${0.3 + i * 0.05})`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Invoices */}
              <div className="bg-background-2 border border-border-1 rounded-[10px] p-3">
                <div className="text-[10px] font-bold text-muted-2 uppercase tracking-[0.07em] mb-2">
                  Recent Invoices
                </div>
                {[
                  { name: "Designify — Brand Refresh", amount: "$1,100", status: "paid" },
                  { name: "Acme Corp — Content Q2", amount: "$850", status: "overdue" },
                  { name: "NovaBrand — Website", amount: "$2,600", status: "pending" },
                ].map((invoice) => (
                  <div
                    key={invoice.name}
                    className="flex items-center gap-2 py-1.5 border-b border-border-0 last:border-b-0"
                  >
                    <div className="text-[11px] font-semibold flex-1 truncate">{invoice.name}</div>
                    <div className="font-mono text-[11px] text-foreground-muted">{invoice.amount}</div>
                    <div
                      className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                        invoice.status === "paid"
                          ? "bg-teal/10 text-teal-2"
                          : invoice.status === "overdue"
                          ? "bg-red/10 text-red"
                          : "bg-amber/10 text-amber"
                      }`}
                    >
                      {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
