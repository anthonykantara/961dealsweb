import { Suspense } from "react"
import { FAQContent } from "@/components/faq/content"
import { FAQLoading } from "@/components/faq/loading"

export default function FAQPage() {
  return (
    <Suspense fallback={<FAQLoading />}>
      <FAQContent />
    </Suspense>
  )
}