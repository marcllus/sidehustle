"use client"

import { Plus, Filter } from "lucide-react"
import { StatCard } from "@/components/app/stat-card"

const invoices = [
  {
    id: "#049",
    client: "Designify",
    project: "Brand Refresh · Final milestone",
    amount: "$1,100",
    due: "Due Mar 15 · Sent Mar 1",
    status: "pending",
    icon: "⏳",
    iconBg: "rgba(245,158,11,0.12)",
  },
  {
    id: "#048",
    client: "Acme Corp",
    project: "Q1 Content Pack · Full payment",
    amount: "$850",
    due: "Due Feb 25 · 14 days late!",
    status: "overdue",
    icon: "⚠️",
    iconBg: "rgba(248,113,113,0.12)",
  },
  {
    id: "#047",
    client: "ScaleUp",
    project: "Mobile App UI · Deposit 50%",
    amount: "$1,550",
    due: "Paid Mar 5",
    status: "paid",
    icon: "✅",
    iconBg: "rgba(6,214,160,0.12)",
  },
  {
    id: "#046",
    client: "NovaBrand",
    project: "Website Redesign · Deposit",
    amount: "$2,600",
    due: "Paid Mar 2",
    status: "paid",
    icon: "✅",
    iconBg: "rgba(6,214,160,0.12)",
  },
]

const statusStyles = {
  pending: { label: "Pending", className: "bg-amber/10 text-amber" },
  overdue: { label: "Overdue", className: "bg-red/10 text-red" },
  paid: { label: "Paid", className: "bg-teal/10 text-teal" },
}

export default function InvoicesPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="flex items-start justify-between mb-7 flex-wrap gap-4">
        <div>
          <h1 className="font-[var(--font-syne)] text-[26px] font-extrabold tracking-[-0.02em] leading-tight">
            🧾 Invoices
          </h1>
          <p className="text-sm text-muted mt-1">$1,950 outstanding · $4,820 collected this month</p>
        </div>
        <div className="flex gap-2.5 items-center flex-shrink-0">
          <button className="inline-flex items-center gap-1.5 font-[var(--font-syne)] font-semibold text-[13px] px-[18px] py-2.5 rounded-[9px] bg-surface-1 text-foreground border border-border-2 transition-all hover:bg-surface-2">
            <Filter className="w-3.5 h-3.5" /> Filter
          </button>
          <button className="inline-flex items-center gap-1.5 font-[var(--font-syne)] font-semibold text-[13px] px-[18px] py-2.5 rounded-[9px] bg-blue text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:translate-y-[-1px] hover:shadow-[0_0_32px_rgba(59,130,246,0.4)]">
            <Plus className="w-3.5 h-3.5" /> New Invoice
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-5 max-lg:grid-cols-1">
        <StatCard
          label="Outstanding"
          value="$1,950"
          change="2 invoices pending"
          changeDirection="neutral"
          glowColor="rgba(245,158,11,0.2)"
        />
        <StatCard
          label="Collected — March"
          value="$4,820"
          change="18% vs Feb"
          changeDirection="up"
          glowColor="rgba(6,214,160,0.2)"
        />
        <StatCard
          label="Avg. Payment Time"
          value="9 days"
          change="3 days faster"
          changeDirection="up"
          glowColor="rgba(59,130,246,0.2)"
        />
      </div>

      {/* Invoice List */}
      <div className="flex flex-col gap-3">
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="flex items-center gap-4 bg-surface-1 border border-border-1 rounded-xl px-5 py-4 cursor-pointer transition-all hover:border-border-2 hover:bg-surface-2"
          >
            <div
              className="w-10 h-10 rounded-[10px] flex items-center justify-center text-lg flex-shrink-0"
              style={{ background: invoice.iconBg }}
            >
              {invoice.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-[var(--font-syne)] text-[13px] font-bold">
                {invoice.id} — {invoice.client}
              </div>
              <div className="text-xs text-muted">{invoice.project}</div>
            </div>
            <div className="text-right ml-auto">
              <div
                className={`font-[var(--font-syne)] font-extrabold text-[17px] ${
                  invoice.status === "overdue"
                    ? "text-red"
                    : invoice.status === "pending"
                    ? "text-amber"
                    : "text-foreground"
                }`}
              >
                {invoice.amount}
              </div>
              <div
                className={`text-[11px] ${
                  invoice.status === "overdue" ? "text-red" : "text-muted"
                }`}
              >
                {invoice.due}
              </div>
            </div>
            <div
              className={`text-[11px] font-bold px-2.5 py-1 rounded-full ml-4 ${
                statusStyles[invoice.status as keyof typeof statusStyles].className
              }`}
            >
              {statusStyles[invoice.status as keyof typeof statusStyles].label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
