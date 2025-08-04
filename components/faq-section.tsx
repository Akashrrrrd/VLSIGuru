"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What is VLSI and why is it important?",
    answer: "VLSI (Very-Large-Scale Integration) is the process of integrating millions of transistors on a single chip. It's the foundation of modern electronics, powering everything from smartphones to self-driving cars."
  },
  {
    question: "Is the semiconductor industry a good career option?",
    answer: "Yes, the semiconductor industry is experiencing massive growth due to high demand for chips in AI, 5G, IoT, and automotive applications. It offers stable, high-paying careers with global opportunities."
  },
  {
    question: "Why is the VLSI domain booming right now?",
    answer: "With the global demand for electronics, AI, 5G, automotive chips, and IoT devices, there's an ever-increasing need for skilled chip designers and verification engineers. The semiconductor shortage also triggered massive investments in this domain, opening many career opportunities."
  },
  {
    question: "How does VLSI contribute to everyday technology?",
    answer: "VLSI chips are used in mobile phones, laptops, smartwatches, automotive systems, medical equipment, and satellites. From your smartwatch's processor to self-driving cars' AI chips—VLSI is the brain behind them all."
  },
  {
    question: "What skills are required to enter the VLSI domain?",
    answer: "Strong knowledge of digital electronics, CMOS fundamentals, Verilog/SystemVerilog, basic Linux, scripting, and exposure to tools like ModelSim, Synopsys, or Cadence is essential. Training from institutes like SVIOS helps bridge the gap."
  },
  {
    question: "What kind of training does SVIOS provide?",
    answer: "SVIOS offers industry-focused VLSI training programs in domains like: Design Verification, Physical Design, Design For Testability, Gate Level Simulation, Scripting (Python, TCL, Shell), SystemVerilog & UVM methodology."
  },
  {
    question: "Are the courses beginner-friendly?",
    answer: "Yes. Whether you're a fresher, student, or professional switching careers, SVIOS training is designed from fundamentals to advanced topics with hands-on labs and real project work."
  },
  {
    question: "Will I receive a certification after completing the course?",
    answer: "Yes, all candidates after successful completion of course, receive an industry-recognized certificate of completion from SVIOS, which can enhance their resume and job opportunities."
  },
  {
    question: "How does SVIOS help students get placed in core VLSI companies?",
    answer: "SVIOS has a dedicated placement support cell, mock interview sessions, resume building workshops, and strong industry tie-ups to help students land jobs in top semiconductor companies."
  },
  {
    question: "Do you provide internship or project support?",
    answer: "Yes. SVIOS offers internship projects with real-time design and verification tasks, helping students build practical experience and portfolios aligned with industry needs."
  },
  {
    question: "Can I learn remotely or only offline?",
    answer: "SVIOS offers both online live instructor-led training and offline classroom training, giving flexibility to learners across India and abroad."
  },
  {
    question: "What makes SVIOS different from other training institutes?",
    answer: "SVIOS offers industry-aligned VLSI training with: Real project work, Domain experts from semiconductor companies, Flexible online/offline modes, Placement support and technical mentoring."
  },
  {
    question: "How long is each course at SVIOS?",
    answer: "Courses typically span between 3 to 6 months, depending on the domain and depth. Weekend and weekday batches are available."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about VLSI training and our programs
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader 
                className="cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <CardTitle className="flex items-center justify-between text-lg font-semibold text-gray-900">
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-red-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </CardTitle>
              </CardHeader>
              {openIndex === index && (
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
