'use client'

interface PhoneFrameProps {
  children: React.ReactNode
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="max-w-[255px] min-w-[255px] min-h-[494px] max-h-[494px] absolute top-0 left-0">
      <svg 
        viewBox="0 0 255 494" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 right-0 z-[2]"
      >
        <rect width="255" height="494" rx="26" fill="#1A1A1A"/>
        <rect x="1" y="1" width="253" height="492" rx="25" stroke="white" strokeOpacity="0.1" strokeWidth="2"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M89 16C89 13.7909 90.7909 12 93 12H162C164.209 12 166 13.7909 166 16C166 18.2091 164.209 20 162 20H93C90.7909 20 89 18.2091 89 16Z" fill="black"/>
      </svg>
      <div className="rounded-[20px] max-w-[228px] overflow-hidden relative top-[10px] left-[14px] bg-white">
        {children}
      </div>
    </div>
  )
}