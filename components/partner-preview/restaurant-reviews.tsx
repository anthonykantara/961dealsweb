'use client'

import { Star } from "lucide-react"

export function RestaurantReviews() {
  return (
    <div className="flex flex-col w-full gap-4 mt-6">
      <div className="flex flex-col w-full pb-10 border-b border-gray-200">
        <h2 className="text-[20px] font-bold mb-3">Reviews</h2>
        <div className="flex gap-x-2 flex-col">
          <div className="flex items-center gap-x-2">
            <span className="text-[32px] font-bold">4.9</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-[#FF0000] stroke-none" />
              ))}
            </div>
          </div>
          <div className="text-[14px]">1027 Reviews, 389 written</div>
        </div>
      </div>
    </div>
  )
}