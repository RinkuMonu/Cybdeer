import React from 'react';
import { Star } from 'lucide-react';
import { products } from '../../data/products'; // Import shared products data

const TrendingProducts = ({ addToCart }: { addToCart: (product: any) => void }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Trending Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((product) => ( // Only display the first 4 products
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <span className="flex items-center text-yellow-400">
                    <Star className="h-4 w-4 fill-current" />
                    {product.rating}
                  </span>
                </div>
                <p className="text-gray-600">{product.category}</p>
                <p className="text-xl font-bold">₹{product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
