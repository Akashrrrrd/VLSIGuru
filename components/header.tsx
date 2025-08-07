"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scroll when menu is open
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-white/95' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-32 py-4">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center group focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg"
              aria-label="sVIOS Technologies - Home"
            >
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

          {/* Center Title - Hidden on mobile and small tablets */}
          {/* Removed the center title div */}

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <Link
              href="/"
              className="relative text-gray-700 hover:text-red-600 font-semibold text-base tracking-wide transition-all duration-300 group py-3 px-1 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded"
            >
              Home
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>
            </Link>

            <Link
              href="/courses"
              className="relative text-gray-700 hover:text-red-600 font-semibold text-base tracking-wide transition-all duration-300 group py-3 px-1 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded"
            >
              Courses
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>
            </Link>

            <Link
              href="/faqs"
              className="relative text-gray-700 hover:text-red-600 font-semibold text-base tracking-wide transition-all duration-300 group py-3 px-1 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded"
            >
              FAQs
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>
            </Link>

            <Link
              href="/contact"
              className="relative bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-semibold text-base tracking-wide transition-all duration-300 hover:from-red-600 hover:via-red-700 hover:to-red-800 hover:scale-105 hover:shadow-xl transform border border-red-400/20 hover:border-red-300/30 ml-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Contact Us
              <span className="absolute inset-0 rounded-lg bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative" ref={menuRef}>
            <button
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="text-gray-700 hover:text-red-600 transition-colors duration-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  isMobileMenuOpen ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Mobile Menu Dropdown */}
            <div
              id="mobile-menu"
              className={`absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl z-50 border border-gray-100 transition-all duration-300 transform origin-top-right ${
                isMobileMenuOpen
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
              }`}
            >
              {/* Mobile Menu Header */}
              <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-red-50 to-red-100 rounded-t-xl">
                <h3 className="text-sm font-bold text-gray-800 leading-tight">
                  Gateway to the world of
                  <br />
                  <span className="text-red-600">VLSI and IoT</span>
                </h3>
              </div>
              
              {/* Mobile Menu Items */}
              <div className="py-2">
                <Link
                  href="/"
                  className="flex items-center px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 font-semibold transition-all duration-200 border-l-4 border-transparent hover:border-red-500"
                  onClick={closeMobileMenu}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </Link>
                
                <Link
                  href="/courses"
                  className="flex items-center px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 font-semibold transition-all duration-200 border-l-4 border-transparent hover:border-red-500"
                  onClick={closeMobileMenu}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Courses
                </Link>
                
                <Link
                  href="/faqs"
                  className="flex items-center px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 font-semibold transition-all duration-200 border-l-4 border-transparent hover:border-red-500"
                  onClick={closeMobileMenu}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  FAQs
                </Link>
                
                <Link
                  href="/contact"
                  className="flex items-center mx-4 my-3 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                  onClick={closeMobileMenu}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}