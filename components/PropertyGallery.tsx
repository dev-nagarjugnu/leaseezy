'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Safety check if no images are provided
  if (!images || images.length === 0) {
    return <div className="h-96 bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400">No Images Available</div>;
  }

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="space-y-4 select-none">
      
      {/* Main Large Image */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-sm group bg-slate-100">
        <Image 
          src={images[activeImageIndex]} 
          alt={`${title} - View ${activeImageIndex + 1}`} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        
        {/* Navigation Arrows (Visible on Hover) */}
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg backdrop-blur-sm"
          aria-label="Previous Image"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg backdrop-blur-sm"
          aria-label="Next Image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Image Counter Badge */}
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2">
            <Maximize2 size={12} />
            {activeImageIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails Strip */}
      <div className="relative">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x">
          {images.map((img, i) => (
            <button 
              key={i} 
              onClick={() => setActiveImageIndex(i)}
              className={`
                relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all snap-start
                ${activeImageIndex === i 
                  ? 'border-[#0F172A] opacity-100 shadow-md scale-105' 
                  : 'border-transparent opacity-70 hover:opacity-100 hover:border-slate-300'
                }
              `}
            >
              <Image 
                src={img} 
                alt={`Thumbnail ${i + 1}`} 
                fill 
                className="object-cover" 
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}