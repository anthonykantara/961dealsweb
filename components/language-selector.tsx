'use client'

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { languages, type Language } from "@/lib/languages"

export function LanguageSelector() {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const getCurrentLanguage = (): Language => {
    const path = pathname.split('/')
    const langCode = path[1]
    return (langCode in languages) ? langCode as Language : 'en'
  }

  const handleLanguageChange = (lang: Language) => {
    const path = pathname.split('/')
    // Remove current language code if it exists and add new one
    path[1] = path[1] in languages ? lang : `${lang}${path[1] ? `/${path[1]}` : ''}`
    router.push(`/${path.filter(Boolean).join('/')}`)
    setIsOpen(false)
  }

  const currentLang = getCurrentLanguage()

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="flex items-center gap-1 text-sm hover:text-gray-300 transition-colors">
        <Globe className="h-3 w-3" />
        <span>{languages[currentLang].code.toUpperCase()}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        {Object.entries(languages).map(([code, lang]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLanguageChange(code as Language)}
            className="cursor-pointer"
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}