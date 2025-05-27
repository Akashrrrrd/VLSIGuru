import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Course {
  id: number
  title: string
  image: string
  category: string
  price: number
  rating: number
  students: number
  discount?: number
}

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  const discountedPrice = course.discount ? course.price - (course.price * course.discount) / 100 : course.price

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Make the entire card clickable to go to course details */}
      <Link href={`/course/${course.id}`}>
        <div className="relative cursor-pointer">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          {course.discount && (
            <Badge className="absolute top-2 right-2 bg-red-500 text-white">{course.discount}% OFF</Badge>
          )}
        </div>

        <CardContent className="p-4">
          <Badge variant="secondary" className="mb-2">
            {course.category}
          </Badge>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-purple-600 transition-colors">
            {course.title}
          </h3>

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{course.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{course.students}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-3">
            {course.discount && <span className="text-sm text-gray-500 line-through">${course.price}</span>}
            <span className="text-lg font-bold text-purple-600">${discountedPrice}</span>
          </div>
        </CardContent>
      </Link>

      <CardFooter className="flex flex-col gap-2 p-4 pt-0">
        <Link href={`/enroll/${course.id}`} className="w-full">
          <Button className="w-full bg-purple-600 hover:bg-purple-700">ENROLL NOW</Button>
        </Link>
        <Link href={`/watch/${course.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            Watch Preview
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
