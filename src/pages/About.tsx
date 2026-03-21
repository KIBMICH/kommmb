export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-leaf-green text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            About Kommmb Innovations
          </h1>
          <p className="text-xl text-white/90">
            Transforming waste into wonder, one product at a time
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-heading font-bold mb-6">Our Story</h2>
          <p className="text-gray-700 mb-6">
            Founded with a passion for sustainability and design, Kommmb Innovations was born from a simple idea: 
            beautiful, functional products shouldn't come at the expense of our planet. We saw mountains of textile 
            waste and envisioned a future where every scrap could become something meaningful.
          </p>
          
          <p className="text-gray-700 mb-6">
            Today, we craft premium soft furniture and educational toys from 100% recycled and organic materials. 
            Each piece tells a story of transformation—from discarded textiles to cherished home essentials and 
            beloved children's toys.
          </p>

          <h2 className="text-3xl font-heading font-bold mb-6 mt-12">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            We're on a mission to prove that sustainability and quality go hand in hand. By partnering with local 
            recycling facilities and using innovative manufacturing processes, we create products that are:
          </p>
          
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Made from 100% recycled or organic materials</li>
            <li>Handcrafted with attention to detail</li>
            <li>Safe for families and the environment</li>
            <li>Built to last, reducing the need for replacements</li>
            <li>Designed to inspire conscious living</li>
          </ul>

          <h2 className="text-3xl font-heading font-bold mb-6 mt-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 my-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-leaf-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-leaf-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Sustainability</h3>
              <p className="text-gray-600 text-sm">Every decision we make considers environmental impact</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-leaf-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-leaf-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">Handcrafted excellence in every product we create</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-leaf-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-leaf-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Building a movement of conscious consumers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
