'use client'

import { MapPin } from "lucide-react"

export function EmptyState() {
  return (
    <div className="text-center py-12">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
        <MapPin className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-semibold mb-2">No places found</h3>
      <p className="text-gray-600">
        Try adjusting your search or filters to find what you're looking for.
      </p>
    </div>
  )
}