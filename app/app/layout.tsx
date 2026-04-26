import { AppSidebar } from "@/components/app/sidebar"
import { AppTopNav } from "@/components/app/top-nav"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen pt-[68px]">
      <AppTopNav />
      <AppSidebar />
      <main className="flex-1 min-w-0 p-7 overflow-y-auto max-md:p-4">
        {children}
      </main>
    </div>
  )
}
