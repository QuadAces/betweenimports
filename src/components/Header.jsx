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
              <img src="/logo.jpg" alt="Between Imports" className="h-12 md:h-16" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 flex-1 justify-center">
            <a href="/" className="text-gray-700 hover:text-gray-900 font-medium">Home</a>
            <a href="/login" className="text-gray-700 hover:text-gray-900 font-medium">Login</a>
          </nav>

          {/* Right Side - Cart & Search */}
          <div className="flex-1 flex justify-end items-center space-x-4">
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
            <a href="/login" className="block text-gray-700 hover:text-gray-900 py-2">Login</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
