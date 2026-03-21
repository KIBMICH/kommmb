import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import heroImage from '../assets/hero.png';
import furn5 from '../assets/images/furniture/furn5.jpeg';
import furn6 from '../assets/images/furniture/furn6.jpeg';
import furn7 from '../assets/images/furniture/furn7.jpeg';
import toy4 from '../assets/images/toy/toy4.jpeg';
import toy5 from '../assets/images/toy/toy5.jpeg';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] sm:h-[600px] bg-gray-900">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65"></div>
        
        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <p className="text-white/90 text-xs sm:text-sm mb-4 drop-shadow-lg">WELCOME TO KOMMMB INNOVATIONS</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
                Inspired by Nature,<br />Designed for Life.
              </h1>
              <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 max-w-xl drop-shadow-lg">
                Discover sustainable furniture and toys crafted from recycled materials. 
                Every piece tells a story of environmental responsibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-leaf-green text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-leaf-green-dark transition text-center shadow-lg"
                >
                  Shop Now
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition text-center backdrop-blur-sm"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Collection */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Shop by Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated collections of eco-friendly furniture and educational toys. 
              Each piece is crafted with care for you and the planet.
            </p>
          </div>

          {/* Large Collection Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Link 
              to="/category/soft-furniture"
              className="group relative h-80 rounded-2xl overflow-hidden"
            >
              <img 
                src={furn5}
                alt="Soft Furniture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-heading font-bold text-white mb-2">
                  Soft Furniture
                </h3>
                <p className="text-white/90 mb-4">
                  Comfortable pillows and foot rests made from recycled materials
                </p>
                <span className="text-white font-semibold inline-flex items-center">
                  Explore Collection
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link 
              to="/category/toys-educational"
              className="group relative h-80 rounded-2xl overflow-hidden"
            >
              <img 
                src={toy4}
                alt="Toys & Educational"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-heading font-bold text-white mb-2">
                  Toys & Educational
                </h3>
                <p className="text-white/90 mb-4">
                  Safe, sustainable toys and learning materials for children
                </p>
                <span className="text-white font-semibold inline-flex items-center">
                  Explore Collection
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>

          {/* Small Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link 
              to="/category/soft-furniture/throw-pillows"
              className="group relative h-48 rounded-xl overflow-hidden"
            >
              <img 
                src={furn6}
                alt="Throw Pillows"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h4 className="text-xl font-semibold mb-1">Throw Pillows</h4>
                  <p className="text-sm text-white/90">Decorative comfort</p>
                </div>
              </div>
            </Link>

            <Link 
              to="/category/toys-educational/play-toys"
              className="group relative h-48 rounded-xl overflow-hidden"
            >
              <img 
                src={toy5}
                alt="Play Toys"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h4 className="text-xl font-semibold mb-1">Play Toys</h4>
                  <p className="text-sm text-white/90">Imaginative fun</p>
                </div>
              </div>
            </Link>

            <Link 
              to="/category/soft-furniture/foot-rests"
              className="group relative h-48 rounded-xl overflow-hidden"
            >
              <img 
                src={furn7}
                alt="Foot Rests"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h4 className="text-xl font-semibold mb-1">Foot Rests</h4>
                  <p className="text-sm text-white/90">Ergonomic support</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Innovations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900">
              Featured Innovations
            </h2>
            <Link to="/products" className="text-leaf-green font-semibold hover:underline">
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-leaf-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-leaf-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600 font-medium mb-1">Sustainable</div>
              <p className="text-sm text-gray-500">All materials recycled or organic</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-leaf-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-leaf-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Net Zero</div>
              <div className="text-gray-600 font-medium mb-1">Carbon Neutral</div>
              <p className="text-sm text-gray-500">Offset all shipping emissions</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-leaf-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-leaf-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">$50k</div>
              <div className="text-gray-600 font-medium mb-1">Community Impact</div>
              <p className="text-sm text-gray-500">Donated to environmental causes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-leaf-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-leaf-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Safe</div>
              <div className="text-gray-600 font-medium mb-1">Child-Safe</div>
              <p className="text-sm text-gray-500">Non-toxic, tested materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-leaf-green text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Every Stitch Tells a Sustainable Story
              </h2>
              <p className="text-gray-600 mb-6">
                At Kommmb Innovations, we believe that comfort and sustainability go hand in hand. 
                Every product we create is a testament to our commitment to the environment.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-leaf-green mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">100% recycled fabrics and organic materials</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-leaf-green mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Tree-free, algae-based inks for all prints</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-leaf-green mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Plastic-free packaging and carbon-neutral shipping</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-leaf-green mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Fair labor practices and ethical manufacturing</span>
                </li>
              </ul>

              <Link
                to="/sustainability"
                className="inline-block bg-leaf-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-leaf-green-dark transition"
              >
                Learn More
              </Link>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop"
                alt="Sustainable materials"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-leaf-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Join the Green Revolution
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, sustainability tips, and new product launches. 
            Be part of the change.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-leaf-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
