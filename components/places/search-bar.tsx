'use client'

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function SearchBar() {
  const [focused, setFocused] = useState(false)

  return (
    <div className={cn(
      "relative w-full max-w-xl mx-auto transition-all duration-300",
      focused ? "scale-105" : "scale-100"
    )}>
      <div className="relative">
        <Input
          type="text"
          placeholder="Search for a place"
          className="w-full pl-12 pr-28 h-14 text-lg rounded-full border-2 border-gray-200 focus:border-gray-900 shadow-lg focus:shadow-gray-200/20"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  )
}