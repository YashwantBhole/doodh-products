import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../products"; // Import the product data
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find((p) => p.id === parseInt(id)); // Find the product by ID

  if (!product) {
    return <div>Product not found!</div>; // Fallback UI
  }
  console.log(product)

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center text-white p-8 bg-gray-900 shadow-lg">
        <img 
          src={product.image || 'fallback-image-url.jpg'} 
          alt={product.name || 'Product Image'} 
          className="w-80 h-80 object-cover mb-6" 
        />
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
          <p className="text-lg mb-2">Price: {product.price}</p>
          <p className="text-white mb-2">Description: {product.description}</p>

          <h3 className="text-2xl font-semibold mb-2">Features:</h3>
          <ul className="list-disc ml-5 mb-4">
            {product.features.map((feature, index) => (
              <li key={index} className="text-white mb-1">{feature}</li>
            ))}
          </ul>

          <p className="text-white mb-1">Manufacturing Date: {product.manufacturingDate}</p>
          <p className="text-white mb-4">Expiry Date: {product.expiryDate}</p>
          <p className="text-white font-medium">Farmer: {product.farmerName}</p>
          <p className="text-white mb-4">
            Contact: <a href={`tel:${product.contact}`} className="text-blue-400 underline">{product.contact}</a>
          </p>
          <Link to={{ pathname: `/order/${product.id}`}}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">Order Now</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
