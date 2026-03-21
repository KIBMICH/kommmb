export default function Sustainability() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-leaf-green to-leaf-green-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Our Environmental Impact
          </h1>
          <p className="text-xl text-white/90">
            Measuring what matters: our commitment to transparency
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Impact Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-leaf-green/10 rounded-xl p-8 text-center">
            <div className="text-5xl font-bold text-leaf-green mb-2">2,500+</div>
            <div className="text-gray-700 font-semibold">Kilograms Recycled</div>
            <p className="text-sm text-gray-600 mt-2">Textile waste diverted from landfills</p>
          </div>
          
          <div className="bg-leaf-green/10 rounded-xl p-8 text-center">
            <div className="text-5xl font-bold text-leaf-green mb-2">100%</div>
            <div className="text-gray-700 font-semibold">Sustainable Materials</div>
            <p className="text-sm text-gray-600 mt-2">Recycled or organic in every product</p>
          </div>
          
          <div className="bg-leaf-green/10 rounded-xl p-8 text-center">
            <div className="text-5xl font-bold text-leaf-green mb-2">85%</div>
            <div className="text-gray-700 font-semibold">Carbon Reduction</div>
            <p className="text-sm text-gray-600 mt-2">Compared to virgin material production</p>
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Our Sustainable Process</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-leaf-green text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Collection</h3>
                <p className="text-gray-700">
                  We partner with local recycling facilities and textile manufacturers to collect post-consumer 
                  and post-industrial waste that would otherwise end up in landfills.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-leaf-green text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sorting & Cleaning</h3>
                <p className="text-gray-700">
                  Materials are carefully sorted by type and color, then cleaned using eco-friendly processes 
                  that minimize water usage and chemical treatments.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-leaf-green text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Transformation</h3>
                <p className="text-gray-700">
                  Our skilled artisans handcraft each product, combining recycled materials with organic 
                  components to create beautiful, durable items.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-leaf-green text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-700">
                  Every product undergoes rigorous testing to ensure it meets our high standards for safety, 
                  durability, and environmental responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Our Commitments</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-leaf-green flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Zero Waste Goal</h3>
                <p className="text-sm text-gray-600">Working towards zero waste in our production facilities by 2027</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-leaf-green flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Fair Labor Practices</h3>
                <p className="text-sm text-gray-600">All artisans receive fair wages and work in safe conditions</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-leaf-green flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Carbon Neutral Shipping</h3>
                <p className="text-sm text-gray-600">We offset 100% of shipping emissions through verified programs</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-leaf-green flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Plastic-Free Packaging</h3>
                <p className="text-sm text-gray-600">All packaging materials are recyclable or compostable</p>
              </div>
            </div>
          </div>
        </div>

        {/* Join Us */}
        <div className="text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Join Our Recycling Program</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Have old textiles or products you no longer need? Send them back to us and receive a discount 
            on your next purchase. Together, we can close the loop.
          </p>
          <button className="bg-leaf-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-leaf-green-dark transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
