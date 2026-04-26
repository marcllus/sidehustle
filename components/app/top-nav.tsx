"use client"

import { Search, Bell } from "lucide-react"

export function AppTopNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] h-[68px] flex items-center bg-[#080a0f]/85 backdrop-blur-[24px] saturate-[160%] border-b border-border-1 px-5 gap-4">
      <div className="font-[var(--font-syne)] font-extrabold text-xl bg-gradient-to-br from-white via-white to-blue bg-clip-text text-transparent whitespace-nowrap mr-2">
        SideHustle
      </div>
      
      <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-blue bg-blue/10 border border-blue/25 px-2.5 py-0.5 rounded-full">
        App & Planner
      </div>

      <div className="flex-1" />

      {/* Search */}
      <div className="flex items-center gap-2 bg-surface-1 border border-border-2 rounded-[10px] px-3.5 py-2 w-[220px] max-md:hidden">
        <Search className="w-3.5 h-3.5 text-muted" />
        <input
          type="text"
          placeholder="Search projects, clients..."
          className="bg-transparent border-none outline-none text-foreground font-sans text-[13px] w-full placeholder:text-muted"
        />
      </div>

      {/* Notifications */}
      <button className="relative w-9 h-9 bg-surface-1 border border-border-1 rounded-[10px] flex items-center justify-center text-base transition-colors hover:bg-surface-2">
        <Bell className="w-4 h-4 text-muted-2" />
        <div className="absolute top-1.5 right-1.5 w-[7px] h-[7px] rounded-full bg-blue border-2 border-[#080a0f]" />
      </button>

      {/* Avatar */}
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue to-teal flex items-center justify-center font-[var(--font-syne)] font-bold text-[13px] text-white flex-shrink-0">
        JM
      </div>
    </nav>
  )
}
