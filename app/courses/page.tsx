import { Header } from "@/components/header"
import { CoursesGrid } from "@/components/courses-grid"
import { Footer } from "@/components/footer"

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">All Courses</h1>
            <p className="text-lg text-gray-600">Explore our comprehensive collection of VLSI courses</p>
          </div>
        </div>
        <CoursesGrid />
      </div>
      <Footer />
    </div>
  )
}
