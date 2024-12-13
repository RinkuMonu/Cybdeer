import React from 'react';
import { X, ShoppingCart, Trash2 } from 'lucide-react';
import Swal from 'sweetalert2'; // Import SweetAlert
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useDispatch } from 'react-redux';
import { removeItemFromCart, updateQuantity } from '../../reduxslice/CartSlice'; // Import actions

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, cartItems }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleIncrement = (id: string) => {
    const item = cartItems.find((i) => i.id === id);
    if (item) {
      dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
    }
  };

  const handleDecrement = (id: string) => {
    const item = cartItems.find((i) => i.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
    }
  };

  const handleDelete = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  const handleCheckout = () => {
    // Define payment options
    const options = {
      key: 'rzp_test_qWAN0qGk5syg5o', // Razorpay Test Key ID
      amount: total * 100, // Amount in paise (100 INR)
      currency: 'INR',
      name: 'DigihubTech',
      description: ' Transaction',
      image: 'https://your-logo-url.com/logo.png', // Optional logo
      handler: function (response: any) {
        Swal.fire({
          title: 'Payment Successful',
          html: `
            <p><strong>Payment ID:</strong> ${response.razorpay_payment_id}</p>
            <p>Thank you for your payment!</p>
          `,
          icon: 'success',
        });
      },
      prefill: {
        name: 'rahul',
        email: 'rahul@example.com',
        contact: '7357444454',
      },
      theme: {
        color: '#4d44dd',
      },
    };
  
    // Initialize Razorpay
    const razorpay = new Razorpay(options);
  
    // Handle Payment Failure
    razorpay.on('payment.failed', function (response: any) {
      Swal.fire({
        title: 'Payment Failed',
        html: `
          <p><strong>Code:</strong> ${response.error.code}</p>
          <p><strong>Description:</strong> ${response.error.description}</p>
          <p><strong>Reason:</strong> ${response.error.reason}</p>
        `,
        icon: 'error',
      });
    });
  
    // Open Razorpay UI
    razorpay.open();
  };
  
  
  
  
  

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative shadow-xl">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-600">
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <ShoppingCart className="h-6 w-6 text-gray-900 mr-2" />
          Your Cart
        </h2>

        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item.id} className="flex items-center justify-between py-4 border-b border-gray-200">
              <div className="flex items-center">
                <div className="h-16 w-16 overflow-hidden rounded-md border border-gray-300">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-600">₹{item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {/* Decrement Button */}
                <button
                  className="px-3 py-1 border rounded-md text-gray-600 hover:text-gray-900"
                  onClick={() => handleDecrement(item.id)}
                >
                  -
                </button>
                {/* Quantity Display */}
                <span className="text-sm font-medium">{item.quantity}</span>
                {/* Increment Button */}
                <button
                  className="px-3 py-1 border rounded-md text-gray-600 hover:text-gray-900"
                  onClick={() => handleIncrement(item.id)}
                >
                  +
                </button>
                {/* Delete Button */}
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => handleDelete(item.id)}
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Cart Summary */}
        <div className="mt-6 border-t border-gray-200 pt-4">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>₹{total}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>

          <div className="mt-4">
          <Link to="/address">
            <button
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
             // Add SweetAlert handler here
            >
              Checkout
            </button>
            </Link>
          </div>
        </div>

        {/* Continue Shopping Option */}
        <div className="mt-4 text-sm text-center text-gray-500">
          <p>
            or{' '}
            
            <button onClick={onClose} className="text-indigo-600 font-medium hover:text-indigo-500">
              Continue Shopping
            </button>
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
