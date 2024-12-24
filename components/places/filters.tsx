'use client'

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function Filters() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Switch id="open-now" />
        <Label htmlFor="open-now">Open now</Label>
      </div>
      <Button variant="outline" size="sm" className="rounded-full">
        More filters
      </Button>
    </div>
  )
}