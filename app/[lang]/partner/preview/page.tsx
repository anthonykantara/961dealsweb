import { PreviewForm } from "@/components/partner-preview/preview-form"
import { PreviewPhone } from "@/components/partner-preview/preview-phone"
import { GoogleMap } from "@/components/partner-preview/google-map"
import { CurvedArrow } from "@/components/partner-preview/curved-arrow"

export default function PartnerPreviewPage() {
  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col items-center justify-start p-8 pt-16">
        {/* Left Column - Preview */}
        <div className="flex flex-col items-center max-w-[500px] relative">
          <CurvedArrow />
          <PreviewPhone />
          <div className="w-full max-w-md mt-12 mb-8">
            <div className="h-px bg-gray-200 w-full" />
          </div>
          <div className="w-full max-w-md">
          <h4 className="font-black text-[24px] text-center mt-8">
            Popular Places already on 961 Deals
          </h4>
          <div className="flex flex-row justify-between mt-6 w-full">
            <div className="flex flex-col gap-2.5 items-center max-w-[120px]">
              <img
                alt="Beit Kanz"
                loading="lazy"
                width="124"
                height="124"
                decoding="async"
                className="w-[124px] h-[124px] rounded-[20px] object-cover"
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=216&h=216"
              />
              <h5 className="font-bold text-[15px] text-center px-2 max-w-full line-clamp-2 text-ellipsis">
                Beit Kanz
              </h5>
            </div>
            <div className="flex flex-col gap-2.5 items-center max-w-[120px]">
              <img
                alt="Amar"
                loading="lazy"
                width="124"
                height="124"
                decoding="async"
                className="w-[124px] h-[124px] rounded-[20px] object-cover"
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=216&h=216"
              />
              <h5 className="font-bold text-[15px] text-center px-2 max-w-full line-clamp-2 text-ellipsis">
                Amar
              </h5>
            </div>
            <div className="flex flex-col gap-2.5 items-center max-w-[120px]">
              <img
                alt="BeBabel"
                loading="lazy"
                width="124"
                height="124"
                decoding="async"
                className="w-[124px] h-[124px] rounded-[20px] object-cover"
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=216&h=216"
              />
              <h5 className="font-bold text-[15px] text-center px-2 max-w-full line-clamp-2 text-ellipsis">
                BeBabel
              </h5>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Right Column - Map & Form */}
      <div className="flex-1 p-8 bg-red-50/50">
        <div className="mb-8">
          <div className="w-full h-[150px] bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 font-medium">Map Preview</p>
          </div>
        </div>
        <div className="max-w-md mx-auto">
          <h2 className="text-5xl font-black text-center mb-2">Beit Kanz</h2>
          <p className="text-gray-400 font-medium text-center mb-6">Sursuck Street, Achrafieh, Beirut</p>
          <PreviewForm />
        </div>
      </div>
    </div>
  )
}