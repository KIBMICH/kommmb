import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/products" className="text-leaf-green hover:underline">
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.subcategory === product.subcategory && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link to="/" className="text-gray-600 hover:text-leaf-green">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/products" className="text-gray-600 hover:text-leaf-green">Products</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">{product.title}</span>
        </nav>

        {/* Product Info */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img 
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div>
            <h1 className="text-4xl font-heading font-bold mb-4">{product.title}</h1>
            <div className="text-3xl text-leaf-green font-bold mb-6">
              ₦{product.price.toLocaleString()}
            </div>

            {/* Sustainability Badge */}
            <div className="bg-leaf-green/10 border border-leaf-green rounded-lg p-4 mb-6">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-leaf-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="font-semibold">This product reuses {product.impactKG} kg of textile waste</span>
              </div>
            </div>

            {product.ageRange && (
              <div className="mb-4">
                <span className="font-semibold">Age Range:</span> {product.ageRange}
              </div>
            )}

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Materials:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {product.materials.map((material, idx) => (
                  <li key={idx}>{material}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <span className="font-semibold">Dimensions:</span> {product.dimensions}
            </div>

            {/* Options */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <label className="block font-semibold mb-2">Color:</label>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-leaf-green transition"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <label className="block font-semibold mb-2">Size:</label>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-leaf-green transition"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">Quantity:</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  -
                </button>
                <span className="text-xl font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button className="flex-1 bg-leaf-green text-white py-3 rounded-lg font-semibold hover:bg-leaf-green-dark transition">
                Add to Cart
              </button>
              <button className="px-6 border-2 border-leaf-green text-leaf-green rounded-lg font-semibold hover:bg-leaf-green/10 transition">
                Save for Later
              </button>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-earth-beige text-earth-brown px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t">
          <div className="flex gap-8 border-b">
            {['description', 'materials', 'impact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`py-4 font-semibold capitalize ${
                  selectedTab === tab
                    ? 'text-leaf-green border-b-2 border-leaf-green'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab === 'materials' ? 'Materials & Care' : tab}
              </button>
            ))}
          </div>

          <div className="py-8">
            {selectedTab === 'description' && (
              <div>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>
            )}
            {selectedTab === 'materials' && (
              <div>
                <h3 className="font-semibold mb-4">Materials:</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  {product.materials.map((material, idx) => (
                    <li key={idx}>{material}</li>
                  ))}
                </ul>
                <h3 className="font-semibold mb-4">Care Instructions:</h3>
                <p className="text-gray-700">{product.careInstructions}</p>
              </div>
            )}
            {selectedTab === 'impact' && (
              <div>
                <div className="bg-leaf-green/10 rounded-lg p-6">
                  <h3 className="font-semibold text-xl mb-4">Environmental Impact</h3>
                  <p className="text-gray-700 mb-4">
                    By choosing this product, you're helping reduce textile waste and support sustainable manufacturing.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-bold text-leaf-green mb-2">
                        {product.impactKG} kg
                      </div>
                      <div className="text-gray-700">Textile waste reused</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-leaf-green mb-2">100%</div>
                      <div className="text-gray-700">Sustainable materials</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-heading font-bold mb-8">You May Also Like</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="bg-gray-100 aspect-square rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={p.images[0]}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold group-hover:text-leaf-green">{p.title}</h3>
                  <p className="text-leaf-green font-semibold">₦{p.price.toLocaleString()}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
