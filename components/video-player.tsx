"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Play, Pause, SkipForward, SkipBack, Volume2, Maximize, Lock } from "lucide-react"
import { getCourseById } from "@/lib/courses-data"
import Link from "next/link"

interface VideoPlayerProps {
  courseId: string
}

export function VideoPlayer({ courseId }: VideoPlayerProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [hasAccess, setHasAccess] = useState(false) // Mock user access - in real app, check user enrollment

  const course = getCourseById(Number.parseInt(courseId))

  // Initialize available videos and current video
  const availableVideos = course ? (hasAccess ? course.videos : course.videos.filter((video) => video.isFree)) : []
  const currentVideo = availableVideos[currentVideoIndex] || null

  const handleVideoSelect = (index: number) => {
    if (index >= 0 && index < availableVideos.length) {
      setCurrentVideoIndex(index)
      setProgress(0)
      setIsPlaying(false)
    }
  }

  const handleNextVideo = () => {
    if (currentVideoIndex < availableVideos.length - 1) {
      handleVideoSelect(currentVideoIndex + 1)
    }
  }

  const handlePreviousVideo = () => {
    if (currentVideoIndex > 0) {
      handleVideoSelect(currentVideoIndex - 1)
    }
  }

  // Mock progress update
  useEffect(() => {
    if (isPlaying && currentVideo) {
      const interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 1, 100))
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, currentVideo])

  if (!course) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h1>
          <Link href="/courses">
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </div>
    )
  }

  if (!currentVideo) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">No videos available</h1>
          <p className="text-gray-600 mb-6">
            {hasAccess ? "This course doesn't have any videos yet." : "Please enroll to access course videos."}
          </p>
          <Link href={`/enroll/${course.id}`}>
            <Button className="bg-purple-600 hover:bg-purple-700">Enroll Now</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Video Player */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-0">
              {/* Video Display Area */}
              <div className="relative bg-black aspect-video rounded-t-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                    </div>
                    <p className="text-lg font-semibold">{currentVideo.title}</p>
                    <p className="text-sm opacity-75">{currentVideo.duration}</p>
                  </div>
                </div>

                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <div className="flex items-center gap-4 text-white">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handlePreviousVideo}
                      disabled={currentVideoIndex === 0}
                    >
                      <SkipBack className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => setIsPlaying(!isPlaying)}>
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleNextVideo}
                      disabled={currentVideoIndex === availableVideos.length - 1}
                    >
                      <SkipForward className="w-5 h-5" />
                    </Button>
                    <div className="flex-1">
                      <Progress value={progress} className="h-1" />
                    </div>
                    <Button variant="ghost" size="icon">
                      <Volume2 className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Maximize className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">{currentVideo.title}</h1>
                    <p className="text-gray-600">{currentVideo.description}</p>
                  </div>
                  <Badge variant="secondary">{currentVideo.duration}</Badge>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>Progress: {progress}%</span>
                  <span>•</span>
                  <span>Course: {course.title}</span>
                  <span>•</span>
                  <span>Instructor: {course.trainer.name}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Course Info */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>About This Course</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="font-semibold">Duration:</span>
                <span>{course.duration}</span>
                <span>•</span>
                <span className="font-semibold">Level:</span>
                <span>{course.category}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Playlist */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Course Videos
                {!hasAccess && (
                  <Badge variant="outline" className="text-orange-600 border-orange-600">
                    Limited Access
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {availableVideos.map((video, index) => {
                  const isCurrent = index === currentVideoIndex

                  return (
                    <div
                      key={video.id}
                      className={`p-4 border-b last:border-b-0 cursor-pointer transition-colors ${
                        isCurrent ? "bg-purple-50 border-l-4 border-l-purple-600" : "hover:bg-gray-50"
                      }`}
                      onClick={() => handleVideoSelect(index)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              isCurrent ? "bg-purple-600 text-white" : "bg-gray-200"
                            }`}
                          >
                            <Play className="w-4 h-4 ml-0.5" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className={`font-medium text-sm ${isCurrent ? "text-purple-600" : "text-gray-900"}`}>
                            {video.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{video.duration}</p>
                          {video.isFree && (
                            <Badge variant="secondary" className="mt-2 text-xs">
                              Free Preview
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {!hasAccess && (
                <>
                  <Separator />
                  <div className="p-4">
                    <div className="text-center">
                      <Lock className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900 mb-2">Unlock All Videos</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Enroll in this course to access all {course.videos.length} videos and course materials.
                      </p>
                      <Link href={`/enroll/${course.id}`}>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">
                          Enroll Now - $
                          {course.discount ? course.price - (course.price * course.discount) / 100 : course.price}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Course Progress (if enrolled) */}
          {hasAccess && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Course Completion</span>
                      <span>25%</span>
                    </div>
                    <Progress value={25} />
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>3 of {course.videos.length} videos completed</p>
                    <p>Estimated time remaining: 8 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
