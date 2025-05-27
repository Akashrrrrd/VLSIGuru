import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Master VLSI Design with <span className="text-purple-600">Affordable Learning</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Explore a wide range of VLSI-focused courses crafted to empower engineers and enthusiasts. Join us to enhance
          your skills in cutting-edge semiconductor technologies.
        </p>
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
          Browse Courses
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  )
}
