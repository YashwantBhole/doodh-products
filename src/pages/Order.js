import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { products } from '../products';

const Order = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find((p) => p.id === parseInt(id)); // Find the product by ID

  const [name, setName] = useState('');
  const [location , setLocation] = useState('Latur')
  const [quantity, setQuantity] = useState(1);
  

  if (!product) {
    return <div>Product not found!</div>; // Display a fallback UI
  }
  
  console.log(product);
  const handleOrder = () => {
    const message = `Name: ${name}\nLocation: ${location}\n\nI would like to order ${quantity} of ${product.name}.`;
    const phoneNumber = '9359142599'; // Replace with the actual phone number
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    // Open WhatsApp link in a new tab
    window.open(whatsappLink, '_blank');
  };
    

  return <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Order {product.name}</h2>
  <p className="text-lg text-gray-600 text-center mb-4">Price: ₹{product.price}</p> {/* Display price with currency */}

  <div className="mb-6">
    <label className="block text-gray-700 mb-2 text-sm font-medium" htmlFor="quantity">Name:</label>
    <input
      type="text"
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>

  <div className="mb-6">
    <label className="block text-gray-700 mb-2 text-sm font-medium" htmlFor="quantity">Location:</label>
    <input
      type="text"
      id="location"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>

  <div className="mb-6">
    <label className="block text-gray-700 mb-2 text-sm font-medium" htmlFor="quantity">Quantity:</label>
    <input
      type="number"
      id="quantity"
      value={quantity}
      min="1"
      onChange={(e) => setQuantity(Number(e.target.value))}
      className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>

  <button
    onClick={handleOrder}
    disabled={quantity < 1}
    className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition duration-200 ${
      quantity < 1 ? 'opacity-50 cursor-not-allowed' : ''
    }`}
  >
    Place Order
  </button>
</div>

};

export default Order;
