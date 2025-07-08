import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/Brand_Logo.png" // Replace with your actual image filename
                alt="sVIOS Technologies"
                width={300} // Increased width for larger image
                height={60} // Increased height for larger image
                className="h-16 w-auto max-w-[200px]" // Larger height with max-width constraint
                priority
              />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 font-medium">
              Home
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-purple-600 font-medium">
              Courses
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 font-medium">
              Contact
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-purple-600 font-medium">
              Login
            </Link>
          </nav>

          <Button variant="ghost" size="icon" className="rounded-full bg-purple-100">
            <HelpCircle className="w-5 h-5 text-purple-600" />
          </Button>
        </div>
      </div>
    </header>
  )
}