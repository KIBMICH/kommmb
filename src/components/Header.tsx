import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categoryGroups } from '../data/categories';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img 
              src="/kommmb_logo.png" 
              alt="Kommmb Innovations" 
              className="h-12 w-auto sm:h-16 md:h-20"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-leaf-green transition text-sm xl:text-base">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-leaf-green transition text-sm xl:text-base">
              About
            </Link>
            <Link to="/sustainability" className="text-gray-700 hover:text-leaf-green transition text-sm xl:text-base">
              Sustainability
            </Link>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="text-gray-700 hover:text-leaf-green transition flex items-center text-sm xl:text-base">
                Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl p-6 z-50">
                  <div className="grid grid-cols-2 gap-6">
                    {categoryGroups.map((group) => (
                      <div key={group.id}>
                        <Link 
                          to={`/category/${group.slug}`}
                          className="font-semibold text-gray-900 hover:text-leaf-green block mb-2"
                        >
                          {group.name}
                        </Link>
                        <ul className="space-y-1">
                          {group.subcategories.map((sub) => (
                            <li key={sub.id}>
                              <Link
                                to={`/category/${group.slug}/${sub.slug}`}
                                className="text-sm text-gray-600 hover:text-leaf-green"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/products"
                    className="mt-4 block w-full text-center bg-leaf-green text-white py-2 rounded-lg hover:bg-leaf-green-dark transition"
                  >
                    Shop Now
                  </Link>
                </div>
              )}
            </div>

            <Link to="/gallery" className="text-gray-700 hover:text-leaf-green transition text-sm xl:text-base">
              Gallery
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-leaf-green transition text-sm xl:text-base">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-leaf-green transition text-sm xl:text-base">
              Contact
            </Link>
            
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-leaf-green transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="space-y-4">
              <Link 
                to="/" 
                className="block text-gray-700 hover:text-leaf-green py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block text-gray-700 hover:text-leaf-green py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/sustainability" 
                className="block text-gray-700 hover:text-leaf-green py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sustainability
              </Link>
              
              {categoryGroups.map((group) => (
                <div key={group.id} className="pl-4 border-l-2 border-gray-200">
                  <Link 
                    to={`/category/${group.slug}`} 
                    className="block font-semibold text-gray-900 mb-2 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {group.name}
                  </Link>
                  {group.subcategories.map((sub) => (
                    <Link
                      key={sub.id}
                      to={`/category/${group.slug}/${sub.slug}`}
                      className="block text-sm text-gray-600 py-1 pl-4"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              ))}
              
              <Link 
                to="/gallery" 
                className="block text-gray-700 hover:text-leaf-green py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                to="/blog" 
                className="block text-gray-700 hover:text-leaf-green py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="block text-gray-700 hover:text-leaf-green py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/cart" 
                className="block text-gray-700 hover:text-leaf-green py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart
              </Link>
              
              <Link
                to="/products"
                className="block bg-leaf-green text-white py-3 px-4 rounded-lg text-center hover:bg-leaf-green-dark mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
