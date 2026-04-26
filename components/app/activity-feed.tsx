"use client"

const activities = [
  {
    icon: "💰",
    iconBg: "rgba(6,214,160,0.15)",
    text: "<strong>Payment received</strong> from Acme Corp",
    time: "2 hours ago",
    amount: "+$1,200",
    amountColor: "text-teal",
  },
  {
    icon: "📄",
    iconBg: "rgba(59,130,246,0.15)",
    text: "<strong>Invoice #049</strong> sent to Designify",
    time: "Yesterday, 4:30 PM",
    amount: "$850",
    amountColor: "text-amber",
  },
  {
    icon: "⚡",
    iconBg: "rgba(245,158,11,0.15)",
    text: "<strong>Workflow triggered</strong> — Invoice reminder",
    time: "Yesterday, 9:00 AM",
  },
  {
    icon: "🆕",
    iconBg: "rgba(139,92,246,0.15)",
    text: '<strong>New project</strong> "Brand Refresh" created',
    time: "2 days ago",
  },
]

export function ActivityFeed() {
  return (
    <div className="bg-surface-1 border border-border-1 rounded-[20px] p-6">
      <div className="flex items-center justify-between mb-[18px]">
        <div className="font-[var(--font-syne)] font-bold text-[15px]">Recent Activity</div>
        <button className="inline-flex items-center gap-1.5 font-[var(--font-syne)] font-semibold text-xs px-3 py-1.5 rounded-[7px] bg-surface-1 text-foreground border border-border-2 transition-all hover:bg-surface-2">
          View All
        </button>
      </div>

      <div className="flex flex-col">
        {activities.map((activity, i) => (
          <div
            key={i}
            className="flex gap-3.5 py-3.5 border-b border-border-1 last:border-b-0 relative"
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5"
              style={{ background: activity.iconBg }}
            >
              {activity.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div
                className="text-[13px] leading-[1.5]"
                dangerouslySetInnerHTML={{ __html: activity.text }}
              />
              <div className="text-[11px] text-muted mt-0.5">{activity.time}</div>
            </div>
            {activity.amount && (
              <div
                className={`font-[var(--font-syne)] font-bold text-sm flex-shrink-0 mt-1 ${activity.amountColor}`}
              >
                {activity.amount}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
