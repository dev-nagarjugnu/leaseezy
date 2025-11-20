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
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Mukul Chopra',
    title: 'Group CFO',
    company: 'NorthBay Logistics',
    quote:
      'From diligence to documentation, every touchpoint felt premium. LeaseEzy shielded us from surprises and helped us close on time, every time.',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Aparna Kale',
    title: 'India Site Lead',
    company: 'Synapse Labs',
    quote:
      'We opened three satellite offices across India with LeaseEzy. Their on-ground intelligence meant zero blind spots and a seamless launch for our teams.',
    image: 'https://images.unsplash.com/photo-1544723795-432537f32b37?auto=format&fit=crop&w=500&q=80',
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonials[activeIndex];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-slate-50 py-20 text-brand-navy">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr]">
          <div className="flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-red">Testimonials</p>
              <h2 className="text-3xl font-bold md:text-4xl">
                Leaders trust{' '}
                <span className="font-serif italic">
                  <span className="text-brand-navy">Lease</span>
                  <span className="text-brand-red">EZY</span>
                </span>{' '}
                with their flagship moves
              </h2>
              <p className="text-base text-slate-600 md:text-lg">
                Hear from founders, CFOs, and workplace leaders who rely on us for precision advisory, transparent
                negotiations, and swift turnarounds.
              </p>
            </div>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={handlePrev}
                className="rounded-full border border-brand-navy/20 bg-white/80 p-3 text-brand-navy shadow-sm backdrop-blur transition hover:bg-brand-navy hover:text-white"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="rounded-full border border-brand-navy/20 bg-white/80 p-3 text-brand-navy shadow-sm backdrop-blur transition hover:bg-brand-navy hover:text-white"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="rounded-[2.5rem] border border-white/70 bg-white p-8 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.35)] sm:p-10"
            >
              <Quote className="h-10 w-10 text-brand-red" />
              <p className="mt-6 text-lg leading-relaxed text-brand-navy">{current.quote}</p>
              <div className="mt-10 flex items-center gap-5">
                <div className="relative h-20 w-28 overflow-hidden rounded-[999px] border border-slate-100 shadow-lg">
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
                <div>
                  <p className="text-xl font-semibold text-brand-navy">{current.name}</p>
                  <p className="text-sm text-slate-500">
                    {current.title}, {current.company}
                  </p>
                </div>
              </div>

              <div className="mt-10 flex gap-3">
                {testimonials.map((testimonial, index) => (
                  <span
                    key={testimonial.name}
                    className={`h-2 w-10 rounded-full transition ${
                      index === activeIndex ? 'bg-brand-red' : 'bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

