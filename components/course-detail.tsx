"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Clock, ChevronDown, Calendar, HelpCircle, FileText, GraduationCap } from "lucide-react"
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

  // Function to get schedule data from course data
  const getScheduleData = () => {
    // If schedule has stages, use them directly
    if (course.schedule?.stages && course.schedule.stages.length > 0) {
      const scheduleData = course.schedule.stages.map((stage) => ({
        stage: stage.stage,
        description: stage.description,
        duration: stage.duration,
      }))
      return {
        duration: course.schedule.duration,
        data: scheduleData,
        total: course.schedule.duration,
      }
    }

    // For courses with detailed syllabus, create schedule from syllabus
    if (course.syllabus && course.syllabus.length > 0) {
      const scheduleData = []
      let currentStage = 1
      let weekCounter = 1

      // Group weeks into logical stages based on course type
      while (weekCounter <= course.weeks) {
        let stageTitle = ""
        let stageDuration = 0

        // Define stage groupings based on course type
        if (course.title.toLowerCase().includes("design verification")) {
          if (weekCounter <= 2) {
            stageTitle = "Review of Digital Electronics and Logic Design"
            stageDuration = 2
          } else if (weekCounter <= 4) {
            stageTitle = "System Design using Verilog HDL"
            stageDuration = 2
          } else if (weekCounter <= 5) {
            stageTitle = "Essentials of Linux"
            stageDuration = 1
          } else if (weekCounter <= 6) {
            stageTitle = "Scripting"
            stageDuration = 1
          } else if (weekCounter <= 14) {
            stageTitle = "SystemVerilog"
            stageDuration = 8
          } else if (weekCounter <= 20) {
            stageTitle = "Universal Verification Methodology"
            stageDuration = 6
          } else if (weekCounter <= 23) {
            stageTitle = "Working in Live project"
            stageDuration = 3
          } else {
            stageTitle = "Interview / Soft Skills"
            stageDuration = 1
          }
        } else if (course.title.toLowerCase().includes("design for testability")) {
          if (weekCounter <= 2) {
            stageTitle = "Review of Digital Electronics and Logic Design"
            stageDuration = 2
          } else if (weekCounter <= 4) {
            stageTitle = "System Design using Verilog HDL"
            stageDuration = 2
          } else if (weekCounter <= 5) {
            stageTitle = "Essentials of Linux"
            stageDuration = 1
          } else if (weekCounter <= 6) {
            stageTitle = "Scripting"
            stageDuration = 1
          } else if (weekCounter <= 13) {
            stageTitle = "Scan Compression, Scan Insertion"
            stageDuration = 7
          } else if (weekCounter <= 20) {
            stageTitle = "ATPG, Simulation"
            stageDuration = 7
          } else if (weekCounter <= 23) {
            stageTitle = "Working in Live project"
            stageDuration = 3
          } else {
            stageTitle = "Interview / Soft Skills"
            stageDuration = 1
          }
        } else if (course.title.toLowerCase().includes("physical design")) {
          if (weekCounter <= 6) {
            stageTitle = "Digital Logic & Verilog HDL"
            stageDuration = 6
          } else if (weekCounter <= 16) {
            stageTitle = "PNR"
            stageDuration = 10
          } else if (weekCounter <= 20) {
            stageTitle = "STA and Sign-off"
            stageDuration = 4
          } else if (weekCounter <= 23) {
            stageTitle = "Working in Live project"
            stageDuration = 3
          } else {
            stageTitle = "Interview / Soft Skills"
            stageDuration = 1
          }
        } else if (course.title.toLowerCase().includes("fpga")) {
          if (weekCounter <= 4) {
            stageTitle = "Foundation and HDL"
            stageDuration = 4
          } else if (weekCounter <= 9) {
            stageTitle = "FPGA Architecture & Implementation"
            stageDuration = 5
          } else if (weekCounter <= 11) {
            stageTitle = "Real-Time Projects"
            stageDuration = 2
          } else {
            stageTitle = "Interview / Soft Skills"
            stageDuration = 1
          }
        } else {
          // Default grouping for other courses
          const remainingWeeks = course.weeks - weekCounter + 1
          if (remainingWeeks > 8) {
            stageTitle = "Foundation and Core Concepts"
            stageDuration = Math.min(8, remainingWeeks)
          } else if (remainingWeeks > 4) {
            stageTitle = "Advanced Topics and Implementation"
            stageDuration = Math.min(4, remainingWeeks)
          } else {
            stageTitle = "Project Work and Assessment"
            stageDuration = remainingWeeks
          }
        }

        scheduleData.push({
          stage: `${currentStage}`,
          description: stageTitle,
          duration: `${stageDuration} Week${stageDuration > 1 ? "s" : ""}`,
        })

        weekCounter += stageDuration
        currentStage++
      }

      return {
        duration: course.duration,
        data: scheduleData,
        total: `${course.weeks} Weeks`,
      }
    }

    // Fallback for courses without detailed syllabus
    return {
      duration: course.duration,
      data: [
        { stage: "I", description: "Foundation and Basics", duration: "4 Weeks" },
        { stage: "II", description: "Core Concepts and Theory", duration: "6 Weeks" },
        { stage: "III", description: "Practical Implementation", duration: "4 Weeks" },
        { stage: "IV", description: "Project Work and Assessment", duration: "2 Weeks" },
      ],
      total: `${course.weeks} Weeks`,
    }
  }

  const scheduleInfo = getScheduleData()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Course Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <Badge className="mb-4">{course.category}</Badge>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">{course.description}</p>

          {/* Course Duration */}
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-5 h-5 text-green-500" />
            <span className="font-semibold text-sm sm:text-base">Duration: {course.duration}</span>
          </div>
        </div>
        <div className="relative">
          <Image
            src={course.image || "/placeholder.svg?height=400&width=600"}
            alt={course.title}
            width={600}
            height={400}
            className="w-full max-h-64 sm:max-h-80 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Enrollment */}
  <CardContent className="p-2 mb-4">
    <div className="flex justify-end">
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSfCgEnbswX5k-KNOW43rvgYlNxxHHZa5AKK4SYAtWV959o1bg/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="lg" className="bg-red-600 hover:bg-red-700 gap-2">
          <GraduationCap className="w-4 h-4" />
          Enroll Now
        </Button>
      </Link>
    </div>
  </CardContent>



      {/* Course Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-white border rounded-lg p-1">
          <TabsTrigger value="syllabus" className="data-[state=active]:bg-red-600 data-[state=active]:text-white gap-2">
            <FileText className="w-4 h-4" />
            Syllabus
          </TabsTrigger>
          <TabsTrigger value="schedule" className="data-[state=active]:bg-red-600 data-[state=active]:text-white gap-2">
            <Calendar className="w-4 h-4" />
            Schedule
          </TabsTrigger>
          <TabsTrigger value="faqs" className="data-[state=active]:bg-red-600 data-[state=active]:text-white gap-2">
            <HelpCircle className="w-4 h-4" />
            FAQs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="syllabus" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-red-600">📚 Course Syllabus</h3>
              <p className="text-gray-600 mb-6">
                This {course.weeks}-week comprehensive course is structured to take you from fundamentals to advanced
                concepts.
              </p>
              <div className="space-y-4">
                {course.syllabus?.map((week, index) => (
                  <Collapsible key={index}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gradient-to-r from-red-50 to-blue-50 rounded-lg hover:from-red-100 hover:to-blue-100 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {week.week}
                        </div>
                        <span className="font-semibold text-left">{week.title}</span>
                      </div>
                      <ChevronDown className="w-5 h-5 text-red-600" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 border border-t-0 rounded-b-lg bg-white">
                      <ul className="space-y-2">
                        {week.topics?.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
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
              <h3 className="text-2xl font-bold mb-4 text-red-600">Schedule</h3>
              <p className="text-lg font-semibold mb-6">Course Duration: {scheduleInfo.duration}</p>

              {/* Schedule Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-red-600 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Stage</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Description</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduleInfo.data.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-red-50" : "bg-white"}>
                        <td className="border border-gray-300 px-4 py-3 font-medium text-center">{item.stage}</td>
                        <td className="border border-gray-300 px-4 py-3">
                          {typeof item.description === "string" ? item.description : item.description}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-center">{item.duration}</td>
                      </tr>
                    ))}
                    <tr className="bg-red-100 font-semibold">
                      <td className="border border-gray-300 px-4 py-3 text-center">Total</td>
                      <td className="border border-gray-300 px-4 py-3"></td>
                      <td className="border border-gray-300 px-4 py-3 text-center">{scheduleInfo.total}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Notes - Show for specific courses */}
              {(course.title.toLowerCase().includes("design verification") ||
                course.title.toLowerCase().includes("design for testability") ||
                course.category.toLowerCase().includes("design verification")) && (
                <div className="mt-6 space-y-3">
                  <p className="text-red-600 font-semibold">
                    <span className="font-bold">Note1:</span> Weekly assignments and Module Assessments will be
                    conducted.
                  </p>
                  <p className="text-red-600 font-semibold">
                    <span className="font-bold">Note2:</span> Assessments will be in the form of written test /
                    Presentation / MCQ / Coding.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faqs" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-red-600">❓ Frequently Asked Questions</h3>
              <div className="space-y-4">
                {course.faqs?.map((faq, index) => (
                  <Collapsible key={index}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-semibold text-left">Q: {faq.question}</span>
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 border border-t-0 rounded-b-lg bg-white">
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold text-red-600">A:</span> {faq.answer}
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
