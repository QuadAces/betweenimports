import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // No email logic - just redirect to thank you page
    navigate('/thank-you');
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif mb-4">Subscribe to our newsletter</h2>
        <p className="text-gray-600 mb-8">
          Promotions, new products and sales. Directly to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
          <button
            type="submit"
            className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-700 transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
