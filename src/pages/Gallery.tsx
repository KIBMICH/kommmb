export default function Gallery() {
  const images = Array(12).fill(null);

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold mb-4">Gallery</h1>
          <p className="text-gray-600">See our products in real homes and happy hands</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((_, idx) => (
            <div key={idx} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center hover:shadow-lg transition cursor-pointer">
              <svg className="w-24 h-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
