"use client"

import Link from "next/link"
import { Zap } from "lucide-react"

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#" },
    { label: "Roadmap", href: "#" },
    { label: "API", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "GDPR", href: "#" },
  ],
}

const socialLinks = [
  { icon: "𝕏", href: "#" },
  { icon: "in", href: "#" },
  { icon: "📘", href: "#" },
  { icon: "🐙", href: "#" },
]

export function Footer() {
  return (
    <footer className="border-t border-border-1 py-14 bg-background-2 relative z-10">
      <div className="max-w-[1140px] mx-auto px-8">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 no-underline mb-3.5">
              <div className="w-8 h-8 rounded-[9px] bg-gradient-to-br from-blue to-purple flex items-center justify-center">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-[var(--font-syne)] font-extrabold text-xl bg-gradient-to-br from-white via-white to-blue-2 bg-clip-text text-transparent">
                SideHustle
              </span>
            </Link>
            <p className="text-[13px] text-muted-2 leading-[1.7] max-w-[240px] mb-5">
              The freelance business tool that shows you what you&apos;re really earning — and helps you earn more.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="w-[34px] h-[34px] rounded-[9px] bg-surface-1 border border-border-1 flex items-center justify-center text-[15px] text-muted-2 transition-all hover:bg-surface-2 hover:border-border-2 hover:text-foreground"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <div className="font-[var(--font-syne)] text-xs font-bold text-muted-2 uppercase tracking-[0.1em] mb-4">
                {title}
              </div>
              <div className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[13px] text-muted-2 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border-1 pt-6 flex items-center justify-between text-xs text-muted flex-wrap gap-2.5">
          <span>© 2026 SideHustle, Inc. All rights reserved.</span>
          <span>Made with ⚡ for freelancers who mean business</span>
        </div>
      </div>
    </footer>
  )
}
