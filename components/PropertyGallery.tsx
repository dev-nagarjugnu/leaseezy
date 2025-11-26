'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2, Camera } from 'lucide-react';

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Safety check if no images are provided
  if (!images || images.length === 0) {
    return (
      <div className="h-[400px] bg-slate-50 rounded-2xl border border-slate-200 flex flex-col items-center justify-center text-slate-400 gap-4">
        <Camera size={48} className="opacity-20" />
        <p className="text-sm font-medium">Images not available for this asset</p>
      </div>
    );
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
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-sm border border-slate-100 group bg-slate-100">
        <Image 
          src={images[activeImageIndex]} 
          alt={`${title} - View ${activeImageIndex + 1}`} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        
        {/* Navigation Arrows (Glass Effect) */}
        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-brand-navy transition-all shadow-lg"
            aria-label="Previous Image"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-brand-navy transition-all shadow-lg"
            aria-label="Next Image"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Image Counter Badge */}
        <div className="absolute bottom-4 right-4 bg-brand-navy/90 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 border border-white/10 shadow-lg">
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
                  ? 'border-brand-navy shadow-md ring-2 ring-brand-navy/20 scale-95' 
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