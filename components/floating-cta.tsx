'use client'

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const VISIBLE_PATHS = [
  '/',
  '/faq',
  '/places',
]

export function FloatingCTA() {
  const pathname = usePathname()
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoggedIn] = useState(false)

  // Check if we should show the CTA based on current path
  const shouldShow = VISIBLE_PATHS.includes(pathname)

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 100 && shouldShow && !isLoggedIn) {
        setHasScrolled(true)
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasScrolled, shouldShow, isLoggedIn])

  // Hide CTA if we're not on a visible path or user is logged in
  useEffect(() => {
    if (!shouldShow || isLoggedIn) {
      setIsVisible(false)
    }
  }, [pathname, shouldShow, isLoggedIn])

  if (!shouldShow || isLoggedIn) {
    return null
  }

  return (
    <div className={cn(
      "fixed bottom-6 right-6 z-50 transition-all duration-500 transform",
      isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
    )}>
      <Card className="p-4 bg-white/90 backdrop-blur-lg border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 text-[#FF0000]" />
            <span>Start saving instantly</span>
          </div>
          <Button className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 rounded-full font-bold shadow-[0_8px_30px_rgb(255,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(255,0,0,0.3)] transition-all duration-300">
            Become a member
            <span className="ml-2">→</span>
          </Button>
        </div>
      </Card>
    </div>
  )
}