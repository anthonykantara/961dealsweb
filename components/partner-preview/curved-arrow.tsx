'use client'

export function CurvedArrow() {
  return (
    <svg
      width="200"
      height="240"
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -right-32 top-32 hidden md:block z-10"
    >
      <path
        d="M20 20C20 20 180 20 180 120C180 220 20 220 20 220"
        stroke="#FF0000"
        strokeWidth="4"
        strokeLinecap="round"
        className="animate-draw"
      />
      <path
        d="M40 200L20 220L0 200"
        stroke="#FF0000"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <style>{`
        @keyframes draw {
          from {
            stroke-dashoffset: 300;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-draw {
          stroke-dasharray: 300;
          animation: draw 2s ease-in-out forwards;
        }
      `}</style>
    </svg>
  )
}