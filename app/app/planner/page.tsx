"use client"

import { useState } from "react"
import { Plus, ChevronLeft, ChevronRight } from "lucide-react"

const calendarEvents: Record<number, { title: string; color: string }[]> = {
  9: [{ title: "Acme call", color: "blue" }],
  10: [{ title: "Design review", color: "green" }],
  12: [{ title: "NovaBrand kick", color: "amber" }],
  14: [{ title: "Brand deadline", color: "purple" }],
  20: [{ title: "Content due", color: "green" }],
}

const eventColors: Record<string, string> = {
  blue: "bg-blue/20 text-blue-3",
  green: "bg-teal/15 text-teal-2",
  amber: "bg-amber/15 text-[#fcd34d]",
  purple: "bg-purple/15 text-[#c4b5fd]",
}

const upcomingDeadlines = [
  { title: "Brand Refresh — Final delivery", tag: "Mar 14", tagColor: "bg-red/15 text-red" },
  { title: "Acme Corp — Q2 Content Pack", tag: "Mar 20", tagColor: "bg-teal/15 text-teal-2" },
  { title: "NovaBrand — Website Launch", tag: "Apr 1", tagColor: "bg-blue/15 text-blue-2" },
  { title: "Q1 Tax Documents Due", tag: "Apr 15", tagColor: "bg-amber/15 text-amber" },
]

const bookedThisWeek = [
  {
    day: "MON",
    date: "09",
    title: "Client call — Acme Corp",
    time: "10:00 AM · 45 min · Zoom",
    color: "blue",
  },
  {
    day: "TUE",
    date: "10",
    title: "Design review — Brand Refresh",
    time: "2:00 PM · 1 hour · Figma",
    color: "teal",
  },
  {
    day: "THU",
    date: "12",
    title: "NovaBrand — Kickoff meeting",
    time: "11:00 AM · 90 min · In person",
    color: "amber",
  },
]

const meetingColors: Record<string, string> = {
  blue: "bg-blue/10 border-blue/20",
  teal: "bg-teal/10 border-teal/20",
  amber: "bg-amber/10 border-amber/20",
}

