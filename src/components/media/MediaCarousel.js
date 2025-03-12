// src/components/media/MediaCarousel.js
import React, { useState, useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const MediaCarousel = ({ 
  mediaItems, 
  itemWidthClass = "w-full md:w-full lg:w-full",
  respectAspectRatio = false // Default value for all items if not specified individually
}) => {
  // Custom height class for Tailwind that's not in the default set
  const customStyles = `
    @media (min-width: 1024px) {
      .h-112 {
        height: 28rem;
      }
    }
  `;
  
  const scrollContainer = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      const newPosition = Math.max(scrollPosition - 300, 0);
      scrollContainer.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      const maxScroll = scrollContainer.current.scrollWidth - scrollContainer.current.clientWidth;
      const newPosition = Math.min(scrollPosition + 300, maxScroll);
      scrollContainer.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="relative w-full">
      {/* Add custom styles for the h-112 class */}
      <style>{customStyles}</style>
      
      {/* Navigation buttons */}
      <button 
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all"
        aria-label="Scroll left"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all"
        aria-label="Scroll right"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Scrollable media container (images and videos) */}
      <div 
        ref={scrollContainer}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
      >
        {mediaItems.map((item, index) => {
          // Check if the item has its own respectAspectRatio property, otherwise use the global setting
          const shouldRespectAspectRatio = item.respectAspectRatio !== undefined ? item.respectAspectRatio : respectAspectRatio;
          
          return (
            <div 
              key={index} 
              className={`flex-none ${itemWidthClass} ${!shouldRespectAspectRatio ? 'h-80 md:h-96 lg:h-112' : ''} snap-center relative`}
            >
              {item.type === 'image' ? (
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className={`w-full ${!shouldRespectAspectRatio ? 'h-full object-cover' : 'h-auto object-contain'} rounded-lg`}
                />
              ) : item.type === 'youtube' ? (
                <div className={`w-full ${!shouldRespectAspectRatio ? 'h-full' : 'aspect-video'} rounded-lg overflow-hidden`}>
                  <iframe
                    src={`https://www.youtube.com/embed/${item.id}?rel=0`}
                    title={item.alt}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className={`w-full ${!shouldRespectAspectRatio ? 'h-full' : 'aspect-video'} rounded-lg overflow-hidden`}>
                  <video 
                    src={item.src}
                    poster={item.poster}
                    controls
                    className={`w-full ${!shouldRespectAspectRatio ? 'h-full object-cover' : 'h-auto'}`}
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-white bg-opacity-75 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-16 border-l-gray-800 ml-1"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Indicator dots */}
      <div className="flex justify-center gap-2 mt-4">
        {mediaItems.map((_, index) => {
          // Calculate which item is most visible
          const containerWidth = scrollContainer.current?.clientWidth || 0;
          const currentItemIndex = Math.round(scrollPosition / containerWidth);
          
          return (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                currentItemIndex === index ? 'bg-gray-800 w-4' : 'bg-gray-300'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MediaCarousel;