import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <svg
              className="mx-auto h-16 w-16 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          
          <h1 className="text-3xl font-serif mb-4 text-gray-800">
            Thank You!
          </h1>
          
          <p className="text-gray-600 mb-8">
            Thank you for subscribing to our newsletter. We're excited to share our latest products and exclusive offers with you.
          </p>
          
          <Link
            to="/"
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-700 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
