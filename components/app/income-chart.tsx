"use client"

const chartData = [
  { month: "Oct", income: 55, expense: 22 },
  { month: "Nov", income: 70, expense: 28 },
  { month: "Dec", income: 48, expense: 18 },
  { month: "Jan", income: 85, expense: 30 },
  { month: "Feb", income: 78, expense: 24 },
  { month: "Mar", income: 110, expense: 35 },
]

export function IncomeChart() {
  return (
    <div className="bg-surface-1 border border-border-1 rounded-[20px] p-6 overflow-hidden">
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="font-[var(--font-syne)] font-bold text-base">Income vs Expenses</div>
          <div className="text-xs text-muted mt-0.5">Last 6 months</div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5 text-xs text-muted-2">
            <div className="w-2 h-2 rounded-full bg-blue" />
            Income
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-2">
            <div className="w-2 h-2 rounded-full bg-red" />
            Expenses
          </div>
        </div>
      </div>

      <div className="flex items-end gap-2 h-[140px] pb-6 relative">
        {/* Bottom line */}
        <div className="absolute bottom-6 left-0 right-0 h-px bg-border-1" />

        {chartData.map((data) => (
          <div key={data.month} className="flex flex-col items-center gap-0.5 flex-1">
            <div className="flex items-end gap-0.5">
              <div
                className="w-[18px] rounded-t cursor-pointer transition-opacity hover:opacity-80"
                style={{
                  height: `${data.income}px`,
                  background: "linear-gradient(to top, var(--blue), #60a5fa)",
                }}
              />
              <div
                className="w-[18px] rounded-t cursor-pointer transition-opacity hover:opacity-80"
                style={{
                  height: `${data.expense}px`,
                  background: "linear-gradient(to top, rgba(248,113,113,0.5), rgba(248,113,113,0.3))",
                }}
              />
            </div>
            <div className="text-[10px] text-muted mt-1">{data.month}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
