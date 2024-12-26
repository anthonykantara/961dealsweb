import { CategoryFilter } from "@/components/places/category-filter"
import { PlacesGrid } from "@/components/places/places-grid"
import { Toolbar } from "@/components/places/toolbar"
import { dummyPlaces, categories, cities } from "@/lib/places/data"
import { languages } from "@/lib/languages"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  const params = []
  
  // Generate all possible combinations
  for (const lang of Object.keys(languages)) {
    const countries = [...new Set(cities.map(city => city.country))]
    for (const country of countries) {
      for (const category of categories) {
        params.push({
          lang,
          country,
          category: category.slug,
        })
      }
    }
  }
  
  return params
}

interface CategoryPageProps {
  params: {
    lang: string
    country: string
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find(c => c.slug === params.category)
  if (!category) {
    notFound()
  }

  const places = dummyPlaces.filter(
    place => place.country === params.country && place.category === params.category
  )

  return (
    <div className="min-h-screen pt-12 pb-16">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-black mb-4 capitalize tracking-tight">
            {category.name} in {params.country.charAt(0).toUpperCase() + params.country.slice(1)}
          </h1>
          <p className="text-base text-gray-500 mx-auto max-w-[80%]">
            {params.category === 'restaurants' 
              ? `From authentic Mediterranean dishes to trendy cafés and bustling burger joints, ${
                  params.country.charAt(0).toUpperCase() + params.country.slice(1)
                } offers a rich gastronomic journey. With 961 Deals, enjoy exclusive offers like discounts, 2-for-1 deals, free stuff, or exclusive menu items.`
              : `${category.description} in ${params.country.charAt(0).toUpperCase() + params.country.slice(1)}`
            }
          </p>
        </div>

        <div className="mb-8">
          <CategoryFilter />
        </div>
        
        <div className="mb-8">
          <Toolbar />
        </div>

        <PlacesGrid places={places} />
      </div>
    </div>
  )
}