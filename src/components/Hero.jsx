import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    '/hero/hero-1.jpg',
    '/hero/hero-2.jpg',
    '/hero/hero-3.jpg',
    '/hero/hero-4.jpg'
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

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
        <div className="relative bg-gray-200 rounded-lg overflow-hidden cursor-pointer" style={{ height: '500px' }}
        onClick={() => {
          navigate("/login")
        }}>
            {/* Hero Images */}
            {heroImages.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`Between Imports Hero ${index + 1}`} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 cursor-pointer ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={() => navigate('/login')}
              />
            ))}
          
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full transition-all shadow-lg z-10"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full transition-all shadow-lg z-10"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-serif text-white drop-shadow-lg mb-4">
                Premium Artificial Plants and Planters
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
            {heroImages.map((_, index) => (
              <button 
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-gray-800' : 'bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`  }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
