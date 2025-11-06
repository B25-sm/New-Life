'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is Hydrogen Alkaline Water?",
      answer: "Hydrogen alkaline water is water that has been ionized to create antioxidant-rich, alkaline water with molecular hydrogen dissolved in it. This process increases the pH level and reduces the oxidation-reduction potential (ORP), making the water more alkaline and beneficial for your health."
    },
    {
      question: "What is ORP?",
      answer: "ORP stands for Oxidation-Reduction Potential, which measures the antioxidant or oxidant capacity of water. A negative ORP indicates antioxidant properties, meaning the water can neutralize harmful free radicals in your body, while a positive ORP indicates oxidizing properties."
    },
    {
      question: "Why are oxidants like 'free radicals' harmful?",
      answer: "Free radicals are unstable molecules that can cause cellular damage through oxidative stress. They contribute to aging and various health conditions by attacking healthy cells, proteins, and DNA. Antioxidants in hydrogen alkaline water help neutralize these free radicals, protecting your cells from damage."
    },
    {
      question: "What should I expect from drinking alkaline ionized water?",
      answer: "Many users report increased energy, improved hydration, better digestion, enhanced mental clarity, and overall wellness. The antioxidant properties help reduce inflammation and support your body's natural healing processes. Results may vary by individual."
    },
    {
      question: "What is XL Matrix GRID Technology?",
      answer: "XL Matrix GRID Technology is our innovative electrode design that maximizes the surface area for electrolysis, resulting in superior ionization performance. The grid pattern creates more effective water electrolysis, producing higher concentrations of molecular hydrogen and more consistent alkaline pH levels in your drinking water."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-16 bg-white" aria-label="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-teal-400 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-white font-bold text-left hover:bg-teal-500 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-6 h-6 flex-shrink-0" />
                ) : (
                  <Plus className="w-6 h-6 flex-shrink-0" />
                )}
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 py-4 bg-teal-50 border-t border-teal-200">
                  <p className="text-gray-800 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

