'use client'

import { Button } from "@/components/ui/button"

export function RestaurantActions() {
  return (
    <div className="flex justify-between w-full gap-2 mt-4">
      <Button variant="outline" className="w-1/2 rounded-full">Save</Button>
      <Button variant="outline" className="w-1/2 rounded-full">Menu</Button>
    </div>
  )
}