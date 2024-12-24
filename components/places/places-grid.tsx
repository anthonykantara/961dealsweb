'use client'

import { PlaceCard } from "./place-card"
import type { Place } from "@/lib/places/types"

interface PlacesGridProps {
  places: Place[]
}

export function PlacesGrid({ places }: PlacesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  )
}