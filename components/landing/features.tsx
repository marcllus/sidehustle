"use client"

const features = [
  {
    icon: "📁",
    iconBg: "rgba(59,130,246,0.08)",
    iconBorder: "rgba(59,130,246,0.2)",
    title: "Project Command Center",
    desc: "Track every project from kickoff to payment. Deadlines, deliverables, and client notes — all in one view.",
    tag: "All plans",
    tagBg: "rgba(59,130,246,0.08)",
    tagColor: "var(--blue-3)",
  },
  {
    icon: "📊",
    iconBg: "rgba(6,214,160,0.08)",
    iconBorder: "rgba(6,214,160,0.2)",
    title: "Real Hourly Rate Tracker",
    desc: "Your real rate, updated live. Not what your invoice says — what you're actually earning after every hour logged.",
    tag: "⭐ Most loved",
    tagBg: "rgba(6,214,160,0.08)",
    tagColor: "var(--teal-2)",
  },
  {
    icon: "🧾",
    iconBg: "rgba(245,158,11,0.08)",
    iconBorder: "rgba(245,158,11,0.2)",
    title: "Invoice Automation",
    desc: "Create and send invoices in under 2 minutes. Auto-reminders handle the follow-up so you never have to.",
    tag: "Pro plan",
    tagBg: "rgba(245,158,11,0.08)",
    tagColor: "var(--amber)",
  },
  {
    icon: "👥",
    iconBg: "rgba(139,92,246,0.08)",
    iconBorder: "rgba(139,92,246,0.2)",
    title: "Client CRM",
    desc: "Every contact, contract, and conversation with every client — searchable and linked to their projects.",
    tag: "All plans",
    tagBg: "rgba(59,130,246,0.08)",
    tagColor: "var(--blue-3)",
  },
  {
    icon: "💰",
    iconBg: "rgba(236,72,153,0.08)",
    iconBorder: "rgba(236,72,153,0.2)",
    title: "Income & Expense Tracking",
    desc: "Know your monthly net, yearly trajectory, and tax set-aside — all calculated automatically as you work.",
    tag: "⭐ Most loved",
    tagBg: "rgba(6,214,160,0.08)",
    tagColor: "var(--teal-2)",
  },
  {
    icon: "🤖",
    iconBg: "rgba(249,115,22,0.08)",
    iconBorder: "rgba(249,115,22,0.2)",
    title: "AI Proposal Writer",
    desc: "Enter a brief and Claude AI drafts a complete project proposal in your voice. Edit and send in minutes.",
    tag: "Pro plan",
    tagBg: "rgba(245,158,11,0.08)",
    tagColor: "var(--amber)",
  },
]

export function Features() {
  return (
    <section className="py-[120px] bg-gradient-to-b from-transparent via-blue/[0.02] to-transparent relative z-10">
      <div className="max-w-[1140px] mx-auto px-8">
        <div className="text-center max-w-[620px] mx-auto mb-[72px] reveal">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.1em] uppercase text-muted-2 mb-4">
            <span className="w-7 h-px bg-border-3" />
            {"What's inside"}
          </div>
          <h2 className="font-[var(--font-syne)] text-[clamp(30px,4.5vw,52px)] font-extrabold tracking-[-0.04em] leading-[1.1]">
            Everything a freelance business actually needs
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-px bg-border-1 border border-border-1 rounded-[20px] overflow-hidden reveal max-lg:grid-cols-2 max-sm:grid-cols-1">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-background p-[36px_32px] relative overflow-hidden transition-colors hover:bg-background-2 group"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-[radial-gradient(ellipse_at_0%_0%,rgba(59,130,246,0.06),transparent_70%)]" />

              <div
                className="relative w-12 h-12 rounded-[14px] flex items-center justify-center text-[22px] mb-[18px] border"
                style={{
                  background: feature.iconBg,
                  borderColor: feature.iconBorder,
                }}
              >
                {feature.icon}
              </div>
              <div className="relative font-[var(--font-syne)] text-base font-bold mb-2.5 tracking-[-0.01em]">
                {feature.title}
              </div>
              <div className="relative text-[13px] text-foreground-muted leading-relaxed">{feature.desc}</div>
              <div
                className="relative inline-flex text-[10px] font-bold px-2.5 py-0.5 rounded-full mt-3.5"
                style={{
                  background: feature.tagBg,
                  color: feature.tagColor,
                }}
              >
                {feature.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
