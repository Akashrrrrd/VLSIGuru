import Link from "next/link";
import { Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Change grid to flex and center all three sections */}
        <div className="flex flex-col md:flex-row justify-center text-center gap-12">
          <div className="md:w-1/3">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <span className="text-xl font-bold">sVIOS TECHNOLOGIES</span>
            </div>
            <p className="text-gray-400">
              Gateway to the world of VLSI and IoT
            </p>
          </div>

          <div className="md:w-1/3">
            <h3 className="font-semibold mb-4">Courses</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Design Verification
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Design for Testability
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Physical Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  FPGA Based Design System
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:w-1/3">
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="faq" className="hover:text-white">
                  FAQs
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
  );
}
