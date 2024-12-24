'use client'

import { Card } from "@/components/ui/card"
import { OptimizedImage as Image } from "@/components/optimized-image"
import { Star } from "lucide-react"
import Link from "next/link"
import type { Place } from "@/lib/places/types"

interface PlaceCardProps {
  place: Place
}

export function PlaceCard({ place }: PlaceCardProps) {
  return (
    <Link href={`/en/${place.country}/${place.city}/${place.category}/${place.slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
        <div className="aspect-[16/9] relative">
          <Image
            src={place.image}
            alt={place.name}
            width={600}
            height={338}
            className="object-cover"
          />
          {place.deals.map((deal, i) => (
            <span
              key={i}
              className="absolute bottom-2 left-2 bg-primary text-white text-sm px-3 py-1 rounded-full"
            >
              {deal.label}
            </span>
          ))}
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold">{place.name}</h3>
            <span className="text-gray-500">{place.priceRange}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-primary stroke-primary" />
              <span>{place.rating}</span>
            </div>
            <span>({place.reviewCount})</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {place.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  )
}