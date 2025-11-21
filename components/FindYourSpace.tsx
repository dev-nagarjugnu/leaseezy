'use client';

'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function FindYourSpace() {
  const waveRef = useRef<SVGSVGElement | null>(null);
  const waveInView = useInView(waveRef, { amount: 0.6 });

  return (
    <section className="bg-white py-16 text-[#0F172A] md:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-start md:gap-20 md:px-8">
        {/* Left Side */}
        <div className="flex w-full flex-col md:w-1/2 md:max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.55em] text-[#94a3b8]">
            We provide the best properties for you.
          </p>
          <div className="mt-3">
            <p className="font-heading text-4xl font-extrabold text-[#0B1120] sm:text-5xl">Find Your Place</p>
            <div className="mt-2 inline-block">
              <p
                className="font-heading text-4xl font-extrabold sm:text-5xl"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '2px #cfd6e3',
                }}
              >
                Find Your Space
              </p>
              <motion.svg ref={waveRef} viewBox="0 0 320 40" className="mt-1 h-8 w-full">
                <motion.path
                  d="M10 25 C 80 10, 160 10, 310 25"
                  stroke="#cfd6e3"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: waveInView ? 1 : 0 }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                />
              </motion.svg>
            </div>
            <p className="mt-4 font-heading text-4xl font-extrabold text-[#0B1120] sm:text-5xl">Choose LeaseEzy</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { stat: '1,500+', label: 'Happy Families' },
              { stat: '1,000+', label: 'Luxury Properties' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[28px] bg-gradient-to-r from-[#1f2937] via-[#4b5563] to-[#e5e9f2] p-6 text-center shadow-lg transition hover:scale-[1.01] hover:from-[#273042] hover:via-[#556072] hover:to-[#f0f2f7]"
              >
                <p className="text-2xl font-extrabold text-white">{item.stat}</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Arch Image */}
        <div className="flex w-full flex-1 items-start justify-center md:w-1/2">
          <div className="relative h-[32rem] w-[30rem] overflow-hidden rounded-t-[220px] rounded-b-[56px] bg-white/80 shadow-[0_25px_60px_rgba(15,23,42,0.2)] backdrop-blur">
            <div className="pointer-events-none absolute inset-0 rounded-t-[210px] rounded-b-[48px] border border-white/30">
              <div className="absolute inset-0 rounded-t-[210px] rounded-b-[48px] border-[4px] border-transparent border-b-0 bg-gradient-to-r from-white/70 via-white/20 to-white/70" />
            </div>
            <Image
              src="/choose-leaseezy.jpg"
              alt="Premium commercial tower at night"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 45vw"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center text-center px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-red">
          Our Philosophy
        </p>
        <h3 className="mt-3 text-3xl font-bold text-[#0F172A]">
          How <span className="italic text-brand-red">LeaseEzy</span> Delivers More Than Just Real Estate Services
        </h3>
        <p className="mt-2 text-sm font-semibold text-slate-500">
          We focus on client satisfaction.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          LeaseEzy is changing the way commercial real estate works. We offer expert advice, smart digital tools, and
          always put our clients first. Our team helps enterprises secure headquarters and offices across every major
          Indian business hub. A strong network of developers and reliable leasing strategies ensure every deal is
          transparent and swift. Results are delivered through clear communication, data-backed insights, and white-glove
          execution.
        </p>
        <button className="mt-6 rounded-full bg-gradient-to-r from-[#f8fafc] to-[#e2e8f0] px-8 py-3 text-sm font-semibold text-[#0F172A] shadow-lg transition hover:from-[#f1f5f9] hover:to-[#cbd5f5]">
          Explore More
        </button>
      </div>
    </section>
  );
}

export default FindYourSpace;
