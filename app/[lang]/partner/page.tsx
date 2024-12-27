import { Suspense } from "react"
import { PartnerPageContent } from "@/components/partner-page/content"
import { PartnerPageLoading } from "@/components/partner-page/loading"

export default function PartnerPage() {
  return (
    <Suspense fallback={<PartnerPageLoading />}>
      <PartnerPageContent />
    </Suspense>
  )
}