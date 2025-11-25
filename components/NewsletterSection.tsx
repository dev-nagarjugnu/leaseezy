'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    // relative is needed here so the absolute positioning inside works relative to this section
    <section className="relative w-full">
      
      {/* Background Image Container */}
      {/* Added 'z-0' to ensure image stays behind */}
      <div className="relative h-[400px] w-full z-0">
        <Image
          src="/results.jpeg"
          alt="Cityscape background"
          fill
          className="object-cover object-center"
          priority
          quality={75}
          sizes="100vw"
        />
        {/* Optional: Subtle dark overlay if your text needs more pop, currently removed based on your request */}
      </div>

      {/* 
        THE OVERLAP LOGIC:
        absolute: Removes it from flow
        bottom-0: Aligns to bottom line of image
        translate-y-1/2: Pushes it DOWN by 50% of its height (into the footer area)
        z-30: Ensures it sits ON TOP of the footer
      */}
      <div className="absolute bottom-0 left-0 right-0 z-30 flex justify-center px-4 translate-y-1/2 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[1100px] bg-white shadow-2xl rounded-lg overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-10 gap-6 lg:gap-10">
            
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-1 flex-shrink-0">
              <h3 className="text-xl sm:text-2xl font-bold text-[#D12F68]">
                Do not miss any updates.
              </h3>
              <p className="text-2xl sm:text-3xl font-bold text-[#0F4C81]">
                Subscribe to the newsletter
              </p>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="w-full lg:w-auto lg:flex-1 lg:max-w-[500px]">
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-5 py-4 text-base text-gray-700 bg-white border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-tr-none focus:outline-none focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#075E9B] hover:bg-[#054a7a] text-white font-bold text-sm uppercase tracking-wider rounded-b-md sm:rounded-r-md sm:rounded-bl-none transition-colors duration-200 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default NewsletterSection;