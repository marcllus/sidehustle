import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Ticker } from "@/components/landing/ticker"
import { ProblemSolution } from "@/components/landing/problem-solution"
import { Features } from "@/components/landing/features"
import { RateCounter } from "@/components/landing/rate-counter"
import { Testimonials } from "@/components/landing/testimonials"
import { Pricing } from "@/components/landing/pricing"
import { FAQ } from "@/components/landing/faq"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"
import { BackgroundEffects } from "@/components/landing/background-effects"
import { ScrollReveal } from "@/components/landing/scroll-reveal"

export default function LandingPage() {
  return (
    <main className="relative min-h-screen">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <Ticker />
      <ProblemSolution />
      <Features />
      <RateCounter />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <ScrollReveal />
    </main>
  )
}
