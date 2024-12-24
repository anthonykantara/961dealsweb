import { Place, Category, City } from './types'

export const categories: Category[] = [
  { 
    id: 'restaurants',
    name: 'Restaurants',
    icon: '🍽️',
    slug: 'restaurants',
    description: 'From fine dining to casual spots',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070&h=1200'
  },
  { 
    id: 'clubs',
    name: 'Clubs',
    icon: '🎉',
    slug: 'clubs',
    description: 'Best nightlife spots and bars',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80&w=2070&h=1200'
  },
  { 
    id: 'hotels',
    name: 'Hotels & Stays',
    icon: '🏨',
    slug: 'hotels',
    description: 'Luxurious stays and getaways',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070&h=1200'
  },
  { 
    id: 'beauty',
    name: 'Beauty & Wellness',
    icon: '💆‍♀️',
    slug: 'beauty',
    description: 'Spas, salons and wellness centers',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=2070&h=1200'
  },
  { 
    id: 'activities',
    name: 'Activities',
    icon: '🎯',
    slug: 'activities',
    description: 'Fun experiences and adventures',
    image: 'https://images.unsplash.com/photo-1526485856375-9110812fbf35?auto=format&fit=crop&q=80&w=2070&h=1200'
  },
  { 
    id: 'shops',
    name: 'Shops',
    icon: '🛍️',
    slug: 'shops',
    description: 'Retail therapy and shopping deals',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070&h=1200'
  },
  { 
    id: 'services',
    name: 'Services',
    icon: '🔧',
    slug: 'services',
    description: 'Professional services and more',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2070&h=1200'
  }
]

export const cities: City[] = [
  { id: 'beirut', name: 'Beirut', slug: 'beirut', country: 'lebanon' },
  { id: 'tripoli', name: 'Tripoli', slug: 'tripoli', country: 'lebanon' },
  { id: 'jounieh', name: 'Jounieh', slug: 'jounieh', country: 'lebanon' }
]

export const dummyPlaces: Place[] = [
  {
    id: 'beit-kanz',
    name: 'Beit Kanz',
    slug: 'beit-kanz',
    category: 'restaurants',
    city: 'beirut',
    country: 'lebanon',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070&h=1200',
    rating: 4.8,
    reviewCount: 342,
    priceRange: '$$',
    tags: ['Lebanese', 'Traditional', 'Outdoor Seating'],
    deals: [
      { type: '2for1', label: '2-for-1 Main Course' },
      { type: 'free', label: 'Free Dessert' }
    ]
  },
  {
    id: 'amar',
    name: 'Amar',
    slug: 'amar',
    category: 'restaurants',
    city: 'beirut',
    country: 'lebanon',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=2070&h=1200',
    rating: 4.9,
    reviewCount: 567,
    priceRange: '$$$',
    tags: ['Lebanese', 'Fine Dining', 'Sea View'],
    deals: [
      { type: 'discount', label: '20% Off' }
    ]
  },
  {
    id: 'liza',
    name: 'Liza',
    slug: 'liza',
    category: 'restaurants',
    city: 'beirut',
    country: 'lebanon',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070&h=1200',
    rating: 4.7,
    reviewCount: 289,
    priceRange: '$$$',
    tags: ['Lebanese', 'Fine Dining', 'Historic Building'],
    deals: [
      { type: 'discount', label: '25% Off Lunch' }
    ]
  }
]