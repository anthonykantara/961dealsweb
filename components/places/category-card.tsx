'use client'

import { Card } from "@/components/ui/card"
import { OptimizedImage as Image } from "@/components/optimized-image"
import Link from "next/link"
import type { Category } from "@/lib/places/types"

interface CategoryCardProps {
  category: Category
  country: string
  lang: string
}

export function CategoryCard({ category, country, lang }: CategoryCardProps) {
  return (
    <Link href={`/${lang}/${country}/${category.slug}`}>
      <Card className="group overflow-hidden relative hover:shadow-xl transition-all duration-300">
        <div className="aspect-[3/2] relative">
          <Image
            src={category.image}
            alt={category.name}
            width={600}
            height={400}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/60" />
          <div className="absolute bottom-6 left-6 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-3xl">{category.icon}</span>
              <h3 className="text-2xl font-bold">{category.name}</h3>
            </div>
            <p className="text-base text-white/90">{category.description}</p>
          </div>
        </div>
      </Card>
    </Link>
  )
}