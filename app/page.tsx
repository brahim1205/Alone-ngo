import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { SDGSection } from "@/components/sdg-section"
import { HelpGoalSection } from "@/components/help-goal-section"
import { StatsSection } from "@/components/stats-section"
import { SecondaryHero } from "@/components/secondary-hero"
import { ProductShop } from "@/components/product-shop"
import { EventsSection } from "@/components/events-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NewsSection } from "@/components/news-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <MissionSection />
      <SDGSection />
      <HelpGoalSection />
      <StatsSection />
      <SecondaryHero />
      <ProductShop />
      <EventsSection />
      <TestimonialsSection />
      <NewsSection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}
