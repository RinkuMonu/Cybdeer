import React from 'react';
import { useParams } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products'; // Assuming you have sample products data
import { Product } from '../types';
import ProductCard from '../components/products/ProductCard';

interface ProductDetailsProps {
  addToCart: (product: Product) => void;
}

const ProductDetails = ({ addToCart }: ProductDetailsProps) => {
  const { id } = useParams();
  
  // Convert id to number before comparing
  const product = products.find((prod) => prod.id === parseInt(id!)); // Use parseInt to ensure both sides are numbers

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex">
        <div className="flex-1">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 pl-8">
          <h2 className="text-3xl font-semibold text-gray-900">{product.name}</h2>
          <div className="flex items-center text-yellow-400">
            <Star className="h-5 w-5 fill-current" />
            {product.rating}
          </div>
          <p className="text-xl font-bold text-gray-900">₹{product.price}</p>
          <p className="text-gray-600 my-4">{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="my-8">
        <h3 className="text-2xl font-semibold">Related Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
          {products.slice(0, 4).map((prod) => (
            <ProductCard key={prod.id} product={prod} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
