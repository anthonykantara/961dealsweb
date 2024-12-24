'use client'

import Link from "next/link"
import { LanguageSelector } from "@/components/language-selector"

export function TopMenu() {
  return (
    <nav className="bg-black text-white h-12 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 flex justify-between">
        <div className="flex gap-6">
          <Link href="/news" className="text-sm hover:text-gray-300 transition-colors">
            News
          </Link>
          <Link href="/deals" className="text-sm hover:text-gray-300 transition-colors">
            Deals
          </Link>
          <Link href="/merch" className="text-sm hover:text-gray-300 transition-colors">
            Merch
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/careers" className="text-sm hover:text-gray-300 transition-colors">
            Careers
          </Link>
          <LanguageSelector />
          <Link href="/login" className="text-sm hover:text-gray-300 transition-colors">
            Log in
          </Link>
        </div>
      </div>
    </nav>
  )
}