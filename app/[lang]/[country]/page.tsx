import { CategoryFilter } from "@/components/places/category-filter"
import { PlacesGrid } from "@/components/places/places-grid"
import { dummyPlaces, cities, categories } from "@/lib/places/data"
import { languages } from "@/lib/languages"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { CategoriesGrid } from "@/components/places/categories-grid"

export function generateStaticParams() {
  const params = []
  
  // Generate all possible combinations
  for (const lang of Object.keys(languages)) {
    const countries = [...new Set(cities.map(city => city.country))]
    for (const country of countries) {
      params.push({
        lang,
        country,
      })
    }
  }
  
  return params
}

interface CountryPageProps {
  params: {
    lang: string
    country: string
  }
}

export default function CountryPage({ params }: CountryPageProps) {
  const places = dummyPlaces.filter(place => place.country === params.country)
  const countryCities = cities.filter(city => city.country === params.country)

  return (
    <div className="min-h-screen pt-16 pb-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black mb-6 capitalize tracking-tight">
            Exclusive Deals in {params.country}
          </h1>
          <p className="text-lg text-gray-400 mb-8 mx-auto text-center" style={{ width: '80%' }}>
            Discover and save at the best places across {params.country}. From restaurants to activities,
            find exclusive deals just for 961 members.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {countryCities.map((city) => (
              <Button
                key={city.id}
                variant="outline"
                size="lg"
                className="rounded-full"
                asChild
              >
                <Link href={`/${params.lang}/${params.country}/${city.slug}/restaurants`}>
                  <MapPin className="w-4 h-4 mr-2" />
                  {city.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-16">
          <CategoriesGrid
            categories={categories}
            country={params.country}
            lang={params.lang}
          />
        </div>

        {/* Places Grid */}
        <PlacesGrid places={places} />
      </div>
    </div>
  )
}