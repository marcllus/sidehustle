"use client"

const problems = [
  {
    icon: "📊",
    title: "No idea what you're really earning",
    desc: "Your rate says $80/hr but after scope creep, revisions, and admin time, you're actually at $42. And you have no idea.",
  },
  {
    icon: "💸",
    title: "Chasing invoices manually",
    desc: "Sending reminders one-by-one. Forgetting who owes what. Feeling awkward asking for money you're owed.",
  },
  {
    icon: "🗂️",
    title: "Projects scattered everywhere",
    desc: "Deadlines in your head, notes in Notion, files in Drive, emails in Gmail. Nothing in one place.",
  },
  {
    icon: "😰",
    title: "Tax season panic",
    desc: "Scrambling to find income records at the end of the year. Hours of reconciling bank statements you didn't need to touch.",
  },
]

const solutions = [
  {
    num: "1",
    title: "Real-time hourly rate tracker",
    desc: "Log hours and SideHustle shows your actual rate — after every revision, meeting, and admin email.",
  },
  {
    num: "2",
    title: "Auto invoice reminders",
    desc: "Set it once. SideHustle sends reminders at 7 days, 3 days, and 1 day before due. You never chase again.",
  },
  {
    num: "3",
    title: "One dashboard for everything",
    desc: "Every project, deadline, client, and invoice — one place, one login. Zero scattered spreadsheets.",
  },
  {
    num: "4",
    title: "Tax-ready reports in seconds",
    desc: "Export a clean income report any time. Your accountant will thank you. Or just do it yourself in 20 minutes.",
  },
]

export function ProblemSolution() {
  return (
    <section id="features" className="py-[120px] relative z-10">
      <div className="max-w-[1140px] mx-auto px-8">
        <div className="reveal">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.1em] uppercase text-muted-2 mb-4">
            <span className="w-7 h-px bg-border-3" />
            The problem
          </div>
          <h2 className="font-[var(--font-syne)] text-[clamp(30px,4.5vw,52px)] font-extrabold tracking-[-0.04em] leading-[1.1] mb-4">
            Most freelancers are
            <br />
            <span className="gradient-warm">flying blind</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-[60px] items-start mt-[60px] max-lg:grid-cols-1">
          {/* Problems */}
          <div className="flex flex-col gap-3 reveal">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="flex items-start gap-3.5 p-[18px_20px] rounded-[14px] bg-red/5 border border-red/10 transition-all hover:border-red/20 hover:bg-red/8"
              >
                <div className="text-xl flex-shrink-0 mt-0.5">{problem.icon}</div>
                <div>
                  <div className="text-sm font-bold mb-0.5">{problem.title}</div>
                  <div className="text-[13px] text-foreground-muted leading-[1.5]">{problem.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-3 reveal reveal-delay-2">
            <div className="mb-2 text-[11px] font-bold text-teal uppercase tracking-[0.1em]">
              SideHustle fixes this
            </div>
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="flex items-start gap-3.5 p-[18px_20px] rounded-[14px] bg-teal/5 border border-teal/10 transition-all hover:border-teal/25 hover:bg-teal/8"
              >
                <div className="w-7 h-7 rounded-lg flex-shrink-0 bg-teal/10 text-teal font-[var(--font-syne)] font-extrabold text-xs flex items-center justify-center mt-0.5">
                  {solution.num}
                </div>
                <div>
                  <div className="text-sm font-bold mb-0.5">{solution.title}</div>
                  <div className="text-[13px] text-foreground-muted leading-[1.5]">{solution.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
