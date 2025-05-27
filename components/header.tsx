import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HelpCircle, Cpu } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">sVIOS TECHNOLOGIES</span>
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
