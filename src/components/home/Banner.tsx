import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Banner() {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-blue-100 to-indigo-100">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="w-1/2 space-y-6">
          <h1 className="text-6xl font-bold leading-tight">
            Discover the Latest
            <br />
            Tech Innovations
          </h1>
          <p className="text-xl text-gray-600">
            Shop the most advanced gadgets and electronics at unbeatable prices
          </p>
          <button className="flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
            <span>Shop Now</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/2">
          <img
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80"
            alt="Latest Technology"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}