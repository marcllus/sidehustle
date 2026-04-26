"use client"

import { Plus, Filter, Download } from "lucide-react"

const projects = [
  {
    name: "Brand Refresh",
    desc: "Logo · Identity · Guidelines",
    client: "Designify",
    clientInitials: "DE",
    clientGradient: "linear-gradient(135deg,#3b82f6,#06d6a0)",
    value: "$2,400",
    progress: 72,
    deadline: "Mar 14",
    deadlineColor: "text-red",
    status: "active",
  },
  {
    name: "Q2 Content Pack",
    desc: "Blog · Social · Email",
    client: "Acme Corp",
    clientInitials: "AC",
    clientGradient: "linear-gradient(135deg,#f59e0b,#ef4444)",
    value: "$1,800",
    progress: 40,
    deadline: "Mar 20",
    deadlineColor: "text-foreground",
    status: "active",
  },
  {
    name: "Website Redesign",
    desc: "UI Design · Dev · CMS",
    client: "NovaBrand",
    clientInitials: "NB",
    clientGradient: "linear-gradient(135deg,#8b5cf6,#ec4899)",
    value: "$5,200",
    progress: 15,
    deadline: "Apr 1",
    deadlineColor: "text-foreground",
    status: "pending",
  },
  {
    name: "Mobile App UI",
    desc: "Figma · Prototype",
    client: "ScaleUp",
    clientInitials: "SC",
    clientGradient: "linear-gradient(135deg,#06d6a0,#3b82f6)",
    value: "$3,100",
    progress: 90,
    deadline: "Mar 8",
    deadlineColor: "text-foreground",
    status: "overdue",
  },
]

const statusStyles = {
  active: { label: "● Active", className: "bg-blue/10 text-blue-2" },
  done: { label: "✓ Done", className: "bg-teal/10 text-teal" },
  pending: { label: "◐ Kickoff", className: "bg-amber/10 text-amber" },
  overdue: { label: "! Overdue", className: "bg-red/10 text-red" },
}

export default function ProjectsPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="flex items-start justify-between mb-7 flex-wrap gap-4">
        <div>
          <h1 className="font-[var(--font-syne)] text-[26px] font-extrabold tracking-[-0.02em] leading-tight">
            📁 Projects
          </h1>
          <p className="text-sm text-muted mt-1">4 active · 12 completed</p>
        </div>
        <div className="flex gap-2.5 items-center flex-shrink-0">
          <button className="inline-flex items-center gap-1.5 font-[var(--font-syne)] font-semibold text-[13px] px-[18px] py-2.5 rounded-[9px] bg-surface-1 text-foreground border border-border-2 transition-all hover:bg-surface-2">
            <Filter className="w-3.5 h-3.5" /> Filter
          </button>
          <button className="inline-flex items-center gap-1.5 font-[var(--font-syne)] font-semibold text-[13px] px-[18px] py-2.5 rounded-[9px] bg-blue text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:translate-y-[-1px] hover:shadow-[0_0_32px_rgba(59,130,246,0.4)]">
            <Plus className="w-3.5 h-3.5" /> New Project
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-surface-1 border border-border-1 rounded-[20px] overflow-hidden">
        <div className="flex items-center px-5 py-4 border-b border-border-1 gap-3.5">
          <h3 className="font-[var(--font-syne)] font-bold text-[15px]">All Projects</h3>
          <div className="ml-auto flex gap-2">
            <button className="inline-flex items-center gap-1.5 font-[var(--font-syne)] font-semibold text-xs px-3 py-1.5 rounded-[7px] bg-surface-1 text-foreground border border-border-2 transition-all hover:bg-surface-2">
              Sort
            </button>
            <button className="inline-flex items-center gap-1.5 font-[var(--font-syne)] font-semibold text-xs px-3 py-1.5 rounded-[7px] bg-surface-1 text-foreground border border-border-2 transition-all hover:bg-surface-2">
              <Download className="w-3 h-3" /> Export
            </button>
          </div>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr>
              {["Project", "Client", "Value", "Progress", "Deadline", "Status"].map((header) => (
                <th
                  key={header}
                  className="text-left px-5 py-3 text-[11px] font-bold text-muted uppercase tracking-[0.08em] border-b border-border-1 bg-white/[0.01]"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project.name}
                className="cursor-pointer transition-colors hover:bg-white/[0.02]"
              >
                <td className="px-5 py-3.5 text-sm border-b border-border-1">
                  <div className="font-semibold">{project.name}</div>
                  <div className="text-[11px] text-muted">{project.desc}</div>
                </td>
                <td className="px-5 py-3.5 border-b border-border-1">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
                      style={{ background: project.clientGradient }}
                    >
                      {project.clientInitials}
                    </div>
                    <span className="text-sm">{project.client}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 border-b border-border-1">
                  <strong className="text-sm">{project.value}</strong>
                </td>
                <td className="px-5 py-3.5 border-b border-border-1">
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-1.5 bg-background rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${project.progress}%`,
                          background:
                            project.progress >= 90 ? "var(--teal)" : "var(--blue)",
                        }}
                      />
                    </div>
                    <span className="text-[11px] text-muted">{project.progress}%</span>
                  </div>
                </td>
                <td className={`px-5 py-3.5 border-b border-border-1 text-[13px] ${project.deadlineColor}`}>
                  {project.deadline}
                </td>
                <td className="px-5 py-3.5 border-b border-border-1">
                  <div
                    className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${
                      statusStyles[project.status as keyof typeof statusStyles].className
                    }`}
                  >
                    {statusStyles[project.status as keyof typeof statusStyles].label}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
