'use client'

import { useState } from "react"
import { Search, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { PartnerEnrollmentForm } from "./enrollment-form"
import Link from "next/link"

export function SearchBar() {
  const [focused, setFocused] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchValue.trim()) {
      setShowForm(true)
    }
  }

  return (
    <>
      <form 
        onSubmit={handleSubmit}
        className={cn(
          "relative w-full max-w-xl mx-auto transition-all duration-300 mb-2",
          focused ? "scale-105" : "scale-100"
        )}
      >
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Search for your place"
            className="w-full pl-12 pr-28 h-14 text-lg rounded-full border-2 border-gray-200 focus:border-primary shadow-lg focus:shadow-primary/20"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <Button 
              type="submit"
              size="sm"
              className="rounded-full px-4 bg-primary hover:bg-primary/90"
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
        
        {focused && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 p-2">
            <p className="text-sm text-gray-500 px-3 py-2">
              Start typing to search for your business
            </p>
          </div>
        )}
      </form>
      <Link 
        href="/partner/preview" 
        className="block text-center mt-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
      >
        Preview how your place will look on 961
      </Link>

      <PartnerEnrollmentForm 
        open={showForm} 
        onOpenChange={setShowForm}
      />
    </>
  )
}