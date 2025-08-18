import { CourseDetail } from "@/components/course-detail"
import { Footer } from "@/components/footer"

export default async function CoursePage({ params }: { params: { id: string } }) {
  // await is not strictly necessary for params, but Next.js expects the component to be async
  const { id } = await params

  return (
    <div className="min-h-screen bg-gray-50">
      <CourseDetail courseId={id} />
      <Footer />
    </div>
  )
}
