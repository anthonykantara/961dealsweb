import { Suspense } from "react"
import { HubPageContent } from "@/components/hub-page/content"
import { HubPageLoading } from "@/components/hub-page/loading"

export default function HubPartnerPage() {
  return (
    <Suspense fallback={<HubPageLoading />}>
      <HubPageContent />
    </Suspense>
  )
}