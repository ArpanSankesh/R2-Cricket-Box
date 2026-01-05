// client/src/components/Gallery.jsx
import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800', alt: 'Football' },
    { id: 2, url: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800', alt: 'Stadium' },
    { id: 3, url: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800', alt: 'Turf' },
    { id: 4, url: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=800', alt: 'Ball' },
    { id: 5, url: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800', alt: 'Facility' },
    { id: 6, url: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800', alt: 'Night Match' },
  ];

  return (
    <section id="gallery" className="py-12 bg-black flex flex-col items-center justify-center gap-6">
      <div className=" mx-auto px-4 md:px-20 ">
        
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-2 underline decoration-green-400">
            Gallery
          </h2>
          <p className="text-gray-400 text-2xl md:text-9xl">Check out our premium facilities</p>
        </div>

        
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          
          {images.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className=" relative rounded-2xl overflow-hidden border border-zinc-800 hover:border-green-500 cursor-pointer group"
            >
              <img 
                src={img.url} 
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Subtle light flash on hover */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></div>
            </div>
          ))}

        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <button className="absolute top-4 right-4 text-white bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <img 
            src={selectedImage.url} 
            alt={selectedImage.alt}
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      <button className='text-center text-2xl mt-4 px-6 py-3.5 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-all duration-200 cursor-pointer'>About us</button>
    </section>
  );
};

export default Gallery;