import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          <span className="text-red-600">sVIOS TECHNOLOGIES</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-6xl mx-auto leading-relaxed text-justify">
          sVIOS Technologies leverages its extensive industry understanding and digital capabilities to create top-notch end-to-end engineering solutions. By integrating several sectors and technologies with the contributions offered by various individuals who specialize in their areas of expertise, issues can potentially be solved more effectively and quickly. We are able to address the most significant and complex problems in the automotive, high-tech, healthcare, medical device, robotics, and semiconductor sectors because to our multifaceted approach. We produce highly trained engineers and assists global electronics industry in accomplishing its growing need for expertise in VLSI, robotics, and smart automation.
        </p>
      </div>
    </section>
  );
}
