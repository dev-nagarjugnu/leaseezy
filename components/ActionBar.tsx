'use client';

import { motion } from 'framer-motion';
import { Building2, Users, Key, ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';

export function TrustCTASection() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-white">
      
      {/* 
        Background Effects:
        Clean silver/gray gradient for a premium corporate feel.
      */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-white z-0" />
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-navy/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 z-0" />

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
                LeaseEzy Standards
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy leading-[1.1] mb-6"
            >
              Experience <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy to-slate-500">
                Strategic Leasing.
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-body text-lg text-slate-600 leading-relaxed mb-10 max-w-lg"
            >
              We don't just find you an office; we curate a workspace for your growth. 
              Join India's leading enterprises in the most seamless commercial leasing ecosystem.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link 
                href="/contact-us"
                className="group relative inline-flex items-center gap-4 rounded-lg px-10 py-4 font-heading text-base font-bold text-white tracking-wide shadow-xl shadow-navy-900/20 transition-all hover:-translate-y-1 bg-brand-navy hover:bg-slate-800"
              >
                <span>Partner With Us</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT SIDE: The Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Card 1 */}
            <GlassCard 
              icon={<Building2 className="w-6 h-6 text-brand-navy" />}
              bgIcon="bg-slate-100"
              number="500+"
              label="Verified Assets"
              delay={0.1}
            />

            {/* Card 2: Highlighted */}
            <GlassCard 
              icon={<Users className="w-6 h-6 text-brand-red" />}
              bgIcon="bg-red-50"
              number="12K+"
              label="Enterprise Clients"
              isHighlight
              delay={0.2}
            />

            {/* Card 3 */}
            <GlassCard 
              icon={<MapPin className="w-6 h-6 text-brand-navy" />}
              bgIcon="bg-slate-100"
              number="15+"
              label="Major Cities"
              delay={0.3}
            />

            {/* Card 4 */}
            <GlassCard 
              icon={<Key className="w-6 h-6 text-brand-yellow" />}
              bgIcon="bg-yellow-50"
              number="08"
              label="Years of Trust"
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
        relative p-8 rounded-xl border backdrop-blur-md transition-all duration-300
        ${isHighlight 
          ? 'bg-white border-brand-red/20 shadow-xl shadow-red-500/5' 
          : 'bg-white/60 border-slate-200 shadow-sm hover:shadow-md hover:border-brand-navy/20'
        }
      `}
    >
      <div className="relative z-10 flex flex-col items-start gap-4">
        {/* Icon Container */}
        <div className={`w-12 h-12 rounded-lg ${bgIcon} flex items-center justify-center`}>
          {icon}
        </div>
        
        <div>
          <h3 className="font-heading text-3xl font-bold text-brand-navy mb-1">
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