'use client'

import { Star } from "lucide-react"

export function RestaurantHeader() {
  return (
    <>
      <h1 className="text-[27px] font-extrabold w-full mb-1">Harrods</h1>
      <p className="text-black/60 mb-4">Sursuck Street, Achrafieh, Beirut</p>
      <div className="flex gap-x-3 items-center">
        <div className="flex items-start gap-x-2">
          <div className="flex flex-row items-center gap-x-1">
            <span className="relative font-medium text-[12px] text-black/60">4.9</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-[#FF0000] stroke-none" />
              ))}
            </div>
          </div>
          <div className="font-medium text-[12px] text-black/60">
            1027 Reviews
          </div>
        </div>
      </div>
    </>
  )
}