'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = {
  apartment: {
    title: 'Apartment',
    count: '175 Properties',
    image: '/demo-property-5.jpg', 
  },
  farmhouse: {
    title: 'Farmhouse',
    count: '7 Properties',
    image: '/demo-property-6.jpg',
  },
  bungalow: {
    title: 'Bungalow',
    count: '8 Properties',
    image: '/demo-property-7.jpg', 
  },
  condo: {
    title: 'Condominium',
    count: '4 Properties',
    image: '/demo-property-8.jpg', 
  },
};

export function CategorySection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 h-auto lg:h-[650px]">
          
          {/* COLUMN 1: Header + Apartment */}
          <div className="flex flex-col gap-6 h-full">
            
            {/* BRAND HEADER SECTION */}
            <div className="mb-2">
              <h2 className="relative font-heading text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight">
                {/* 
                   BRAND RED ACCENT BOX 
                   Using brand-red opacity-90 to match the vibe but keep it legible
                */}
                <span className="relative z-10 inline-block mr-2">
                  <span className="absolute -left-2 -top-2 w-12 h-12 bg-brand-red rounded-lg -z-10 opacity-90" />
                  B
                </span>
                rowse Listings
                <span className="block mt-1">By Categories</span>
              </h2>
              
              {/* BRAND RED SEPARATOR LINE */}
              <div className="h-1.5 w-20 bg-brand-red mt-6 mb-5 rounded-full" />
              
              {/* BRAND SECTION LABEL PATTERN */}
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.5em] text-brand-red">
                Curated by expert real estate agents!
              </p>
            </div>

            {/* Apartment Card */}
            <div className="relative flex-1 w-full min-h-[280px] rounded-2xl overflow-hidden group cursor-pointer shadow-md">
              <Image
                src={categories.apartment.image}
                alt={categories.apartment.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-heading text-2xl font-bold text-white mb-1">
                  {categories.apartment.title}
                </h3>
                <p className="font-body text-sm font-medium text-gray-300">
                  {categories.apartment.count}
                </p>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Farmhouse + Bungalow */}
          <div className="flex flex-col gap-6 h-full">
            
            {/* Farmhouse Card */}
            <div className="relative h-[300px] lg:h-1/2 w-full rounded-2xl overflow-hidden group cursor-pointer shadow-md">
              <Image
                src={categories.farmhouse.image}
                alt={categories.farmhouse.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-heading text-2xl font-bold text-white mb-1">
                  {categories.farmhouse.title}
                </h3>
                <p className="font-body text-sm font-medium text-gray-300">
                  {categories.farmhouse.count}
                </p>
              </div>
            </div>

            {/* Bungalow Card */}
            <div className="relative h-[300px] lg:h-1/2 w-full rounded-2xl overflow-hidden group cursor-pointer shadow-md">
              <Image
                src={categories.bungalow.image}
                alt={categories.bungalow.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-heading text-2xl font-bold text-white mb-1">
                  {categories.bungalow.title}
                </h3>
                <p className="font-body text-sm font-medium text-gray-300">
                  {categories.bungalow.count}
                </p>
              </div>
            </div>
          </div>

          {/* COLUMN 3: Condominium */}
          <div className="h-[500px] lg:h-full w-full">
            <div className="relative h-full w-full rounded-2xl overflow-hidden group cursor-pointer shadow-md">
              <Image
                src={categories.condo.image}
                alt={categories.condo.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-heading text-3xl font-bold text-white mb-2">
                  {categories.condo.title}
                </h3>
                <p className="font-body text-base font-medium text-gray-300 mb-6">
                  {categories.condo.count}
                </p>
                
                {/* Hover Interaction CTA */}
                <div className="flex items-center gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-300">
                  <span className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                    View Properties
                  </span>
                  <div className="bg-brand-red p-2 rounded-full">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CategorySection;