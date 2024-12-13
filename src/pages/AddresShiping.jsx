import React, { useEffect, useState } from 'react';
import "./address.css";

const AddresShiping = ({ cartItems, onClose }) => {
  useEffect(() => {
    onClose();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const [errors, setErrors] = useState({});
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const validateForm = () => {
    const newErrors = {};
  
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = 'Full Name must contain only letters and spaces.';
    }
  
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }
  
    // Contact number validation
    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact Number is required.';
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = 'Contact Number must be 10 digits.';
    }
  
    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required.';
    }
  
    // City validation
    if (!formData.city.trim()) {
      newErrors.city = 'City is required.';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.city)) {
      newErrors.city = 'City must contain only letters and spaces.';
    }
  
    // State validation
    if (!formData.state.trim()) {
      newErrors.state = 'State is required.';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.state)) {
      newErrors.state = 'State must contain only letters and spaces.';
    }
  
    // Zip Code validation
    if (!formData.zip.trim()) {
      newErrors.zip = 'Zip Code is required.';
    } else if (!/^\d{6}$/.test(formData.zip)) {
      newErrors.zip = 'Zip Code must be 6 digits.';
    }
  
    // Set errors state and return validation status
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };
  
  const handleCheckout = () => {
    if (!validateForm()) {
      return; // Prevent checkout if form is invalid
    }

    // Define payment options
    const options = {
      key: 'rzp_test_qWAN0qGk5syg5o', // Razorpay Test Key ID
      amount: total * 100, // Amount in paise (100 INR)
      currency: 'INR',
      name: 'DigihubTech',
      description: 'Transaction',
      image: 'https://your-logo-url.com/logo.png', // Optional logo
      handler: function (response) {
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
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
      },
      theme: {
        color: '#4d44dd',
      },
    };

    const razorpay = new Razorpay(options);

    razorpay.on('payment.failed', function (response) {
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

    razorpay.open();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', // Clear errors for the field being updated
    }));
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Shipping Address</h2>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact">Contact Number:</label>
            <input 
              type="text" 
              id="contact" 
              name="contact" 
              value={formData.contact} 
              onChange={handleChange} 
            />
            {errors.contact && <p className="error-text">{errors.contact}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input 
              type="text" 
              id="address" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
            />
            {errors.address && <p className="error-text">{errors.address}</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input 
              type="text" 
              id="city" 
              name="city" 
              value={formData.city} 
              onChange={handleChange} 
            />
            {errors.city && <p className="error-text">{errors.city}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="state">State:</label>
            <input 
              type="text" 
              id="state" 
              name="state" 
              value={formData.state} 
              onChange={handleChange} 
            />
            {errors.state && <p className="error-text">{errors.state}</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="zip">Zip Code:</label>
            <input 
              type="text" 
              id="zip" 
              name="zip" 
              value={formData.zip} 
              onChange={handleChange} 
            />
            {errors.zip && <p className="error-text">{errors.zip}</p>}
          </div>
        </div>

        <button type="button" className="submit-btn" onClick={handleCheckout}>
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default AddresShiping;
