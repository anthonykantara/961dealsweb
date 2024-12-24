'use client'

import { CheckCircle2 } from "lucide-react"

export function EnrollmentSuccess() {
  return (
    <div className="bg-white rounded-2xl p-10 shadow-lg max-w-[500px] mx-auto text-center">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-[#FF0000]" />
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4">
        We're reviewing your application
      </h3>
      
      <p className="text-gray-500 mb-6">
        Meanwhile, use the link we sent to add your business details and deals to help speed up the process.
      </p>
      
      <div className="p-4 bg-red-50 rounded-lg">
        <p className="text-sm text-[#FF0000] font-medium">
          Check your email for next steps
        </p>
      </div>
    </div>
  )
}