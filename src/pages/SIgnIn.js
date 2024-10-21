import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Retrieve user data from localStorage
    const storedData = JSON.parse(localStorage.getItem('userData'));

    if (!storedData || storedData.email !== email) {
      setError('Invalid email or user not found.');
      setSuccess('');
      return;
    }

    // Basic password check (for demonstration purposes, the password is not stored)
    if (password !== storedData.password) {
      setError('Invalid password.');
      setSuccess('');
      return;
    }

    setError('');
    setSuccess('Sign-in successful! Welcome back.');
    navigate('/products')
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full transform transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl font-semibold text-center text-gray-700">Sign In</h2>
        <form onSubmit={handleSubmit} className="mt-6">
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {success && <p className="text-green-500 text-sm text-center">{success}</p>}
          
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg mt-4 hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
