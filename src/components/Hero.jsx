import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      {/* Important Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Important Notice -</h2>
          <p className="text-gray-700">Our processing time is currently 1-3 weeks.</p>
        </div>
      </div>

      {/* Hero Slideshow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative bg-gray-200 rounded-lg overflow-hidden" style={{ height: '500px' }}>
            {/* Hero Image */}
            <img 
              src="/images/ArtificialPlants/hero.jpg" 
              alt="Between Imports Hero" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-serif text-white drop-shadow-lg mb-4">
                Premium Incense & Aromatics
              </h2>
                <p className="text-lg text-white drop-shadow-md mb-6">
                Handpicked from around the world
              </p>
              <button className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-700 transition-colors">
                Shop Now
              </button>
            </div>
          </div>

          {/* Slideshow Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <button className="w-3 h-3 rounded-full bg-gray-800"></button>
            <button className="w-3 h-3 rounded-full bg-gray-400"></button>
            <button className="w-3 h-3 rounded-full bg-gray-400"></button>
            <button className="w-3 h-3 rounded-full bg-gray-400"></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
