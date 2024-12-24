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
    for (const city of cities) {
      for (const category of categories) {
        params.push({
          lang,
          country: city.country,
          city: city.slug,
          category: category.slug,
        })
      }
    }
  }
  
  return params
}

interface CityPageProps {
  params: {
    lang: string
    country: string
    city: string
    category: string
  }
}

export default function CityPage({ params }: CityPageProps) {
  const category = categories.find(c => c.slug === params.category)
  const city = cities.find(c => c.slug === params.city)
  
  if (!category || !city) {
    notFound()
  }

  const places = dummyPlaces.filter(
    place => 
      place.country === params.country && 
      place.city === params.city &&
      place.category === params.category
  )

  return (
    <div className="min-h-screen pt-16 pb-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-black mb-4 capitalize tracking-tight">
            {category.name} in {city.name.charAt(0).toUpperCase() + city.name.slice(1)}
          </h1>
          <p className="text-lg text-gray-400 mx-auto" style={{ width: '80%' }}>
            {params.category === 'restaurants'
              ? `From authentic Mediterranean dishes to trendy cafés and bustling burger joints, ${
                  city.name.charAt(0).toUpperCase() + city.name.slice(1)
                } offers a rich gastronomic journey. With 961 Deals, enjoy exclusive offers like discounts, 2-for-1 deals, free stuff, or exclusive menu items.`
              : `${category.description} in ${city.name.charAt(0).toUpperCase() + city.name.slice(1)}`
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