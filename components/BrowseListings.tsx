'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

/* 
  IMPORTANT: 
  The keys below (office, retail, etc.) map to your existing images. 
  PLEASE REPLACE THE IMAGE FILES LATER with actual pictures of:
  - Offices
  - Shops/Malls
  - Warehouses
  - IT Parks
*/
const categories = {
  office: {
    title: 'Office Spaces',
    count: 'Premium Corporate Suites',
    image: '/demo-property-5.jpg', // Replace with Office Image
  },
  retail: {
    title: 'Retail Outlets',
    count: 'High-Street & Mall Spots',
    image: '/demo-property-6.jpg', // Replace with Shop Image
  },
  industrial: {
    title: 'Warehousing',
    count: 'Industrial & Logistics',
    image: '/demo-property-7.jpg', // Replace with Warehouse Image
  },
  itPark: {
    title: 'IT Parks / SEZ',
    count: 'Tech-Enabled Campuses',
    image: '/demo-property-8.jpg', // Replace with IT Park Image
  },
};

export function CategorySection() {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 h-auto lg:h-[650px]">
          
          {/* COLUMN 1: Header + Office */}
          <div className="flex flex-col gap-6 h-full">
            
            {/* BRAND HEADER SECTION */}
            <div className="mb-4">
              <h2 className="relative font-heading text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight">
                <span className="relative z-10 inline-block mr-2">
                  {/* Red Square Accent behind the 'B' */}
                  <span className="absolute -left-2 -top-2 w-12 h-12 bg-brand-red/10 rounded-lg -z-10" />
                  B
                </span>
                rowse <br /> Categories
              </h2>
              
              <div className="h-1.5 w-20 bg-brand-red mt-6 mb-5 rounded-full" />
              
              <p className="font-heading text-xs font-bold uppercase tracking-widest text-slate-500">
                Curated for Business Impact
              </p>
            </div>

            {/* Office Card */}
            <div className="relative flex-1 w-full min-h-[280px] rounded-2xl overflow-hidden group cursor-pointer shadow-md border border-slate-100">
              <Image
                src={categories.office.image}
                alt={categories.office.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-heading text-2xl font-bold text-white mb-1">
                  {categories.office.title}
                </h3>
                <p className="font-body text-sm font-medium text-slate-300">
                  {categories.office.count}
                </p>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Retail + Industrial */}
          <div className="flex flex-col gap-6 h-full">
            
            {/* Retail Card */}
            <div className="relative h-[300px] lg:h-1/2 w-full rounded-2xl overflow-hidden group cursor-pointer shadow-md border border-slate-100">
              <Image
                src={categories.retail.image}
                alt={categories.retail.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-heading text-2xl font-bold text-white mb-1">
                  {categories.retail.title}
                </h3>
                <p className="font-body text-sm font-medium text-slate-300">
                  {categories.retail.count}
                </p>
              </div>
            </div>

            {/* Industrial Card */}
            <div className="relative h-[300px] lg:h-1/2 w-full rounded-2xl overflow-hidden group cursor-pointer shadow-md border border-slate-100">
              <Image
                src={categories.industrial.image}
                alt={categories.industrial.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-heading text-2xl font-bold text-white mb-1">
                  {categories.industrial.title}
                </h3>
                <p className="font-body text-sm font-medium text-slate-300">
                  {categories.industrial.count}
                </p>
              </div>
            </div>
          </div>

          {/* COLUMN 3: IT Parks (Large Vertical) */}
          <div className="h-[500px] lg:h-full w-full">
            <div className="relative h-full w-full rounded-2xl overflow-hidden group cursor-pointer shadow-md border border-slate-100">
              <Image
                src={categories.itPark.image}
                alt={categories.itPark.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-heading text-3xl font-bold text-white mb-2">
                  {categories.itPark.title}
                </h3>
                <p className="font-body text-base font-medium text-slate-300 mb-6">
                  {categories.itPark.count}
                </p>
                
                {/* Hover Interaction CTA */}
                <div className="flex items-center gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-300">
                  <span className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                    View Listings
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