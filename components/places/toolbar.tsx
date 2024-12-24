'use client'

import { SearchBar } from "./search-bar"
import { SortMenu } from "./sort-menu"
import { Filters } from "./filters"

export function Toolbar() {
  return (
    <div className="space-y-6">
      <SearchBar />
      <div className="flex items-center justify-between">
        <Filters />
        <SortMenu />
      </div>
    </div>
  )
}