import { Metadata } from "next"
import { FAQSection } from "@/components/faq-section"

export const metadata: Metadata = {
  title: "FAQs - SVIOS Technologies",
  description: "Find answers to frequently asked questions about VLSI training, courses, and career opportunities at SVIOS Technologies.",
  keywords: "VLSI training, semiconductor courses, VLSI career, SVIOS FAQs, chip design training",
}

export default function FAQsPage() {
  return (
    <main className="min-h-screen">
      <FAQSection />
    </main>
  )
}
