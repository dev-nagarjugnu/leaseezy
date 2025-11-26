'use client';

import Image from 'next/image';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type Testimonial = {
  name: string;
  title: string;
  company: string;
  quote: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Raajita Jain',
    title: 'Principal Designer',
    company: 'Architecture Plus',
    quote:
      'LeaseEzy has been our trusted partner for flagship studio expansions. Their team is proactive, data-led, and always two steps ahead during negotiations.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80', // Updated to a more corporate headshot
  },
  {
    name: 'Mukul Chopra',
    title: 'Group CFO',
    company: 'NorthBay Logistics',
    quote:
      'From diligence to documentation, every touchpoint felt premium. LeaseEzy shielded us from surprises and helped us close on time, every time.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80', // Corporate male
  },
  {
    name: 'Aparna Kale',
    title: 'India Site Lead',
    company: 'Synapse Labs',
    quote:
      'We opened three satellite offices across India with LeaseEzy. Their on-ground intelligence meant zero blind spots and a seamless launch for our teams.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80', // Corporate female
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonials[activeIndex];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-white py-20 lg:py-28 text-brand-navy border-t border-slate-100">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr,1.2fr] items-center">
          
          {/* Left Side: Controls & Text */}
          <div className="flex flex-col justify-between gap-10">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-8 bg-brand-red"></span>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  Client Success
                </p>
              </div>
              
              <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl text-brand-navy">
                Trusted by Industry <br />
                <span className="text-slate-500">Leaders.</span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                Hear from CFOs and Workplace Leaders who rely on us for precision advisory and transparent negotiations.
              </p>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={handlePrev}
                className="group rounded-full border border-slate-200 bg-white p-4 text-brand-navy transition-all hover:bg-brand-navy hover:text-white hover:border-brand-navy"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="group rounded-full border border-slate-200 bg-white p-4 text-brand-navy transition-all hover:bg-brand-navy hover:text-white hover:border-brand-navy"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Side: Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative rounded-3xl bg-brand-navy p-8 shadow-2xl shadow-slate-200 sm:p-12"
              >
                {/* Background Decor */}
                <Quote className="absolute top-8 right-8 h-24 w-24 text-white/5 rotate-180" />
                
                <div className="relative z-10">
                  <div className="mb-8 flex gap-1">
                     {[...Array(5)].map((_, i) => (
                       <svg key={i} className="w-5 h-5 text-brand-yellow fill-current" viewBox="0 0 20 20">
                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                       </svg>
                     ))}
                  </div>

                  <p className="text-xl font-medium leading-relaxed text-white">
                    "{current.quote}"
                  </p>
                  
                  <div className="mt-10 flex items-center gap-5 border-t border-white/10 pt-8">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-brand-red">
                      <Image
                        src={current.image}
                        alt={current.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white">{current.name}</p>
                      <p className="text-sm font-medium text-slate-400">
                        {current.title}, {current.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Decoration Behind Card */}
            <div className="absolute -z-10 top-6 -right-6 h-full w-full rounded-3xl bg-brand-red/5" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;