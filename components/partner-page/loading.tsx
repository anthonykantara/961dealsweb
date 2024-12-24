export function PartnerPageLoading() {
  return (
    <div className="relative isolate min-h-screen pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="h-16 bg-gray-200 rounded-lg animate-pulse mb-6" />
          <div className="h-24 bg-gray-200 rounded-lg animate-pulse" />
        </div>
        
        <div className="mx-auto mt-24 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-200 rounded-2xl h-64 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}