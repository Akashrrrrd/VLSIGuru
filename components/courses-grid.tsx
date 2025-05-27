import { CourseCard } from "@/components/course-card"

const courses = [
  {
    id: 1,
    title: "Design Verification",
    image: "/course1.png",
    category: "Verification",
    price: 199,
    rating: 4.8,
    students: 1250,
  },
  {
    id: 2,
    title: "Design For Testability",
    image: "/course2.png",
    category: "VLSI Design",
    price: 249,
    rating: 4.9,
    students: 980,
  },
  {
    id: 3,
    title: "Physical Design",
    image: "/course3.png",
    category: "Physical Design",
    price: 299,
    rating: 4.7,
    students: 756,
  },
  {
    id: 4,
    title: "FPGA Based System Design",
    image: "/course4.png",
    category: "FPGA",
    price: 250,
    rating: 4.8,
    students: 1100,
    discount: 10,
  },
  {
    id: 5,
    title: "Gate Level Simulation",
    image: "/course5.png",
    category: "VLSI Design",
    price: 199,
    rating: 4.6,
    students: 890,
  },
  {
    id: 6,
    title: "IP Verification (APB, AHB, AXI)",
    image: "/course6.png",
    category: "Verification",
    price: 349,
    rating: 4.9,
    students: 654,
  },
  {
    id: 7,
    title: "On-Chip AMBA BUS AHB2AXI Bridge Verification",
    image: "/course7.png",
    category: "Verification",
    price: 279,
    rating: 4.7,
    students: 723,
  },
  {
    id: 8,
    title: "On-Chip AMBA BUS AXI2AHB Bridge Verification",
    image: "/course8.png",
    category: "Verification",
    price: 229,
    rating: 4.5,
    students: 567,
  },
  {
    id: 9,
    title: "On-Chip AMBA BUS AHB2APB Bridge Verification",
    image: "/course9.png",
    category: "Verification",
    price: 299,
    rating: 4.8,
    students: 445,
  },
  {
    id: 10,
    title: "On-Chip AMBA BUS AHB-LITE DECODER Bridge Verification",
    image: "/course10.png",
    category: "Verification",
    price: 259,
    rating: 4.6,
    students: 389,
  },
  {
    id: 11,
    title: "On-Chip AMBA BUS AHB-LITE2AHB CONVERTOR Bridge Verification",
    image: "/course11.png",
    category: "Verification",
    price: 319,
    rating: 4.9,
    students: 234,
  },
  {
    id: 12,
    title: "Embedded and IoT",
    image: "/course12.png",
    category: "Embedded Systems",
    price: 289,
    rating: 4.7,
    students: 456,
  },
]

export function CoursesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Courses</h2>
          <p className="text-lg text-gray-600">Comprehensive VLSI courses designed by industry experts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
