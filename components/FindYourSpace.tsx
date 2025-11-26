'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function FindYourSpace() {
  const waveRef = useRef<SVGSVGElement | null>(null);
  const waveInView = useInView(waveRef, { amount: 0.6 });

  return (
    <section className="bg-white py-20 lg:py-28 text-brand-navy">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 lg:flex-row lg:items-center lg:gap-24 lg:px-8">
        
        {/* Left Side: Text Content */}
        <div className="flex w-full flex-col lg:w-1/2">
          <div className="mb-6">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-bold uppercase tracking-widest mb-4">
              Premium Commercial Advisory
            </span>
            
            <h2 className="font-heading text-4xl font-extrabold text-brand-navy sm:text-5xl leading-tight">
              Find Your Place. <br />
              <span className="relative inline-block mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-navy">
                  Define Your Space.
                </span>
                
                {/* Wave Animation */}
                <motion.svg ref={waveRef} viewBox="0 0 320 30" className="absolute -bottom-4 left-0 w-full h-auto">
                  <motion.path
                    d="M10 15 Q 80 5, 150 15 T 300 15"
                    stroke="#EF4444"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: waveInView ? 1 : 0, opacity: waveInView ? 1 : 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                </motion.svg>
              </span>
            </h2>
          </div>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-lg">
            We simplify the complex landscape of commercial real estate. 
            From startups to Fortune 500s, we help businesses find their perfect headquarters.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              { stat: '1,200+', label: 'Corporate Clients' }, // Changed from "Happy Families"
              { stat: '500+', label: 'Premium Assets' },      // Changed from "Luxury Properties"
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:border-brand-navy/10"
              >
                <p className="text-3xl font-bold text-brand-navy">{item.stat}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Arch Image */}
        <div className="flex w-full flex-1 justify-center lg:w-1/2">
          <div className="relative h-[500px] w-full max-w-md overflow-hidden rounded-t-[200px] rounded-b-[40px] shadow-2xl shadow-brand-navy/20">
            <Image
              src="/choose-leaseezy.jpg"
              alt="Modern glass corporate tower"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent mix-blend-multiply" />
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="mt-24 bg-brand-gray py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4">
            Our Philosophy
          </p>
          <h3 className="text-3xl font-bold text-brand-navy sm:text-4xl mb-6">
            More Than Just <span className="text-brand-red italic">Leasing.</span>
          </h3>
          <p className="text-lg leading-relaxed text-slate-600 mb-10">
            LeaseEzy is changing the way commercial real estate works. We offer expert advice, 
            smart digital tools, and data-backed insights. Our team helps enterprises secure 
            headquarters and offices across every major Indian business hub.
          </p>
          
          <Link 
            href="/about"
            className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-8 py-4 text-sm font-bold text-white shadow-lg shadow-navy-500/30 transition-all hover:bg-brand-red hover:shadow-red-500/30 hover:-translate-y-1"
          >
            Explore Our Vision
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FindYourSpace;