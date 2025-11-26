'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Buy',
    displayTitle: 'Acquisition', // More corporate term
    description:
      'Advisory-driven acquisition support for corporate HQs, flagship retail, and institutional portfolios across India’s top business districts.',
    image: '/buy.jpg',
  },
  {
    title: 'Sell',
    displayTitle: 'Disposition', // More corporate term
    description:
      'Structured exits with curated buyer pools, data-backed valuations, and seamless diligence that preserves momentum and pricing power.',
    image: '/sale.jpg',
  },
  {
    title: 'Rent',
    displayTitle: 'Corporate Leasing', // More corporate term
    description:
      'Plug-and-play leasing programs that match Grade-A spaces with enterprise tenants, backed by airtight documentation and on-ground ops.',
    image: '/rent.jpg',
  },
  {
    title: 'Invest',
    displayTitle: 'Capital Markets', // More corporate term
    description:
      'Access institutional-quality deal flow—offices, logistics, retail—complete with underwriting, capital partners, and turn-key asset management.',
    image: '/invest.jpg',
  },
];

export function ServiceHighlights() {
  return (
    <section className="bg-brand-gray py-20 lg:py-28 text-brand-navy">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-4 text-center md:text-left max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
            Our Expertise
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-brand-navy md:text-5xl">
            Tailored Real Estate Strategies
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            LeaseEzy orchestrates end-to-end commercial real estate journeys: identifying opportunities, structuring
            finance, negotiating leases, and unlocking new markets with zero friction.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md border border-slate-200 transition-all duration-500 hover:shadow-2xl hover:border-brand-navy/30 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-[300px] w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-left text-white">
                  <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading text-3xl font-bold">{service.displayTitle}</h3>
                      <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <ArrowUpRight className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceHighlights;