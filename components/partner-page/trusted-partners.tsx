'use client'

import { OptimizedImage as Image } from "@/components/optimized-image"
import { motion } from "framer-motion"
import type { PartnerLogo } from "./types"

const partnerLogos: PartnerLogo[] = [
  {
    src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=200&h=100",
    alt: "Restaurant partner logo"
  },
  {
    src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=200&h=100",
    alt: "Café partner logo"
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=200&h=100",
    alt: "Fine dining partner logo"
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=200&h=100",
    alt: "Bistro partner logo"
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=200&h=100",
    alt: "Restaurant chain partner logo"
  }
]

export function TrustedPartners() {
  return (
    <div className="relative w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-gradient-to-br from-gray-900 to-black py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-12 items-center backdrop-blur-lg">
          {partnerLogos.map((logo, i) => (
            <div
              key={i}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={100}
                className="h-12 object-contain brightness-0 invert opacity-40 hover:opacity-80 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}