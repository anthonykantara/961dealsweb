'use client'

import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { FAQ } from "./types"

function renderAnswer(answer: string) {
  // Split content by newlines to handle multiple paragraphs
  const parts = answer.split('\n\n')
  
  return parts.map((part, index) => {
    if (part.startsWith('[Learn more about') || part.startsWith('[Click here')) {
      const href = part.match(/\((.*?)\)/)?.[1] || ''
      return (
        <Button
          key={index}
          className="mt-4 rounded-full"
          asChild
        >
          <Link href={href}>Click here</Link>
        </Button>
      )
    }
    return <p key={index}>{part}</p>
  })
}

interface FAQSectionProps {
  title?: string
  description?: string
  faqs: FAQ[]
}

export function FAQSection({ title, description, faqs }: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState(faqs[0].category)
  const activeFAQ = faqs.find(faq => faq.category === activeCategory)

  return (
    <div className="mx-auto max-w-6xl relative isolate">
      {(title || description) && (
        <div className="text-center mb-16">
          {title && (
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-4">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-lg text-gray-600">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
        {/* Categories */}
        <div className="md:border-r border-gray-200 pr-8">
          <div className="sticky top-24">
            <div className="space-y-1">
              {faqs.map((section) => (
                <button
                  key={section.category}
                  onClick={() => setActiveCategory(section.category)}
                  className={cn(
                    "w-full text-left px-4 py-2 text-lg font-extrabold transition-colors",
                    activeCategory === section.category 
                      ? "text-gray-900 decoration-primary decoration-2 underline underline-offset-4"
                      : "text-gray-400 hover:text-gray-600"
                  )}
                >
                  {section.category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Questions */}
        <div>
          {activeFAQ && (
            <Accordion type="single" collapsible className="space-y-4">
              {activeFAQ.questions.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`${activeFAQ.category}-${index}`}
                  className="bg-white rounded-lg border border-gray-200 px-6 [&_[data-state=open]]:text-primary"
                >
                  <AccordionTrigger className="text-lg font-extrabold py-6 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 whitespace-pre-line text-lg">
                    {renderAnswer(item.answer)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </div>
  )
}