import { useParams, Link } from 'react-router-dom';
import { categoryGroups } from '../data/categories';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function CategoryLanding() {
  const { groupSlug, subcategorySlug } = useParams();
  
  const group = categoryGroups.find(g => g.slug === groupSlug);
  const subcategory = subcategorySlug 
    ? group?.subcategories.find(s => s.slug === subcategorySlug)
    : null;

  if (!group) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Category not found</h2>
          <Link to="/products" className="text-leaf-green hover:underline">
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  const filteredProducts = products.filter(p => {
    if (subcategorySlug) {
      return p.group === groupSlug && p.subcategory === subcategorySlug;
    }
    return p.group === groupSlug;
  });

  const isSoftFurniture = groupSlug === 'soft-furniture';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src={isSoftFurniture 
              ? "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&h=900&fit=crop"
              : "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1600&h=900&fit=crop"
            }
            alt={group.name}
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <div className="inline-block bg-leaf-green text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              {subcategory ? subcategory.name : group.name}
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              {isSoftFurniture ? 'The Art of Sustainable Comfort' : 'Learning Through Play'}
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {isSoftFurniture 
                ? 'Handcrafted furniture pieces made from 100% recycled and organic materials. Every item tells a story of environmental responsibility and timeless design.'
                : 'Safe, sustainable toys and educational materials designed to inspire creativity and learning while protecting our planet.'
              }
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/products"
                className="bg-leaf-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-leaf-green-dark transition"
              >
                Shop the Collection
              </Link>
              <Link
                to="/sustainability"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Learn About Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-leaf-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-leaf-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            Innovation in Every Thread
          </h2>
          <p className="text-gray-600 mb-4">
            At Kommmb Innovations, each item in our {group.name.toLowerCase()} collection is crafted using only the best of the best materials. Our Soft Furniture line is made of 100% recycled or organic fabrics—no waste, no shortcuts, just eco-friendly comfort. Every piece is handmade with care, ensuring quality and sustainability in every stitch.
          </p>
          <p className="text-gray-600">
            But our impact goes beyond comfort. With our tree-free and algae-based inks, we're not just making furniture—we're making a statement. It's thoughtfully designed, sustainably sourced, and built to last. From pillows to foot rests, we've perfected the balance of elegance and environmental responsibility.
          </p>
        </div>
      </section>

      {/* Shop by Sub-Category */}
      {!subcategorySlug && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Shop by Sub-Category
              </h2>
              <p className="text-gray-600">
                Dive into our curated sub-categories to find exactly what you need.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {group.subcategories.map((sub) => (
                <Link
                  key={sub.id}
                  to={`/category/${group.slug}/${sub.slug}`}
                  className="group relative h-80 rounded-2xl overflow-hidden"
                >
                  <img 
                    src={
                      sub.slug === 'throw-pillows' 
                        ? "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=800&fit=crop"
                        : sub.slug === 'bedroom-pillows'
                        ? "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=800&fit=crop"
                        : sub.slug === 'foot-rests'
                        ? "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=800&fit=crop"
                        : sub.slug === 'play-toys'
                        ? "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&h=800&fit=crop"
                        : "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=800&fit=crop"
                    }
                    alt={sub.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">
                      {sub.name}
                    </h3>
                    <p className="text-white/90 text-sm mb-4">{sub.description}</p>
                    <span className="text-white font-semibold inline-flex items-center">
                      Explore
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-leaf-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-leaf-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Sustainable Pillows</h3>
                  <p className="text-sm text-gray-600">Made from 100% recycled and organic fabrics</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-leaf-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-leaf-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Organic Pillows</h3>
                  <p className="text-sm text-gray-600">Soft and breathable organic cotton covers</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-leaf-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-leaf-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Durability Tested</h3>
                  <p className="text-sm text-gray-600">Designed and tested for long-lasting use</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Curated Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">
                Curated {subcategory ? subcategory.name : group.name}
              </h2>
              <p className="text-gray-600">
                Discover our hand-picked sustainable items that combine comfort and eco-responsibility.
              </p>
            </div>
            <Link
              to="/products"
              className="text-leaf-green font-semibold hover:underline hidden md:block"
            >
              View All Products →
            </Link>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center py-12">
              No products available in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-leaf-green-light to-leaf-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to transform your living space?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Explore our full collection of sustainable furniture and toys. Every purchase supports environmental conservation and ethical manufacturing.
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-leaf-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Explore Full Catalog
          </Link>
        </div>
      </section>
    </div>
  );
}
