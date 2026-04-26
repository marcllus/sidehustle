"use client"

import { Plus, Play, Edit } from "lucide-react"

const workflowNodes = [
  {
    icon: "📅",
    label: "Schedule",
    sublabel: "Daily 9:00 AM",
    gradient: "linear-gradient(135deg,#1e3a5f,#1e40af)",
    status: "ok",
    active: true,
  },
  {
    icon: "🔍",
    label: "Filter Invoices",
    sublabel: "Due > 7 days",
    gradient: "linear-gradient(135deg,#1a1a2e,#6c47ff)",
    status: "ok",
  },
  {
    icon: "📧",
    label: "Send Email",
    sublabel: "Reminder template",
    gradient: "linear-gradient(135deg,#0f2027,#203a43)",
    status: "ok",
  },
  {
    icon: "💬",
    label: "Slack Alert",
    sublabel: "#invoices",
    gradient: "linear-gradient(135deg,#1a1a1a,#4a154b)",
    status: "ok",
  },
  {
    icon: "📝",
    label: "Log Activity",
    sublabel: "SideHustle",
    gradient: "linear-gradient(135deg,#052e16,#14532d)",
    status: "ok",
  },
]

export default function WorkflowsPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="flex items-start justify-between mb-7 flex-wrap gap-4">
        <div>
          <h1 className="font-[var(--font-syne)] text-[26px] font-extrabold tracking-[-0.02em] leading-tight">
            ⚡ AI Workflows
          </h1>
          <p className="text-sm text-muted mt-1">Automate your hustle with Make-powered automation</p>
        </div>
        <div className="flex gap-2.5 items-center flex-shrink-0">
          <button className="inline-flex items-center gap-1.5 font-[var(--font-syne)] font-semibold text-[13px] px-[18px] py-2.5 rounded-[9px] bg-surface-1 text-foreground border border-border-2 transition-all hover:bg-surface-2">
            Docs
          </button>
          <button className="inline-flex items-center gap-1.5 font-[var(--font-syne)] font-semibold text-[13px] px-[18px] py-2.5 rounded-[9px] bg-blue text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:translate-y-[-1px] hover:shadow-[0_0_32px_rgba(59,130,246,0.4)]">
            <Plus className="w-3.5 h-3.5" /> New Workflow
          </button>
        </div>
      </div>

      {/* Workflow 1: Invoice Reminder */}
      <div className="mb-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="font-[var(--font-syne)] font-bold text-base">Invoice Auto-Reminder</div>
          <div className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-teal/10 text-teal">
            ● Live
          </div>
          <div className="ml-auto flex gap-2">
            <button className="inline-flex items-center gap-1.5 font-[var(--font-syne)] font-semibold text-xs px-3 py-1.5 rounded-[7px] bg-surface-1 text-foreground border border-border-2 transition-all hover:bg-surface-2">
              <Play className="w-3 h-3" /> Run Now
            </button>
            <button className="inline-flex items-center gap-1.5 font-[var(--font-syne)] font-semibold text-xs px-3 py-1.5 rounded-[7px] bg-surface-1 text-foreground border border-border-2 transition-all hover:bg-surface-2">
              <Edit className="w-3 h-3" /> Edit
            </button>
          </div>
        </div>

        <div className="bg-surface-1 border border-border-1 rounded-[20px] overflow-hidden">
          {/* Toolbar */}
          <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-border-1 bg-[#080a0f]/60 backdrop-blur-lg flex-wrap">
            {["📅 Schedule: Daily 9AM", "🔍 Filter: Overdue > 7d", "📧 Email template", "💬 Slack alert"].map(
              (chip) => (
                <div
                  key={chip}
                  className="flex items-center gap-1.5 bg-surface-1 border border-border-2 rounded-lg px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all hover:bg-surface-2 hover:border-blue hover:text-blue"
                >
                  {chip}
                </div>
              )
            )}
            <div className="ml-auto text-xs text-muted">Last run: Today 9:00 AM · 2 emails sent</div>
          </div>

          {/* Nodes */}
          <div className="px-10 py-10 flex items-center gap-0 overflow-x-auto min-h-[300px] bg-background-2 bg-[radial-gradient(var(--border-1)_1px,transparent_1px)] bg-[length:24px_24px]">
            {workflowNodes.map((node, i) => (
              <div key={i} className="flex items-center">
                <div className="flex flex-col items-center w-[120px] flex-shrink-0 cursor-pointer transition-transform hover:translate-y-[-3px]">
                  <div
                    className="relative w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-[26px] border-2 border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                    style={{ background: node.gradient }}
                  >
                    {node.active && (
                      <div className="absolute -inset-1 rounded-[20px] border-2 border-blue opacity-50 animate-node-ring" />
                    )}
                    <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-background-2 bg-teal text-[8px] flex items-center justify-center" />
                    {node.icon}
                  </div>
                  <div className="text-[11px] font-semibold text-muted-2 mt-2 text-center leading-tight">
                    {node.label}
                  </div>
                  <div className="text-[10px] text-muted text-center mt-0.5">{node.sublabel}</div>
                </div>

                {i < workflowNodes.length - 1 && (
                  <div className="flex items-center flex-shrink-0 text-muted text-lg px-2 relative">
                    <div className="w-10 h-0.5 bg-gradient-to-r from-border-2 to-blue" />
                    {i === 0 && (
                      <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 text-[9px] font-bold text-muted bg-background-2 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                        triggers
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Add button */}
            <div className="w-[50px] h-[50px] rounded-full flex-shrink-0 bg-surface-1 border-2 border-dashed border-border-2 flex items-center justify-center text-[22px] text-muted cursor-pointer transition-all ml-2 hover:border-blue hover:text-blue hover:bg-blue/5">
              +
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-6 px-5 py-3.5 border-t border-border-1 bg-[#080a0f]/40 flex-wrap">
            {[
              { label: "Status", value: "Active", color: "bg-teal" },
              { label: "Runs this month", value: "30", color: "bg-blue" },
              { label: "Emails sent", value: "12", color: "bg-amber" },
              { label: "Success rate", value: "100%", color: "bg-[#c4b5fd]" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2 text-xs text-muted-2">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${stat.color}`} />
                {stat.label}: <span className="font-bold text-foreground">{stat.value}</span>
              </div>
            ))}
            <a
              href="https://www.make.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-[11px] font-semibold text-muted-2 px-3 py-1 rounded-[7px] bg-surface-1 border border-border-2 transition-all hover:bg-surface-2"
            >
              Powered by Make.com ↗
            </a>
          </div>
        </div>
      </div>

      {/* Workflow 2: New Client Onboarding (Paused) */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="font-[var(--font-syne)] font-bold text-base">New Client Onboarding</div>
          <div className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber/10 text-amber">
            ◐ Paused
          </div>
          <div className="ml-auto flex gap-2">
            <button className="inline-flex items-center gap-1.5 font-[var(--font-syne)] font-semibold text-xs px-3 py-1.5 rounded-[7px] bg-teal/15 text-teal border border-teal/30 transition-all hover:bg-teal/25">
              Resume
            </button>
            <button className="inline-flex items-center gap-1.5 font-[var(--font-syne)] font-semibold text-xs px-3 py-1.5 rounded-[7px] bg-surface-1 text-foreground border border-border-2 transition-all hover:bg-surface-2">
              <Edit className="w-3 h-3" /> Edit
            </button>
          </div>
        </div>

        <div className="bg-surface-1 border border-border-1 rounded-[20px] p-6 opacity-60">
          <p className="text-sm text-muted">
            Automatically send welcome emails, create project folders, and set up client portals when a new client is added.
          </p>
        </div>
      </div>
    </div>
  )
}
