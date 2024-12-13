import React from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-16 bg-indigo-600">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8">Subscribe to our newsletter for exclusive deals and updates</p>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition">
              <span>Subscribe</span>
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}