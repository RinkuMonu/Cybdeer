import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

export default function ProductCard({ product, addToCart }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
          />
        </div>
        <div className="p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">{product.brand}</span>
            <span className="flex items-center text-yellow-400">
              <Star className="h-4 w-4 fill-current" />
              {product.rating}
            </span>
          </div>
          <h3 className="font-semibold text-gray-900">{product.name}</h3>
          <p className="text-lg font-bold text-gray-900">₹{product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </Link>
  );
}