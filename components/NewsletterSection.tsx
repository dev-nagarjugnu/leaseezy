'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <section className="relative w-full">
      
      {/* Background Image Container */}
      <div className="relative h-[400px] w-full z-0">
        <Image
          src="/results.jpeg"
          alt="Modern city skyline at dusk"
          fill
          className="object-cover object-center"
          priority
          quality={75}
          sizes="100vw"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-brand-navy/60" />
      </div>

      {/* Floating Card */}
      <div className="absolute bottom-0 left-0 right-0 z-30 flex justify-center px-6 translate-y-1/2 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-5xl bg-white shadow-2xl shadow-brand-navy/10 rounded-2xl overflow-hidden border border-slate-100"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 gap-8">
            
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-2 flex-shrink-0">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse"/>
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-red">
                  LeaseEzy Intelligence
                </h3>
              </div>
              <p className="font-heading text-3xl font-bold text-brand-navy">
                Get Market Insights Weekly.
              </p>
              <p className="text-slate-500 max-w-md">
                Join 5,000+ investors and tenants receiving our analysis on rental trends and off-market opportunities.
              </p>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="w-full lg:flex-1 lg:max-w-md">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  className="w-full px-5 py-4 text-sm text-brand-navy bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy placeholder:text-slate-400 transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-brand-navy hover:bg-slate-800 text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-all duration-300 shadow-lg shadow-navy-500/20 flex items-center justify-center gap-2"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-[10px] text-slate-400 mt-3 text-center lg:text-left">
                No spam. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default NewsletterSection;