export default function PlannerPage() {
  const [currentMonth] = useState("March 2026")

  // Generate calendar days (simplified)
  const daysInMonth = 31
  const firstDayOffset = 0 // March 2026 starts on Sunday
  const totalCells = Math.ceil((daysInMonth + firstDayOffset) / 7) * 7

  const calendarCells = Array.from({ length: totalCells }, (_, i) => {
    const dayNumber = i - firstDayOffset + 1
    if (dayNumber < 1 || dayNumber > daysInMonth) {
      return { day: null, isOtherMonth: true }
    }
    return { day: dayNumber, isOtherMonth: false, isToday: dayNumber === 10 }
  })

  return (
    <div>
      {/* Page Header */}
      <div className="flex items-start justify-between mb-7 flex-wrap gap-4">
        <div>
          <h1 className="font-[var(--font-syne)] text-[26px] font-extrabold tracking-[-0.02em] leading-tight">
            📅 Weekly Planner
          </h1>
          <p className="text-sm text-muted mt-1">Organize your schedule, deadlines & deliverables</p>
        </div>
        <div className="flex gap-2.5 items-center flex-shrink-0">
          <button className="inline-flex items-center gap-1.5 font-[var(--font-syne)] font-semibold text-[13px] px-[18px] py-2.5 rounded-[9px] bg-surface-1 text-foreground border border-border-2 transition-all hover:bg-surface-2">
            Week
          </button>
          <button className="inline-flex items-center gap-1.5 font-[var(--font-syne)] font-semibold text-[13px] px-[18px] py-2.5 rounded-[9px] bg-surface-1 text-foreground border border-border-2 transition-all hover:bg-surface-2">
            Month
          </button>
          <button className="inline-flex items-center gap-1.5 font-[var(--font-syne)] font-semibold text-[13px] px-[18px] py-2.5 rounded-[9px] bg-blue text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:translate-y-[-1px] hover:shadow-[0_0_32px_rgba(59,130,246,0.4)]">
            <Plus className="w-3.5 h-3.5" /> New Event
          </button>
        </div>
      </div>

      {/* Calendar Header */}
      <div className="flex items-center gap-3 mb-5">
        <button className="bg-surface-1 border border-border-1 rounded-lg px-3 py-1.5 text-lg leading-none hover:bg-surface-2 transition-colors">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="font-[var(--font-syne)] font-extrabold text-xl flex-1">{currentMonth}</div>
        <button className="bg-surface-1 border border-border-1 rounded-lg px-3 py-1.5 text-lg leading-none hover:bg-surface-2 transition-colors">
          <ChevronRight className="w-4 h-4" />
        </button>
        <button className="ml-2 font-[var(--font-syne)] font-semibold text-xs px-3 py-1.5 rounded-[7px] bg-surface-1 text-foreground border border-border-2 transition-all hover:bg-surface-2">
          Today
        </button>
      </div>

      {/* Calendar Grid Header */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center text-[11px] font-bold text-muted uppercase tracking-[0.06em] py-1.5"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mb-6">
        {calendarCells.map((cell, i) => (
          <div
            key={i}
            className={`bg-surface-1 border rounded-[10px] p-2 min-h-[80px] cursor-pointer transition-all hover:border-border-2 hover:bg-surface-2 ${
              cell.isToday ? "border-blue bg-blue/5" : "border-border-1"
            } ${cell.isOtherMonth ? "opacity-40" : ""}`}
          >
            {cell.day && (
              <>
                <div
                  className={`font-[var(--font-syne)] text-[13px] font-bold mb-1.5 ${
                    cell.isToday
                      ? "bg-blue text-white w-[22px] h-[22px] rounded-full flex items-center justify-center text-[11px]"
                      : ""
                  }`}
                >
                  {cell.day}
                </div>
                {calendarEvents[cell.day]?.map((event, j) => (
                  <div
                    key={j}
                    className={`text-[10px] font-semibold px-1.5 py-0.5 rounded mb-0.5 truncate ${
                      eventColors[event.color]
                    }`}
                  >
                    {event.title}
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
        {/* Upcoming Deadlines */}
        <div className="bg-surface-1 border border-border-1 rounded-[20px] p-6">
          <div className="font-[var(--font-syne)] font-bold text-[15px] mb-4">Upcoming Deadlines</div>
          <div className="flex flex-col gap-2">
            {upcomingDeadlines.map((deadline, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-surface-1 border border-border-1 rounded-[10px] px-4 py-3"
              >
                <div className="w-5 h-5 rounded-full border-2 border-border-2 flex-shrink-0" />
                <div className="text-[13px] font-medium flex-1">{deadline.title}</div>
                <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${deadline.tagColor}`}>
                  {deadline.tag}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booked This Week */}
        <div className="bg-surface-1 border border-border-1 rounded-[20px] p-6">
          <div className="font-[var(--font-syne)] font-bold text-[15px] mb-4">Booked This Week</div>
          <div className="flex flex-col gap-2.5">
            {bookedThisWeek.map((meeting, i) => (
              <div key={i} className="flex gap-3 items-center">
                <div className="w-12 text-center flex-shrink-0">
                  <div className="text-[10px] text-muted uppercase font-bold">{meeting.day}</div>
                  <div className="font-[var(--font-syne)] text-xl font-extrabold leading-none">
                    {meeting.date}
                  </div>
                </div>
                <div
                  className={`flex-1 border rounded-lg px-3 py-2.5 ${meetingColors[meeting.color]}`}
                >
                  <div className="text-[13px] font-semibold">{meeting.title}</div>
                  <div className="text-[11px] text-muted">{meeting.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
