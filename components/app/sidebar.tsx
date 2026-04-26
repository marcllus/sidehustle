"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Calendar, 
  FolderKanban, 
  FileText, 
  Zap, 
  DollarSign, 
  Smartphone,
  Settings,
  User
} from "lucide-react"

const mainNavItems = [
  { href: "/app", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/app/planner", icon: Calendar, label: "Planner" },
  { href: "/app/projects", icon: FolderKanban, label: "Projects", badge: "4" },
  { href: "/app/invoices", icon: FileText, label: "Invoices", badge: "2", badgeColor: "amber" },
  { href: "/app/workflows", icon: Zap, label: "Workflows", badge: "Live", badgeColor: "teal" },
]

const toolNavItems = [
  { href: "/app/income", icon: DollarSign, label: "Income" },
  { href: "/app/download", icon: Smartphone, label: "Get the App" },
]

export function AppSidebar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/app") return pathname === "/app"
    return pathname.startsWith(href)
  }

  return (
    <aside className="w-[220px] flex-shrink-0 bg-background-2 border-r border-border-1 p-6 py-6 flex flex-col gap-1 sticky top-[68px] h-[calc(100vh-68px)] overflow-y-auto max-md:hidden">
      <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-muted px-3 pb-1.5 pt-2">
        Main
      </div>
      
      {mainNavItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex items-center gap-2.5 px-3 py-2.5 rounded-[10px] text-sm font-medium transition-all border border-transparent ${
            isActive(item.href)
              ? "bg-blue/10 text-blue border-blue/20"
              : "text-muted-2 hover:bg-surface-1 hover:text-foreground"
          }`}
        >
          <item.icon className="w-4 h-4" />
          {item.label}
          {item.badge && (
            <span
              className={`ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                item.badgeColor === "amber"
                  ? "bg-amber/15 text-amber"
                  : item.badgeColor === "teal"
                  ? "bg-teal/15 text-teal"
                  : "bg-blue text-white"
              }`}
            >
              {item.badge}
            </span>
          )}
        </Link>
      ))}

      <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-muted px-3 pb-1.5 pt-4">
        Tools
      </div>

      {toolNavItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex items-center gap-2.5 px-3 py-2.5 rounded-[10px] text-sm font-medium transition-all border border-transparent ${
            isActive(item.href)
              ? "bg-blue/10 text-blue border-blue/20"
              : "text-muted-2 hover:bg-surface-1 hover:text-foreground"
          }`}
        >
          <item.icon className="w-4 h-4" />
          {item.label}
        </Link>
      ))}

      <div className="mt-auto pt-4 border-t border-border-1 flex flex-col gap-1">
        <Link
          href="/app/settings"
          className="flex items-center gap-2.5 px-3 py-2.5 rounded-[10px] text-sm font-medium text-muted-2 transition-all hover:bg-surface-1 hover:text-foreground"
        >
          <Settings className="w-4 h-4" />
          Settings
        </Link>
        
        <div className="flex items-center gap-2.5 px-3 py-2.5">
          <User className="w-4 h-4 text-muted-2" />
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-foreground truncate">Jamie Mitchell</div>
            <div className="text-[10px] text-muted">Pro Plan</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
