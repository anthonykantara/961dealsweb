'use client'

import { CategoryCard } from "./category-card"
import type { Category } from "@/lib/places/types"

interface CategoriesGridProps {
  categories: Category[]
  country: string
  lang: string
}

export function CategoriesGrid({ categories, country, lang }: CategoriesGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          country={country}
          lang={lang}
        />
      ))}
    </div>
  )
}