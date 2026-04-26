"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Is there really a free plan?",
    a: "Yes — genuinely free, no credit card, no time limit. You get 3 projects, 5 invoices/month, and basic income tracking. When you need more, Pro is $7/month.",
  },
  {
    q: "How is this different from Harvest or Toggl?",
    a: "Harvest and Toggl track time. SideHustle connects your time to your invoices, income, and real hourly rate. It shows you the full picture — what you billed, what you collected, and what you actually earned per hour.",
  },
  {
    q: "What's the AI proposal writer?",
    a: "It's Claude AI built directly into SideHustle. Paste in a project brief and it writes a full proposal — scope, timeline, pricing options — in your voice. You edit and send. Most users go from brief to sent proposal in under 30 minutes.",
  },
  {
    q: "Does it handle international invoices?",
    a: "Yes. Multi-currency invoicing is built in. Set your preferred currency, and SideHustle handles conversion and formatting automatically.",
  },
  {
    q: "Can I import existing clients and projects?",
    a: "Absolutely. CSV import is available for clients, projects, and past invoices. Most users are fully migrated in under 15 minutes.",
  },
  {
    q: "What if I need help?",
    a: "Email support responds within 24 hours (usually much faster). Pro and Lifetime users get priority support. We also have a comprehensive help center and video tutorials.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-[100px] relative z-10">
      <div className="max-w-[1140px] mx-auto px-8">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.1em] uppercase text-muted-2 mb-4">
            <span className="w-7 h-px bg-border-3" />
            Common questions
          </div>
          <h2 className="font-[var(--font-syne)] text-[clamp(30px,4.5vw,52px)] font-extrabold tracking-[-0.04em] leading-[1.1]">
            {"Everything you're wondering"}
          </h2>
        </div>

        <div className="max-w-[680px] mx-auto flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-surface-1 border rounded-[14px] overflow-hidden transition-colors ${
                openIndex === i ? "border-blue/25" : "border-border-1 hover:border-border-2"
              }`}
            >
              <button
                className="w-full text-left p-5 bg-transparent border-none flex items-center justify-between gap-4 text-sm font-semibold text-foreground transition-colors hover:text-blue-2"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
                <ChevronDown
                  className={`w-[18px] h-[18px] flex-shrink-0 text-muted-2 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180 text-blue-2" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-[200px] pb-5" : "max-h-0"
                }`}
              >
                <div className="px-5 text-[13px] text-foreground-muted leading-[1.7]">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
