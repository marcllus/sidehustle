"use client"

import { Download, TrendingUp, TrendingDown } from "lucide-react"
import { StatCard } from "@/components/app/stat-card"

const monthlyData = [
  { month: "Oct", income: 3200, expenses: 480 },
  { month: "Nov", income: 4100, expenses: 620 },
  { month: "Dec", income: 2800, expenses: 420 },
  { month: "Jan", income: 5200, expenses: 780 },
  { month: "Feb", income: 4600, expenses: 690 },
  { month: "Mar", income: 4820, expenses: 720 },
]

const incomeBreakdown = [
  { source: "Designify", amount: "$2,400", percentage: 50, color: "bg-blue" },
  { source: "Acme Corp", amount: "$1,200", percentage: 25, color: "bg-teal" },
  { source: "ScaleUp", amount: "$820", percentage: 17, color: "bg-purple" },
  { source: "Other", amount: "$400", percentage: 8, color: "bg-amber" },
]

export default function IncomePage() {
  const totalIncome = monthlyData.reduce((sum, m) => sum + m.income, 0)
  const totalExpenses = monthlyData.reduce((sum, m) => sum + m.expenses, 0)
  const netIncome = totalIncome - totalExpenses
  const taxSetAside = Math.round(netIncome * 0.25)

  return (
    <div>
      {/* Page Header */}
      <div className="flex items-start justify-between mb-7 flex-wrap gap-4">
        <div>
          <h1 className="font-[var(--font-syne)] text-[26px] font-extrabold tracking-[-0.02em] leading-tight">
            💰 Income Tracker
          </h1>
          <p className="text-sm text-muted mt-1">Your financial overview for 2026</p>
        </div>
        <div className="flex gap-2.5 items-center flex-shrink-0">
          <button className="inline-flex items-center gap-1.5 font-[var(--font-syne)] font-semibold text-[13px] px-[18px] py-2.5 rounded-[9px] bg-surface-1 text-foreground border border-border-2 transition-all hover:bg-surface-2">
            <Download className="w-3.5 h-3.5" /> Export Report
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4 mb-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <StatCard
          label="Total Income (YTD)"
          value={`$${totalIncome.toLocaleString()}`}
          change="32% vs last year"
          changeDirection="up"
          glowColor="rgba(6,214,160,0.2)"
        />
        <StatCard
          label="Total Expenses (YTD)"
          value={`$${totalExpenses.toLocaleString()}`}
          change="12% vs last year"
          changeDirection="down"
          glowColor="rgba(248,113,113,0.2)"
        />
        <StatCard
          label="Net Income (YTD)"
          value={`$${netIncome.toLocaleString()}`}
          change="Profit margin: 85%"
          changeDirection="up"
          glowColor="rgba(59,130,246,0.2)"
        />
        <StatCard
          label="Tax Set-Aside (25%)"
          value={`$${taxSetAside.toLocaleString()}`}
          change="Auto-calculated"
          changeDirection="neutral"
          glowColor="rgba(245,158,11,0.2)"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
        {/* Income vs Expenses Chart */}
        <div className="bg-surface-1 border border-border-1 rounded-[20px] p-6">
          <div className="flex items-start justify-between mb-5">
            <div>
              <div className="font-[var(--font-syne)] font-bold text-base">Monthly Overview</div>
              <div className="text-xs text-muted mt-0.5">Income vs Expenses — Last 6 months</div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5 text-xs text-muted-2">
                <div className="w-2 h-2 rounded-full bg-teal" />
                Income
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-2">
                <div className="w-2 h-2 rounded-full bg-red" />
                Expenses
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {monthlyData.map((data) => (
              <div key={data.month} className="flex items-center gap-3">
                <div className="w-8 text-xs text-muted font-semibold">{data.month}</div>
                <div className="flex-1 flex items-center gap-1">
                  <div
                    className="h-5 rounded bg-gradient-to-r from-teal to-teal-2"
                    style={{ width: `${(data.income / 6000) * 100}%` }}
                  />
                  <div
                    className="h-5 rounded bg-red/50"
                    style={{ width: `${(data.expenses / 6000) * 100}%` }}
                  />
                </div>
                <div className="w-24 text-right text-xs">
                  <span className="text-teal font-semibold">${data.income.toLocaleString()}</span>
                  <span className="text-muted mx-1">/</span>
                  <span className="text-red">${data.expenses}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Income Breakdown */}
        <div className="bg-surface-1 border border-border-1 rounded-[20px] p-6">
          <div className="font-[var(--font-syne)] font-bold text-base mb-5">Income by Client</div>
          
          <div className="space-y-4">
            {incomeBreakdown.map((item) => (
              <div key={item.source}>
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <span className="font-medium">{item.source}</span>
                  <span className="text-muted-2">{item.amount}</span>
                </div>
                <div className="h-2 bg-background rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-border-1">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-muted">Projected Annual Income</div>
                <div className="font-[var(--font-syne)] text-2xl font-extrabold text-teal mt-0.5">
                  $52,440
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-teal text-sm font-semibold">
                <TrendingUp className="w-4 h-4" />
                +24% YoY
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tax Info */}
      <div className="mt-4 bg-amber/5 border border-amber/20 rounded-[20px] p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber/15 flex items-center justify-center text-lg flex-shrink-0">
            📋
          </div>
          <div>
            <div className="font-[var(--font-syne)] font-bold text-base">Tax Season Ready</div>
            <p className="text-sm text-muted-2 mt-1 leading-relaxed">
              Based on your current income, you should set aside approximately <strong className="text-amber">${taxSetAside.toLocaleString()}</strong> for taxes. 
              Export your tax-ready report at any time — includes all income, expenses, and deductions categorized for easy filing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
