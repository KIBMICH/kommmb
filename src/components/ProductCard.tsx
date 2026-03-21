import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      <div className="relative overflow-hidden aspect-square bg-gray-100">
        <img 
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.impactKG > 0 && (
          <div className="absolute top-2 right-2 bg-leaf-green text-white text-xs px-2 py-1 rounded-full">
            {product.impactKG}kg reused
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            {product.subcategory.replace('-', ' ')}
          </p>
          <h3 className="font-semibold text-gray-900 group-hover:text-leaf-green transition line-clamp-2">
            {product.title}
          </h3>
        </div>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.shortDescriptor}</p>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-leaf-green font-bold text-lg">
            ₦{product.price.toLocaleString()}
          </span>
        </div>
        
        <Link
          to={`/product/${product.id}`}
          className="block w-full text-center bg-leaf-green text-white py-2 rounded-lg hover:bg-leaf-green-dark transition text-sm font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
