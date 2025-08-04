import { CourseDetail } from "@/components/course-detail"
import { Footer } from "@/components/footer"

export default function CoursePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <CourseDetail courseId={params.id} />
      <Footer />
    </div>
  )
}
