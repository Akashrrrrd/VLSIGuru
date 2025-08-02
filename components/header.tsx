"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-32 py-4">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/Brand_Logo.png"
                  alt="sVIOS Technologies"
                  width={520}
                  height={140}
                  className="object-contain h-24 w-auto max-w-none transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/"
              className="relative text-gray-700 hover:text-red-600 font-semibold text-base tracking-wide transition-all duration-300 group py-3 px-1"
            >
              Home
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>
            </Link>
            
            <Link 
              href="/courses"
              className="relative text-gray-700 hover:text-red-600 font-semibold text-base tracking-wide transition-all duration-300 group py-3 px-1"
            >
              Courses
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>
            </Link>
            
            <Link 
              href="/faqs"
              className="relative text-gray-700 hover:text-red-600 font-semibold text-base tracking-wide transition-all duration-300 group py-3 px-1"
            >
              FAQs
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>
            </Link>
            
            <Link 
              href="/contact"
              className="relative bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-semibold text-base tracking-wide transition-all duration-300 hover:from-red-600 hover:via-red-700 hover:to-red-800 hover:scale-105 hover:shadow-xl transform border border-red-400/20 hover:border-red-300/30 ml-4"
            >
              Contact Us
              <span className="absolute inset-0 rounded-lg bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="text-gray-700 hover:text-red-600 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-600 font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/courses"
                  className="block px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-600 font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Courses
                </Link>
                <Link
                  href="/faqs"
                  className="block px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-600 font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQs
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-600 font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
