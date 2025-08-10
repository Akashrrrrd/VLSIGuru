"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-blue-100 py-6 px-4">
      <div className="max-w-6xl mx-auto text-center animate-fadeIn">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 mb-3 leading-tight">
          <span className="text-red-600">sVIOS TECHNOLOGIES</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-black font-semibold mb-6">
          Gateway to the world of VLSI and IoT
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed text-justify sm:text-center">
          sVIOS Technologies leverages its extensive industry understanding and
          digital capabilities to create top-notch end-to-end engineering
          solutions. By integrating several sectors and technologies with the
          contributions offered by various individuals who specialize in their
          areas of expertise, issues can potentially be solved more effectively
          and quickly. We are able to address the most significant and complex
          problems in the automotive, high-tech, healthcare, medical device,
          robotics, and semiconductor sectors because of our multifaceted
          approach. We produce highly trained engineers and assist the global
          electronics industry in accomplishing its growing need for expertise
          in VLSI, robotics, and smart automation.
        </p>
      </div>

      {/* Simple Fade Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
