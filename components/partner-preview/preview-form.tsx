'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { EnrollmentSuccess } from "./enrollment-success"

export function PreviewForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return <EnrollmentSuccess />
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-2xl p-10 shadow-lg max-w-[500px] mx-auto">
      <div>
        <label className="block text-sm text-gray-600 mb-1">Your Name</label>
        <Input 
          placeholder="e.g., Wael Arakji"
          className="bg-white/50 border-gray-200 focus:bg-white transition-colors h-12 text-base"
          required
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Your Email</label>
        <Input 
          type="email"
          placeholder="e.g., wael.arakji@gmail.com"
          className="bg-white/50 border-gray-200 focus:bg-white transition-colors h-12 text-base"
          required
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Your Phone Number</label>
        <Input 
          type="tel"
          placeholder="e.g., +961 71 123456"
          className="bg-white/50 border-gray-200 focus:bg-white transition-colors h-12 text-base"
          required
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Your 961 Username (if registered)</label>
        <Input 
          placeholder="@waelarakji"
          className="bg-white/50 border-gray-200 focus:bg-white transition-colors h-12 text-base"
        />
      </div>

      <Button className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 text-white font-extrabold text-lg rounded-full h-14 shadow-lg hover:shadow-xl transition-all duration-300">
        Enroll Now
      </Button>
    </form>
  )
}