import React from 'react';
import InlineCarousel from './InlineCarousel';

const Collections = () => {
  // Define collections with their images
  const collections = [
    {
      title: 'Artificial Plants',
      category: 'ArtificialPlants',
      images: [
        '/images/ArtificialPlants/ArtificialPlants-1.jpg',
        '/images/ArtificialPlants/ArtificialPlants-2.jpg',
      ],
    },
    {
      title: 'Designer Planters',
      category: 'DesignerPlanters',
      images: [
        '/images/DesignerPlanters/DesignerPlanters-1.jpg',
        '/images/DesignerPlanters/DesignerPlanters-2.jpg',
        '/images/DesignerPlanters/DesignerPlanters-3.jpg',
        '/images/DesignerPlanters/DesignerPlanters-4.jpg',
        '/images/DesignerPlanters/DesignerPlanters-5.jpg',
        '/images/DesignerPlanters/DesignerPlanters-6.jpg',
        '/images/DesignerPlanters/DesignerPlanters-7.jpg',
      ],
    },
    {
      title: 'Jewellery',
      category: 'Jewellery',
      images: [
        '/images/Jewellery/Jewellery-1.jpg',
        '/images/Jewellery/Jewellery-2.jpg',
        '/images/Jewellery/Jewellery-3.jpg',
      ],
    },
    {
      title: 'Modern Homeware',
      category: 'ModernHomeware',
      images: [
        '/images/ModernHomeware/ModernHomeware-1.jpg',
        '/images/ModernHomeware/ModernHomeware-2.jpg',
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-12">Our Collections</h2>
        
        {/* Inline Carousels Grid - Multiple carousels per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {collections.map((collection, index) => (
            <InlineCarousel
              key={index}
              title={collection.title}
              images={collection.images}
              category={collection.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
