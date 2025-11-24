'use client';

import { motion } from 'framer-motion';
import { Building2, Users, Key, ArrowRight, MapPin } from 'lucide-react';

export function TrustCTASection() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      
      {/* 
        1. THE SILVER GRADIENT BACKGROUND 
        "Somewhere light, somewhere dark" effect using a complex gradient mesh.
      */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-[#E8EAEF] to-[#D1D5DB] z-0" />
      
      {/* Ambient Silver/Light Orbs for Depth */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/60 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-300/30 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Content */}
          <div className="max-w-xl">
            {/* Brand Label */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-brand-red">
                
              </span>
            </motion.div>

            {/* Heading - Navy Text on Silver Background */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] leading-[1.1] mb-6"
            >
              Experience the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] to-slate-500">
                Art of Living.
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-body text-lg text-slate-600 leading-relaxed mb-10 max-w-lg"
            >
              We don't just find you a house; we curate a lifestyle. 
              Join thousands of happy tenants and landlords in the 
              most seamless leasing ecosystem.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <button className="group relative inline-flex items-center gap-4 rounded-full px-10 py-4 font-heading text-base font-semibold text-white tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-200 focus-visible:ring-offset-transparent">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 transition-all duration-300 group-hover:from-slate-800 group-hover:via-slate-700 group-hover:to-slate-600" />
                <span className="absolute inset-1 rounded-full border border-white/20 bg-white/5 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.9)] transition-all duration-300 group-hover:border-white/40" />
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* RIGHT SIDE: The Semi-Translucent Glass Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Card 1: Silver Glass Effect */}
            <GlassCard 
              icon={<Building2 className="w-6 h-6 text-[#1D4ED8]" />}
              bgIcon="bg-blue-50"
              number="500+"
              label="Verified Properties"
              delay={0.1}
            />

            {/* Card 2: Highlighted Glass Effect */}
            <GlassCard 
              icon={<Users className="w-6 h-6 text-[#EF4444]" />}
              bgIcon="bg-red-50"
              number="12K+"
              label="Happy Tenants"
              isHighlight
              delay={0.2}
            />

            {/* Card 3 */}
            <GlassCard 
              icon={<MapPin className="w-6 h-6 text-emerald-600" />}
              bgIcon="bg-emerald-50"
              number="15+"
              label="Major Cities"
              delay={0.3}
            />

            {/* Card 4 */}
            <GlassCard 
              icon={<Key className="w-6 h-6 text-[#FBBF24]" />}
              bgIcon="bg-amber-50"
              number="08"
              label="Years Excellence"
              delay={0.4}
            />

          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Glass Card Component
function GlassCard({ icon, bgIcon, number, label, isHighlight = false, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`
        relative p-8 rounded-2xl border backdrop-blur-md transition-all duration-300
        ${isHighlight 
          ? 'bg-white/80 border-white/60 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]' 
          : 'bg-white/40 border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:bg-white/60'
        }
      `}
    >
      {/* Glossy Reflection Gradient on top */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/60 to-transparent opacity-50 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-start gap-4">
        {/* Icon Container */}
        <div className={`w-12 h-12 rounded-xl ${bgIcon} flex items-center justify-center shadow-sm`}>
          {icon}
        </div>
        
        <div>
          <h3 className="font-heading text-3xl font-bold text-[#0F172A] mb-1">
            {number}
          </h3>
          <p className="font-body text-xs font-bold uppercase tracking-wider text-slate-500">
            {label}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default TrustCTASection;