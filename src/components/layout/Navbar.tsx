import React from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import img1 from "../../assest/cybdeer.jpg"


interface NavbarProps {
  onCartClick: () => void;
  cartItemCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick, cartItemCount }) => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Navbar */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            <Link to="/" className="flex items-center space-x-6">
              <img src={img1} alt="" style={{ width: '14%', marginBottom: '20px', marginTop: '20px' }} />
            </Link>
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none border- focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/login" className="flex items-center space-x-1 hover:text-indigo-600">
                <User className="h-5 w-5" />
                <span>Login</span>
              </Link>
              <button onClick={onCartClick} className="flex items-center space-x-1 hover:text-indigo-600">
                <ShoppingCart className="h-5 w-5" />
                <span>Cart ({cartItemCount})</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Category Navbar */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-8 h-12 text-sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {['All-Categories', 'Laptops', 'Phones', 'Speakers', 'Electronics', 'Accessories'].map((item) => (
              <Link
                key={item}
                to={`/category/${item.toLowerCase()}`}
                className="hover:text-indigo-600 hover:border-b-2 hover:border-indigo-600 h-full flex items-center"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
