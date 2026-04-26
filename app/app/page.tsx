"use client"

import { StatCard } from "@/components/app/stat-card"
import { IncomeChart } from "@/components/app/income-chart"
import { ActivityFeed } from "@/components/app/activity-feed"
import { TaskList } from "@/components/app/task-list"
import { Plus } from "lucide-react"

export default function DashboardPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="flex items-start justify-between mb-7 flex-wrap gap-4">
        <div>
          <h1 className="font-[var(--font-syne)] text-[26px] font-extrabold tracking-[-0.02em] leading-tight">
            Good morning, Jamie 👋
          </h1>
          <p className="text-sm text-muted mt-1">
            Tuesday, March 10, 2026 · Here&apos;s your hustle at a glance
          </p>
        </div>
        <div className="flex gap-2.5 items-center flex-shrink-0">
          <button className="inline-flex items-center gap-1.5 font-[var(--font-syne)] font-semibold text-[13px] px-[18px] py-2.5 rounded-[9px] bg-surface-1 text-foreground border border-border-2 transition-all hover:bg-surface-2">
            <Plus className="w-3.5 h-3.5" /> Add Project
          </button>
          <button className="inline-flex items-center gap-1.5 font-[var(--font-syne)] font-semibold text-[13px] px-[18px] py-2.5 rounded-[9px] bg-blue text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:translate-y-[-1px] hover:shadow-[0_0_32px_rgba(59,130,246,0.4)]">
            <Plus className="w-3.5 h-3.5" /> Quick Task
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4 mb-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <StatCard
          label="This Month"
          value="$4,820"
          change="18% vs last month"
          changeDirection="up"
          glowColor="rgba(59,130,246,0.3)"
          sparklineData={[40, 60, 45, 80, 55, 90, 70]}
          sparklineColor="var(--blue)"
        />
        <StatCard
          label="Active Projects"
          value="4"
          change="1 new this week"
          changeDirection="up"
          glowColor="rgba(6,214,160,0.2)"
          sparklineData={[50, 50, 75, 75, 100, 100, 100]}
          sparklineColor="var(--teal)"
        />
        <StatCard
          label="Unpaid Invoices"
          value="$1,950"
          change="2 awaiting payment"
          changeDirection="neutral"
          glowColor="rgba(245,158,11,0.2)"
          sparklineData={[100, 60, 80, 40, 90, 50, 70]}
          sparklineColor="var(--amber)"
        />
        <StatCard
          label="Real Hourly Rate"
          value="$68"
          change="$12 from last month"
          changeDirection="up"
          glowColor="rgba(196,181,253,0.2)"
          sparklineData={[35, 40, 50, 65, 72, 80, 90]}
          sparklineColor="#c4b5fd"
        />
      </div>

      {/* Charts + Activity Row */}
      <div className="grid grid-cols-2 gap-4 mb-5 max-lg:grid-cols-1">
        <IncomeChart />
        <ActivityFeed />
      </div>

      {/* Today's Tasks */}
      <TaskList />
    </div>
  )
}
