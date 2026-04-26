"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: { monthly: 0, annual: 0 },
    period: "forever",
    desc: "Get started, no card needed. Perfect for testing the waters.",
    features: [
      { text: "3 active projects", included: true },
      { text: "5 invoices / month", included: true },
      { text: "Basic income tracking", included: true },
      { text: "Client CRM (3 clients)", included: true },
      { text: "Invoice automation", included: false },
      { text: "AI proposal writer", included: false },
      { text: "Tax reports", included: false },
    ],
    cta: "Get started free",
    ctaStyle: "ghost",
  },
  {
    name: "Pro",
    price: { monthly: 7, annual: 55 },
    period: { monthly: "per month", annual: "per year (save 35%)" },
    desc: "Everything you need to run a serious freelance business.",
    features: [
      { text: "Unlimited projects", included: true },
      { text: "Unlimited invoices", included: true },
      { text: "Real hourly rate tracker", included: true },
      { text: "Invoice automation & reminders", included: true },
      { text: "AI proposal writer (Claude)", included: true },
      { text: "Tax-ready reports", included: true },
      { text: "Client CRM (unlimited)", included: true },
    ],
    cta: "Start 14-day free trial",
    ctaStyle: "primary",
    featured: true,
    badge: "Most popular",
  },
  {
    name: "Lifetime",
    price: { monthly: 39, annual: 39 },
    period: "one-time · yours forever",
    desc: "Pay once. All future Pro features included. For early believers.",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "All future features", included: true },
      { text: "Priority support", included: true },
      { text: "Founding member badge", included: true },
      { text: "Input on roadmap", included: true },
      { text: "Only 50 spots left", included: true, highlight: true },
    ],
    cta: "Grab lifetime access — $39",
    ctaStyle: "lifetime",
  },
]

export function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly")

  return (
    <section id="pricing" className="py-[120px] relative z-10">
      <div className="max-w-[1140px] mx-auto px-8">
        <div className="text-center max-w-[560px] mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.1em] uppercase text-muted-2 mb-4">
            <span className="w-7 h-px bg-border-3" />
            Pricing
          </div>
          <h2 className="font-[var(--font-syne)] text-[clamp(30px,4.5vw,52px)] font-extrabold tracking-[-0.04em] leading-[1.1] mb-4">
            One month pays for itself.
            <br />
            The rest is profit.
          </h2>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-2.5 mt-5 flex-wrap">
            <div className="inline-flex bg-background-2 border border-border-1 rounded-full p-1 gap-0.5">
              <button
                onClick={() => setBilling("monthly")}
                className={`font-[var(--font-syne)] text-xs font-bold px-5 py-1.5 rounded-full border-none transition-all ${
                  billing === "monthly"
                    ? "bg-blue text-white shadow-[0_0_16px_rgba(59,130,246,0.4)]"
                    : "bg-transparent text-muted-2"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("annual")}
                className={`font-[var(--font-syne)] text-xs font-bold px-5 py-1.5 rounded-full border-none transition-all ${
                  billing === "annual"
                    ? "bg-blue text-white shadow-[0_0_16px_rgba(59,130,246,0.4)]"
                    : "bg-transparent text-muted-2"
                }`}
              >
                Annual
              </button>
            </div>
            <span className="text-[11px] text-teal bg-teal/10 border border-teal/20 px-3 py-1 rounded-full">
              Save 35% annually
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 items-start max-w-[900px] mx-auto max-lg:grid-cols-1">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal ${i === 1 ? "reveal-delay-2" : i === 2 ? "reveal-delay-3" : ""} ${
                plan.featured
                  ? "bg-gradient-to-br from-blue/[0.08] to-purple/[0.06] border-blue/30 shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_24px_60px_rgba(59,130,246,0.12)]"
                  : "bg-surface-1 border-border-1"
              } border rounded-[22px] p-8 relative overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-[0_28px_64px_rgba(0,0,0,0.5)]`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 font-[var(--font-syne)] text-[10px] font-extrabold px-4 py-1.5 rounded-b-[10px] bg-gradient-to-br from-blue to-purple text-white tracking-[0.06em] uppercase">
                  {plan.badge}
                </div>
              )}

              <div className="text-[11px] font-bold text-muted-2 uppercase tracking-[0.1em] mb-3">
                {plan.name}
              </div>
              <div
                className={`font-[var(--font-syne)] text-5xl font-extrabold tracking-[-0.04em] leading-none mb-1 ${
                  plan.name === "Lifetime" ? "text-amber" : ""
                }`}
              >
                <sup className="text-[22px] align-top mt-2">$</sup>
                {billing === "annual" && plan.name === "Pro"
                  ? plan.price.annual
                  : plan.price.monthly}
              </div>
              <div className="text-[13px] text-muted-2 mb-6">
                {typeof plan.period === "object" ? plan.period[billing] : plan.period}
              </div>
              <p className="text-[13px] text-foreground-muted leading-[1.6] mb-6">{plan.desc}</p>

              <div className="h-px bg-border-1 my-5" />

              <div className="flex flex-col gap-2.5 mb-7">
                {plan.features.map((feature) => (
                  <div
                    key={feature.text}
                    className={`flex items-start gap-2.5 text-[13px] ${
                      feature.included ? "text-foreground-muted" : "text-muted-2"
                    } ${feature.highlight ? "text-amber" : ""}`}
                  >
                    {feature.included ? (
                      <Check
                        className={`w-3 h-3 mt-0.5 flex-shrink-0 ${
                          feature.highlight ? "text-amber" : "text-teal"
                        }`}
                      />
                    ) : (
                      <X className="w-3 h-3 mt-0.5 flex-shrink-0 text-muted" />
                    )}
                    {feature.highlight ? <strong>{feature.text}</strong> : feature.text}
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3.5 rounded-xl border-none font-[var(--font-syne)] font-bold text-sm transition-all ${
                  plan.ctaStyle === "primary"
                    ? "bg-gradient-to-br from-blue to-[#1d4ed8] text-white shadow-[0_0_24px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:translate-y-[-1px]"
                    : plan.ctaStyle === "lifetime"
                    ? "bg-gradient-to-br from-amber/15 to-orange/10 text-amber border border-amber/25 hover:from-amber/25 hover:to-orange/15"
                    : "bg-border-1 text-foreground-muted border border-border-2 hover:bg-border-2"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-7 text-[13px] text-muted-2">
          All plans include a{" "}
          <strong className="text-foreground-muted">30-day money-back guarantee</strong>. No questions asked.
        </div>
      </div>
    </section>
  )
}
