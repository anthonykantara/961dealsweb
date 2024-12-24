export interface Place {
  id: string
  name: string
  slug: string
  category: string
  city: string
  country: string
  image: string
  rating: number
  reviewCount: number
  priceRange: '$' | '$$' | '$$$' | '$$$$'
  tags: string[]
  deals: {
    type: string
    label: string
  }[]
}

export interface Category {
  id: string
  name: string
  icon: string
  slug: string
  description: string
  image: string
}

export interface City {
  id: string
  name: string
  slug: string
  country: string
}