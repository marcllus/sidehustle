"use client"

import { useState } from "react"
import { Check, Plus } from "lucide-react"

interface Task {
  id: number
  title: string
  tag: string
  tagColor: "design" | "dev" | "client" | "admin"
  done: boolean
}

const initialTasks: Task[] = [
  { id: 1, title: "Send proposal to NovaBrand", tag: "Client", tagColor: "client", done: true },
  { id: 2, title: "Review logo variations — round 2", tag: "Design", tagColor: "design", done: true },
  { id: 3, title: "Update project timeline for Q2", tag: "Admin", tagColor: "admin", done: true },
  { id: 4, title: "Fix mobile nav bug on client site", tag: "Dev", tagColor: "dev", done: false },
  { id: 5, title: "Write content brief for Acme blog post", tag: "Client", tagColor: "client", done: false },
  { id: 6, title: "Invoice follow-up: Designify (14 days overdue)", tag: "Admin", tagColor: "admin", done: false },
]

const tagColors = {
  design: "bg-purple/15 text-[#c4b5fd]",
  dev: "bg-blue/15 text-blue-3",
  client: "bg-teal/15 text-teal-2",
  admin: "bg-amber/15 text-[#fcd34d]",
}

export function TaskList() {
  const [tasks, setTasks] = useState(initialTasks)

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)))
  }

  const completedCount = tasks.filter((t) => t.done).length

  return (
    <div className="bg-surface-1 border border-border-1 rounded-[20px] p-6">
      <div className="flex items-center justify-between mb-[18px]">
        <div>
          <div className="font-[var(--font-syne)] font-bold text-[15px]">{"Today's Tasks"}</div>
          <div className="text-xs text-muted mt-0.5">
            {completedCount} of {tasks.length} completed
          </div>
        </div>
        <button className="inline-flex items-center gap-1.5 font-[var(--font-syne)] font-semibold text-xs px-3 py-1.5 rounded-[7px] bg-surface-1 text-foreground border border-border-2 transition-all hover:bg-surface-2">
          <Plus className="w-3 h-3" /> Add Task
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className={`flex items-center gap-3 bg-surface-1 border border-border-1 rounded-[10px] px-4 py-3 cursor-pointer transition-all hover:border-border-2 ${
              task.done ? "opacity-50" : ""
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                task.done
                  ? "bg-teal border-teal text-black"
                  : "border-border-2"
              }`}
            >
              {task.done && <Check className="w-2.5 h-2.5" />}
            </div>
            <div
              className={`text-[13px] font-medium flex-1 ${
                task.done ? "line-through" : ""
              }`}
            >
              {task.title}
            </div>
            <div
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
                tagColors[task.tagColor]
              }`}
            >
              {task.tag}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
