import { Header } from "@/components/header"
import { VideoPlayer } from "@/components/video-player"
import { Footer } from "@/components/footer"

export default function WatchVideoPage({ params }: { params: { courseId: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <VideoPlayer courseId={params.courseId} />
      <Footer />
    </div>
  )
}
