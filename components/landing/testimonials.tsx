"use client"

const testimonials = [
  {
    text: 'I discovered I was charging $68/hr but earning <strong>$41/hr after scope creep</strong>. Within a week I\'d raised my rates and added a revision clause to my contract. <strong>Made back 10× the cost in month one.</strong>',
    name: "Sarah K.",
    role: "UX / Product Designer · Freelance",
    platform: "Dribbble",
    initials: "SK",
    gradient: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
    delay: "",
  },
  {
    text: 'I used to spend <strong>2–3 hours every Friday</strong> chasing payments. SideHustle automated all of it. I haven\'t manually sent a payment reminder in 4 months. <strong>That\'s 40+ hours back.</strong>',
    name: "Marcus T.",
    role: "Frontend Dev · Toptal",
    platform: "Toptal",
    initials: "MT",
    gradient: "linear-gradient(135deg,#06d6a0,#3b82f6)",
    delay: "reveal-delay-2",
  },
  {
    text: 'The income tracker is insane. I can see my <strong>projected income for the year</strong> based on current projects, and it tells me <strong>how much to set aside for tax</strong> every month. No more April panic.',
    name: "Priya M.",
    role: "Content Strategist · Freelance",
    platform: "Contra",
    initials: "PM",
    gradient: "linear-gradient(135deg,#ec4899,#f59e0b)",
    delay: "reveal-delay-3",
  },
  {
    text: "I've tried Harvest, Toggl, FreshBooks. They all do one thing. <strong>SideHustle is the first tool that connects the dots</strong> — hours → real rate → invoice → income. That's the whole picture.",
    name: "James L.",
    role: "Brand Consultant · NYC",
    platform: "LinkedIn",
    initials: "JL",
    gradient: "linear-gradient(135deg,#f59e0b,#ef4444)",
    delay: "reveal-delay-1",
  },
  {
    text: "The AI proposal writer alone is worth the $7/month. I used to spend 3 hours on proposals. Now it's <strong>30 minutes start to send</strong>. Clients actually comment on how professional my proposals look.",
    name: "Aisha R.",
    role: "Motion Designer · Remote",
    platform: "Upwork",
    initials: "AR",
    gradient: "linear-gradient(135deg,#8b5cf6,#06d6a0)",
    delay: "reveal-delay-2",
  },
  {
    text: "I'm making <strong>$8,200/month</strong> freelancing and SideHustle is the only tool I pay for that I'd keep even if they tripled the price. It's not an expense — it's what lets me run this like a real business.",
    name: "Daniel O.",
    role: "Full-stack Dev · $8k/mo",
    platform: "Fiverr Pro",
    initials: "DO",
    gradient: "linear-gradient(135deg,#3b82f6,#06d6a0)",
    delay: "reveal-delay-3",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-[120px] relative z-10">
      <div className="max-w-[1140px] mx-auto px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.1em] uppercase text-muted-2 mb-4">
            <span className="w-7 h-px bg-border-3" />
            Real people, real results
          </div>
          <h2 className="font-[var(--font-syne)] text-[clamp(30px,4.5vw,52px)] font-extrabold tracking-[-0.04em] leading-[1.1]">
            Freelancers who stopped guessing
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`reveal ${t.delay} bg-surface-1 border border-border-1 rounded-[20px] p-7 relative overflow-hidden transition-all hover:border-border-2 hover:translate-y-[-4px] hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)]`}
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-5 text-[52px] text-border-1 font-serif leading-none select-none">
                ❝
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3.5 text-amber text-sm">★★★★★</div>

              {/* Text */}
              <p
                className="text-sm text-foreground-muted leading-[1.7] mb-5 italic"
                dangerouslySetInnerHTML={{ __html: t.text }}
              />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-[var(--font-syne)] text-[15px] font-extrabold text-white"
                  style={{ background: t.gradient }}
                >
                  {t.initials}
                </div>
                <div className="flex-1">
                  <div className="text-[13px] font-bold">{t.name}</div>
                  <div className="text-[11px] text-muted-2 mt-0.5">{t.role}</div>
                </div>
                <div className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-background-2 text-muted-2">
                  {t.platform}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
