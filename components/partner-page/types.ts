export interface Benefit {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  image: string
}

export interface FAQ {
  category: string
  questions: {
    question: string
    answer: string
  }[]
}

export interface Stat {
  label: string
  value: string
}

export interface PartnerLogo {
  src: string
  alt: string
}