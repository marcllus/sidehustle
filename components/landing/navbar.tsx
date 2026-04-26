"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Zap } from "lucide-react"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-8 transition-all duration-400 border-b ${
          isScrolled
            ? "bg-[#05070d]/90 backdrop-blur-[28px] saturate-[160%] border-border-1"
            : "bg-transparent border-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-[34px] h-[34px] rounded-[10px] bg-gradient-to-br from-blue to-purple flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            <Zap className="w-[17px] h-[17px] text-white fill-white" />
          </div>
          <span className="font-[var(--font-syne)] font-extrabold text-xl bg-gradient-to-br from-white via-white to-blue-2 bg-clip-text text-transparent">
            SideHustle
          </span>
        </Link>

        <div className="flex-1" />

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-muted-2 px-3.5 py-1.5 rounded-lg transition-all hover:text-foreground hover:bg-border-0"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#pricing"
          className="hidden md:inline-flex font-[var(--font-syne)] text-[13px] font-bold px-[22px] py-2.5 rounded-[10px] bg-blue text-white ml-2 transition-all hover:translate-y-[-1px] hover:shadow-[0_0_28px_rgba(59,130,246,0.5)]"
        >
          Start free →
        </Link>

        <button
          className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="w-[22px] h-0.5 bg-foreground-muted rounded-sm" />
          <span className="w-[22px] h-0.5 bg-foreground-muted rounded-sm" />
          <span className="w-[22px] h-0.5 bg-foreground-muted rounded-sm" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[99] bg-[#05070d]/97 backdrop-blur-[20px] flex flex-col items-center justify-center gap-2 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-6 right-7 text-[28px] text-foreground-muted bg-transparent border-none"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X className="w-7 h-7" />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-[var(--font-syne)] text-[28px] font-bold text-foreground-muted px-8 py-3 transition-colors hover:text-blue-2"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#pricing"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-5 font-[var(--font-syne)] text-[15px] font-bold px-8 py-3.5 rounded-xl bg-gradient-to-br from-blue to-[#1d4ed8] text-white shadow-[0_0_40px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]"
        >
          Start free trial →
        </Link>
      </div>
    </>
  )
}
