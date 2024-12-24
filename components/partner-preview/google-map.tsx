'use client'

export function GoogleMap() {
  return (
    <div className="w-full h-[150px] rounded-lg overflow-hidden">
      <img 
        src="https://maps.googleapis.com/maps/api/staticmap?center=33.8938,35.5018&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7C33.8938,35.5018&key=YOUR_API_KEY"
        alt="Location map"
        className="w-full h-full object-cover"
      />
    </div>
  )
}