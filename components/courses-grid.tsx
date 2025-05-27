import { CourseCard } from "@/components/course-card"

const courses = [
  {
    id: 1,
    title: "Gate Level Simulation",
    image: "/placeholder.svg?height=200&width=300",
    category: "VLSI Design",
    price: 199,
    rating: 4.8,
    students: 1250,
  },
  {
    id: 2,
    title: "IP Verification (APB, AHB, AXI)",
    image: "/placeholder.svg?height=200&width=300",
    category: "Verification",
    price: 249,
    rating: 4.9,
    students: 980,
  },
  {
    id: 3,
    title: "On-Chip AMBA BUS AHB2AXI Bridge Verification",
    image: "/placeholder.svg?height=200&width=300",
    category: "Verification",
    price: 299,
    rating: 4.7,
    students: 756,
  },
  {
    id: 4,
    title: "Design Verification",
    image: "/placeholder.svg?height=200&width=300",
    category: "VLSI Design",
    price: 250,
    rating: 4.8,
    students: 1100,
    discount: 10,
  },
  {
    id: 5,
    title: "SystemVerilog for Verification",
    image: "/placeholder.svg?height=200&width=300",
    category: "Programming",
    price: 199,
    rating: 4.6,
    students: 890,
  },
  {
    id: 6,
    title: "UVM Methodology",
    image: "/placeholder.svg?height=200&width=300",
    category: "Verification",
    price: 349,
    rating: 4.9,
    students: 654,
  },
  {
    id: 7,
    title: "ASIC Design Flow",
    image: "/placeholder.svg?height=200&width=300",
    category: "VLSI Design",
    price: 279,
    rating: 4.7,
    students: 723,
  },
  {
    id: 8,
    title: "Embedded and IoT",
    image: "/placeholder.svg?height=200&width=300",
    category: "Embedded Systems",
    price: 229,
    rating: 4.5,
    students: 567,
  },
  {
    id: 9,
    title: "FPGA Design and Implementation",
    image: "/placeholder.svg?height=200&width=300",
    category: "FPGA",
    price: 299,
    rating: 4.8,
    students: 445,
  },
  {
    id: 10,
    title: "Digital Signal Processing",
    image: "/placeholder.svg?height=200&width=300",
    category: "Signal Processing",
    price: 259,
    rating: 4.6,
    students: 389,
  },
  {
    id: 11,
    title: "Low Power Design Techniques",
    image: "/placeholder.svg?height=200&width=300",
    category: "VLSI Design",
    price: 319,
    rating: 4.9,
    students: 234,
  },
  {
    id: 12,
    title: "Physical Design and Layout",
    image: "/placeholder.svg?height=200&width=300",
    category: "Physical Design",
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
