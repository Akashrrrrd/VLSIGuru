import Link from "next/link"
import { Cpu } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">sVIOS TECHNOLOGIES</span>
            </div>
            <p className="text-gray-400">Empowering engineers with cutting-edge VLSI education and training.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Courses</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  VLSI Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Verification
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  FPGA Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Physical Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 sVIOS TECHNOLOGIES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
