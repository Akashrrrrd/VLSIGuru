"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Star,
  Clock,
  Users,
  Award,
  ChevronDown,
  Play,
  BookOpen,
  Calendar,
  HelpCircle,
  FileText,
  GraduationCap,
  User,
  Construction,
  AlertCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getCourseById } from "@/lib/courses-data"

interface CourseDetailProps {
  courseId: string
}

export function CourseDetail({ courseId }: CourseDetailProps) {
  const [activeTab, setActiveTab] = useState("syllabus")
  const course = getCourseById(Number.parseInt(courseId))

  if (!course) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist.</p>
          <Link href="/courses">
            <Button>Browse All Courses</Button>
          </Link>
        </div>
      </div>
    )
  }

  // Check if this is a Design Verification or Physical Design course
  const isAvailableCourse = course.title.toLowerCase().includes("design verification") || 
                           course.title.toLowerCase().includes("physical design") ||
                           course.category.toLowerCase().includes("design verification") ||
                           course.category.toLowerCase().includes("physical design")

  // If course is not available, show construction message
  if (!isAvailableCourse) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="mb-8">
            <Construction className="w-24 h-24 text-orange-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Under Construction</h1>
            <p className="text-xl text-gray-600 mb-2">This course is currently being developed</p>
            <p className="text-lg text-gray-500">Opens in Future - Stay tuned for updates!</p>
          </div>
          <div className="mt-8">
            <Link href="/courses">
              <Button variant="outline" size="lg" className="gap-2">
                <BookOpen className="w-4 h-4" />
                Browse Available Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Original course content for available courses
  const discountedPrice = course.discount ? course.price - (course.price * course.discount) / 100 : course.price

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Course Header */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div>
          <Badge className="mb-4">{course.category}</Badge>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
          <p className="text-gray-600 mb-6">{course.description}</p>
        </div>

        <div className="relative">
          <Image
            src={course.image || "/course1.png"}
            alt={course.title}
            width={600}
            height={400}
            className="w-full h-64 lg:h-80 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Price and Enrollment */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl font-bold text-purple-600">₹{discountedPrice}</span>
                {course.discount && (
                  <>
                    <span className="text-lg text-gray-500 line-through">₹{course.price}</span>
                    <Badge className="bg-red-500 text-white">{course.discount}% Off</Badge>
                  </>
                )}
              </div>
              <p className="text-gray-600">One-time payment • Lifetime access</p>
            </div>
            <div className="flex gap-3">
              <Link 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfCgEnbswX5k-KNOW43rvgYlNxxHHZa5AKK4SYAtWV959o1bg/viewform?usp=header"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Enroll Now
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Course Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-7 bg-white border rounded-lg p-1">
          <TabsTrigger
            value="syllabus"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white gap-2"
          >
            <FileText className="w-4 h-4" />
            Syllabus
          </TabsTrigger>
          <TabsTrigger
            value="schedule"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white gap-2"
          >
            <Calendar className="w-4 h-4" />
            Schedule
          </TabsTrigger>
          <TabsTrigger value="faqs" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white gap-2">
            <HelpCircle className="w-4 h-4" />
            FAQs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">{course.overview.welcome}</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">{course.overview.description}</p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-lg mb-4 text-blue-900">🎯 Learning Objectives</h4>
                <ul className="space-y-3">
                  {course.overview.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-blue-800">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-green-900">Duration</h5>
                  <p className="text-green-700">{course.duration}</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-orange-900">Students</h5>
                  <p className="text-orange-700">{course.students}+ enrolled</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-purple-900">Certificate</h5>
                  <p className="text-purple-700">Included</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="syllabus" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-purple-600">📚 Course Syllabus</h3>
              <p className="text-gray-600 mb-6">
                This {course.weeks}-week comprehensive course is structured to take you from fundamentals to advanced
                concepts.
              </p>
              <div className="space-y-4">
                {course.syllabus.map((week, index) => (
                  <Collapsible key={index}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg hover:from-purple-100 hover:to-blue-100 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {week.week}
                        </div>
                        <span className="font-semibold text-left">{week.title}</span>
                      </div>
                      <ChevronDown className="w-5 h-5 text-purple-600" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 border border-t-0 rounded-b-lg bg-white">
                      <ul className="space-y-2">
                        {week.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                            <span className="text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-purple-600">📅 Course Schedule & Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Course Duration</h4>
                    <p className="text-gray-700">{course.schedule.duration}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Session Format</h4>
                    <p className="text-gray-700">{course.schedule.sessions}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Learning Mode</h4>
                    <p className="text-gray-700">{course.schedule.mode}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Tools & Software</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.schedule.tools.map((tool, index) => (
                        <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Course Fee</h4>
                    <p className="text-2xl font-bold text-green-700">${course.schedule.fee}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-3">📋 Weekly Breakdown</h4>
                <p className="text-purple-800">{course.schedule.breakdown}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faqs" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-purple-600">❓ Frequently Asked Questions</h3>
              <div className="space-y-4">
                {course.faqs.map((faq, index) => (
                  <Collapsible key={index}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-semibold text-left">Q: {faq.question}</span>
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 border border-t-0 rounded-b-lg bg-white">
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold text-purple-600">A:</span> {faq.answer}
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}