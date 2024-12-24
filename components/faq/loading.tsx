export function FAQLoading() {
  return (
    <div className="relative isolate min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="h-12 bg-gray-200 rounded-lg animate-pulse mb-4 max-w-xl mx-auto" />
          <div className="h-6 bg-gray-200 rounded-lg animate-pulse max-w-md mx-auto" />
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="flex gap-2 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-10 w-24 bg-gray-200 rounded-full animate-pulse" />
            ))}
          </div>

          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-20 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}