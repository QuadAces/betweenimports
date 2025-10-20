import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top Banner */}
      <div className="bg-gray-100 text-center py-2 px-4 text-sm">
        <p className="text-gray-700">$100 Minimum Order</p>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex-1">
            <a href="/" className="hover:opacity-80 transition-opacity">
              <img src="/logo.jpg" alt="In Between Imports" className="h-12 md:h-16" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 flex-1 justify-center">
            <a href="/" className="text-gray-700 hover:text-gray-900 font-medium">Home</a>
            <a href="/shop" className="text-gray-700 hover:text-gray-900 font-medium">Shop</a>
            <a href="/about" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
          </nav>

          {/* Right Side - Cart & Search */}
          <div className="flex-1 flex justify-end items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a href="/" className="block text-gray-700 hover:text-gray-900 py-2">Home</a>
            <a href="/shop" className="block text-gray-700 hover:text-gray-900 py-2">Shop</a>
            <a href="/about" className="block text-gray-700 hover:text-gray-900 py-2">About</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
