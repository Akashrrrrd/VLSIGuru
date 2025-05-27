import { Header } from "@/components/header"
import { EnrollmentForm } from "@/components/enrollment-form"
import { Footer } from "@/components/footer"

export default function EnrollPage({ params }: { params: { courseId: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <EnrollmentForm courseId={params.courseId} />
      <Footer />
    </div>
  )
}
