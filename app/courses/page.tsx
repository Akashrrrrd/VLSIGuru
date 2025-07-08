import { Header } from "@/components/header"
import { CoursesGrid } from "@/components/courses-grid"
import { Footer } from "@/components/footer"

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
        <CoursesGrid />
      <Footer />
    </div>
  )
}
