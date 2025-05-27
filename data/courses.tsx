export interface Course {
  id: number
  title: string
  description: string
  category: string
  price: number
  rating: number
  students: number
  discount?: number
  trainer: {
    name: string
    title: string
    experience: string
    education: string
    specialization: string
    bio: string
  }
  duration: string
  weeks: number
  image: string
  overview: {
    title: string
    content: string[]
  }
  syllabus: {
    title: string
    content: string[]
  }[]
  schedule: {
    course: string
    duration: string
    toolsAccess: string
    fee: number
    modeOfTraining: string
    weeklyBreakdown: string
  }
  faqs: {
    question: string
    answer: string
  }[]
  material: string
  certificate: {
    description: string
    features: string[]
  }
  videos: {
    id: number
    title: string
    duration: string
    description: string
    url: string
    isFree: boolean
  }[]
}

const courses: Course[] = [
  {
    id: 1,
    title: "Example Course",
    description: "Example Description",
    category: "Example Category",
    price: 99,
    rating: 5,
    students: 100,
    trainer: {
      name: "Example Trainer",
      title: "Example Title",
      experience: "Example Experience",
      education: "Example Education",
      specialization: "Example Specialization",
      bio: "Example Bio",
    },
    duration: "Example Duration",
    weeks: 10,
    image: "/placeholder.svg",
    overview: {
      title: "Example Overview",
      content: ["Example Content"],
    },
    syllabus: [{ title: "Example Syllabus", content: ["Example Content"] }],
    schedule: {
      course: "Example Course",
      duration: "Example Duration",
      toolsAccess: "Example Tools",
      fee: 99,
      modeOfTraining: "Example Mode",
      weeklyBreakdown: "Example Breakdown",
    },
    faqs: [{ question: "Example Question", answer: "Example Answer" }],
    material: "Example Material",
    certificate: {
      description: "Example Description",
      features: ["Example Feature"],
    },
    videos: [
      {
        id: 1,
        title: "Example Video",
        duration: "10:00",
        description: "Example Description",
        url: "/placeholder.mp4",
        isFree: true,
      },
    ],
  },
]

export function getCourseById(id: number): Course | undefined {
  return courses.find((course) => course.id === id)
}

export function getAllCourses(): Course[] {
  return courses
}
