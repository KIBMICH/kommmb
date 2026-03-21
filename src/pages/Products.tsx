import { useState, useMemo } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'throw-pillows', name: 'Throw Pillows' },
    { id: 'bedroom-pillows', name: 'Bedroom Pillows' },
    { id: 'foot-rests', name: 'Foot Rests' },
    { id: 'play-toys', name: 'Play Toys' },
    { id: 'educational-materials', name: 'Educational Materials' },
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedGroup !== 'all') {
      filtered = filtered.filter(p => p.subcategory === selectedGroup);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.shortDescriptor.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedGroup, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-leaf-green/10 text-leaf-green px-4 py-1 rounded-full text-sm font-medium mb-4">
            Home
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Our Sustainable Collection
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Thoughtfully designed, nature-inspired pieces crafted for comfort and conscious living. From recycled soft pillows to organic educational toys.
          </p>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Category Filter */}
              <div className="flex items-center gap-2 w-full md:w-auto">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <select
                  value={selectedGroup}
                  onChange={(e) => setSelectedGroup(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leaf-green focus:border-transparent"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search */}
              <div className="relative w-full md:flex-1 max-w-md">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by product name..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leaf-green focus:border-transparent"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leaf-green focus:border-transparent"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 mt-4 pt-4 border-t">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedGroup('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    selectedGroup === 'all'
                      ? 'bg-leaf-green text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Products
                </button>
                <button
                  onClick={() => setSelectedGroup('throw-pillows')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    selectedGroup === 'throw-pillows'
                      ? 'bg-leaf-green text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Throw Pillows
                </button>
                <button
                  onClick={() => setSelectedGroup('bedroom-pillows')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    selectedGroup === 'bedroom-pillows'
                      ? 'bg-leaf-green text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Bedroom Pillows
                </button>
                <button
                  onClick={() => setSelectedGroup('foot-rests')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    selectedGroup === 'foot-rests'
                      ? 'bg-leaf-green text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Foot Rests
                </button>
                <button
                  onClick={() => setSelectedGroup('play-toys')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    selectedGroup === 'play-toys'
                      ? 'bg-leaf-green text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Play Toys
                </button>
                <button
                  onClick={() => setSelectedGroup('educational-materials')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    selectedGroup === 'educational-materials'
                      ? 'bg-leaf-green text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Educational Materials
                </button>
              </div>
            </div>
          </div>

          {/* Product Count */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Showing {filteredProducts.length} Products
            </h2>
            <p className="text-sm text-gray-500">
              Filtered by all sustainable items based on your filters
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-leaf-green text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                Sustainability Snapshot
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Every Purchase Plants a Seed of Change
              </h2>
              <p className="text-gray-600 mb-8">
                At Kommmb Innovations, sustainability isn't an afterthought. We use 100% recycled fabrics and tree-free, algae-based inks on our furniture, ensuring your comfort never comes at the cost of the environment.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-leaf-green mb-2">85%</div>
                  <div className="text-sm text-gray-600">Waste Reduction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-leaf-green mb-2">12k+</div>
                  <div className="text-sm text-gray-600">Products Sold</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-leaf-green mb-2">0%</div>
                  <div className="text-sm text-gray-600">Plastic Waste</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-leaf-green-light to-leaf-green rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-32 h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-lg font-semibold">Transparent Sourcing</p>
                  <p className="text-sm text-white/80 mt-2">Every material tracked from source to product</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
