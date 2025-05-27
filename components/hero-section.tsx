import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Master VLSI Design with{" "}
          <span className="text-purple-600">Affordable Learning</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Explore a wide range of VLSI-focused courses crafted to empower
          engineers and enthusiasts. Join us to enhance your skills in
          cutting-edge semiconductor technologies.
        </p>
        {/* <Link href="/courses">
          <Button className="text-lg px-6 py-3">
            Book Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link> */}
      </div>
    </section>
  );
}
