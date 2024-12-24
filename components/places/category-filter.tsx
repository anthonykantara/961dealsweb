'use client'

import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { categories } from "@/lib/places/data"
import { useRouter, usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function CategoryFilter() {
  const router = useRouter()
  const pathname = usePathname()
  const pathParts = pathname.split('/')
  const currentCategory = pathParts[pathParts.length - 1]
  const basePath = pathParts.slice(0, -1).join('/')

  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex w-max space-x-4 p-4">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="ghost"
            size="sm"
            onClick={() => {
              router.push(`${basePath}/${category.slug}`)
            }}
            className={cn(
              "flex items-center gap-2 rounded-full",
              currentCategory === category.slug && "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}