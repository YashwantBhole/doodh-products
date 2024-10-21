import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="p-4 container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Follow Us Section */}
        <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="h-6 w-6 hover:text-blue-500" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="h-6 w-6 hover:text-blue-400" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="h-6 w-6 hover:text-pink-500" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-6 w-6 hover:text-blue-700" />
            </a>
          </div>
        </div>

      {/* Copyright Section */}
      <div className="flex justify-center mt-4">    
        <p className="text-sm">© 2024 Doodh Dairy. All rights reserved.</p>
      </div>

        {/* Contact Us Section */}
        <div className="flex flex-col items-center md:items-start p-4">
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="h-6 w-6" />
            <span>Email: <a href="mailto:yashwantbhole2004@gmail.com" className="hover:underline">kartikgavale1234@gmail.com</a></span>
          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
