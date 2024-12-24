'use client'

import { useEffect, useRef, useState } from "react"
import { PhoneFrame } from "./phone-frame"

export function PreviewPhone() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const phoneWidth = 393 // Original phone width
        const targetWidth = Math.min(containerWidth, 290) // Increased max width to 290px
        const newScale = targetWidth / phoneWidth
        setScale(newScale)
      }
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  return (
    <div ref={containerRef} className="w-full relative">
      <h3 className="font-black text-[24px] md:text-[32px] text-center leading-[1.5] mb-2">
        This could be <span className="relative">your place<div className="absolute bottom-0 left-0 right-0 h-[5px] bg-[#FF0000]"></div></span> on 961 Deals
      </h3>

      <div 
        className="relative origin-top mt-6 ml-[50%] max-w-[384px] mx-auto" 
        style={{ 
          transform: `scale(${scale}) translateX(-50%)`,
          width: 290,
          height: 560,
          marginBottom: -(494 * (1 - scale)),
          transformOrigin: 'top left'
        }}
      >
        <PhoneFrame>
          <div className="relative">
            <div className="bg-white w-full h-[474px]" />
          </div>
        </PhoneFrame>
      </div>
    </div>
  )
}