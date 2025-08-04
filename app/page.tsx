import { HeroSection } from "@/components/hero-section"
import { CoursesGrid } from "@/components/courses-grid"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <CoursesGrid />
      <Footer />
    </div>
  )
}
