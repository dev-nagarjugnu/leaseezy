'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FileText, ShieldCheck, Scale, 
  HelpCircle, CheckCircle2, ArrowRight, 
  Building, ScrollText 
} from 'lucide-react';

// --- COMPONENTS ---

// 1. HERO: Educational & Welcoming
const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0F172A]">
      {/* Abstract Background Art */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1D4ED8] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#EF4444] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-heading text-xs font-bold uppercase tracking-[0.5em] text-[#EF4444] mb-6 block">
            The Knowledge Hub
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            Clarity in a complex <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-400">
              Leasing Landscape.
            </span>
          </h1>
          <p className="font-body text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Real estate in India is often clouded by jargon and opaque processes. 
            We are here to demystify the terms, standardize the procedure, and protect your interests.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// 2. THE JARGON BUSTER: Decoding Indian Real Estate
// Purpose: Clear confusion about "Lease" vs "Rent Agreement", "Lock-in", etc.
const JargonBuster = () => {
  const terms = [
    {
      icon: <ScrollText className="w-6 h-6 text-[#1D4ED8]" />,
      title: "Lease vs. Leave & License",
      desc: "In India, most residential 'renting' is legally a 'Leave and License' agreement for 11 months. This protects the landlord's asset while giving the tenant flexibility. A 'Lease' is typically for long-term commercial use (9+ years)."
    },
    {
      icon: <Scale className="w-6 h-6 text-[#EF4444]" />,
      title: "The 'Lock-in' Period",
      desc: "A specific duration (usually 3-6 months) during which neither party can terminate the contract. We negotiate this to ensure you aren't trapped if your circumstances change unexpectedly."
    },
    {
      icon: <Building className="w-6 h-6 text-[#FBBF24]" />,
      title: "Security Deposit Norms",
      desc: "While 6-10 months is standard in cities like Bangalore/Mumbai, we leverage our market standing to negotiate rational deposits (often 2-4 months) for our verified corporate clients."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      title: "Police Verification",
      desc: "Mandatory by law in most Indian states. We handle this bureaucratic hurdle digitally, ensuring you remain compliant without visiting a police station."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Decoding the Fine Print
          </h2>
          <p className="font-body text-slate-500 text-lg">
            Understanding the terms before you sign. We believe an informed client is a happy client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {terms.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:border-slate-200 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#0F172A] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-slate-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA 1: Subtle Text Link */}
        <div className="mt-12 text-center md:text-left">
          <Link href="/contact" className="inline-flex items-center gap-2 text-[#1D4ED8] font-heading font-bold text-sm uppercase tracking-widest hover:text-[#0F172A] transition-colors border-b border-transparent hover:border-[#0F172A] pb-1">
            Have a specific legal question? Ask our experts <ArrowRight className="w-4 h-4"/>
          </Link>
        </div>

      </div>
    </section>
  );
};

// 3. THE LEASEEZY PROTOCOL: Vertical Process Timeline
// Purpose: Show the "Professional" way vs the "Random Broker" way
const TheProtocol = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery & Curation",
      desc: "We don't spam you with links. We interview you to understand your lifestyle, commute, and aesthetic preferences, then shortlist only 3-5 perfect matches."
    },
    {
      num: "02",
      title: "Asset Verification",
      desc: "Before you even see a property, our team verifies the ownership documents, checks for pending dues, and ensures the premise is 'Move-in Ready'."
    },
    {
      num: "03",
      title: "Structured Negotiation",
      desc: "We mediate the terms professionally. No emotional haggling. We ensure fair rent, clear maintenance clauses, and documented inventory lists."
    },
    {
      num: "04",
      title: "Digital Onboarding",
      desc: "E-stamping, biometric registration (where applicable), and digital key handover. A seamless transition into your new home."
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Silver Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-[#E8EAEF] to-[#D1D5DB]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0F172A] mb-4">
            The LeaseEzy Protocol
          </h2>
          <p className="font-body text-slate-600 max-w-2xl mx-auto">
            A standardized, transparent workflow designed to eliminate surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-slate-300 z-0"></div>

          {steps.map((step, i) => (
            <div key={i} className="relative z-10">
              {/* Number Bubble */}
              <div className="w-16 h-16 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-heading font-bold text-xl border-4 border-[#E8EAEF] mb-6 shadow-lg mx-auto md:mx-0">
                {step.num}
              </div>
              
              <h3 className="font-heading text-xl font-bold text-[#0F172A] mb-3 text-center md:text-left">
                {step.title}
              </h3>
              <p className="font-body text-sm text-slate-600 leading-relaxed text-center md:text-left">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA 2: Soft Button */}
        <div className="mt-20 flex justify-center">
          <Link href="/properties">
             <button className="px-8 py-3 bg-white border border-slate-300 text-[#0F172A] rounded-full font-heading font-bold text-xs uppercase tracking-widest hover:bg-[#0F172A] hover:text-white hover:border-[#0F172A] transition-all shadow-sm">
                Start The Protocol
             </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// 4. ETHICS & PROMISE: Glass Cards
const Ethics = () => {
  return (
    <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#1D4ED8] opacity-10 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-[2px] bg-[#EF4444]"></div>
               <span className="font-heading text-[#EF4444] text-xs font-bold uppercase tracking-[0.5em]">
                 Our Ethics
               </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              No Hidden Clauses. <br/> No "Cash" Components.
            </h2>
            <p className="font-body text-slate-400 text-lg leading-relaxed mb-8">
              The Indian real estate market is notorious for ambiguity. We built LeaseEzy to be the antidote. We operate with 100% white-collar compliance.
            </p>
            <ul className="space-y-4">
              {[
                "100% Digital Transaction Trail",
                "RERA Compliant Brokers Only",
                "Standardized Commission Structures (No Overcharging)"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-heading text-sm font-semibold tracking-wide text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#EF4444]" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl">
             <div className="space-y-6">
                <div className="flex gap-4">
                   <HelpCircle className="w-6 h-6 text-[#FBBF24] shrink-0 mt-1" />
                   <div>
                     <h4 className="font-heading font-bold text-lg mb-1">What if the landlord refuses to return the deposit?</h4>
                     <p className="font-body text-sm text-slate-400">Our legal team assists in drafting tight contracts with clear exit clauses. If a dispute arises, LeaseEzy provides documented evidence and mediation support.</p>
                   </div>
                </div>
                <div className="w-full h-[1px] bg-white/10"></div>
                <div className="flex gap-4">
                   <FileText className="w-6 h-6 text-[#1D4ED8] shrink-0 mt-1" />
                   <div>
                     <h4 className="font-heading font-bold text-lg mb-1">Are maintenance charges included in rent?</h4>
                     <p className="font-body text-sm text-slate-400">This varies by property. We ensure this is explicitly stated in the 'Key Terms Sheet' we provide before you even sign the agreement.</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// 5. FINAL CTA: Minimal & Premium
const FinalAction = () => {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F172A] mb-8">
           Ready for a seamless experience?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
           <Link href="/contact">
             <button className="px-10 py-4 bg-[#0F172A] text-white font-heading font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-[#EF4444] transition-colors shadow-lg w-full sm:w-auto">
               Speak to a Consultant
             </button>
           </Link>
           <Link href="/properties">
             <button className="px-10 py-4 bg-white text-[#0F172A] border border-[#0F172A] font-heading font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-slate-50 transition-colors w-full sm:w-auto">
               View Available Homes
             </button>
           </Link>
        </div>
      </div>
    </section>
  )
}

// --- MAIN PAGE ---

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <JargonBuster />
        <TheProtocol />
        <Ethics />
        <FinalAction />
      </main>
      <Footer />
    </div>
  );
}