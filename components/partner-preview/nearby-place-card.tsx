'use client'

import { OptimizedImage as Image } from "@/components/optimized-image"

interface NearbyPlaceCardProps {
  image: string
  name: string
}

export function NearbyPlaceCard({ image, name }: NearbyPlaceCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <Image
        src={image}
        alt={name}
        width={120}
        height={120}
        className="rounded-xl object-cover w-[120px] h-[120px]"
      />
      <p className="text-sm font-medium">{name}</p>
    </div>
  )
}