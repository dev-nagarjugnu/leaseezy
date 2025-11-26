'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, ShieldCheck, Scale, 
  HelpCircle, CheckCircle2, ArrowRight, 
  Building, ScrollText, TrendingUp, Gavel
} from 'lucide-react';

// --- COMPONENTS ---

// 1. HERO: Educational & Welcoming
const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-brand-navy">
      {/* Abstract Background Art */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="h-0.5 w-8 bg-brand-red"></span>
            <span className="font-heading text-xs font-bold uppercase tracking-[0.5em] text-brand-red block">
              The Knowledge Hub
            </span>
            <span className="h-0.5 w-8 bg-brand-red"></span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            Clarity in a Complex <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-400">
              Commercial Landscape.
            </span>
          </h1>
          <p className="font-body text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Commercial leasing in India is often clouded by complex jargon and opaque compliance norms. 
            We are here to demystify the terms, standardize the procedure, and protect your business interests.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// 2. THE JARGON BUSTER: Decoding Commercial Real Estate
const JargonBuster = () => {
  const terms = [
    {
      icon: <ScrollText className="w-6 h-6 text-brand-navy" />,
      title: "Warm Shell vs. Fitted Out",
      desc: "Knowing the difference impacts your CAPEX. A 'Warm Shell' offers basic flooring and HVAC, while 'Fitted Out' is plug-and-play. We help you calculate the true cost of occupancy for both."
    },
    {
      icon: <Scale className="w-6 h-6 text-brand-red" />,
      title: "Lock-in Period & Exit",
      desc: "Commercial leases typically have a 3-year lock-in. We negotiate 'Dip Clauses' and 'Force Majeure' protections to ensure your business isn't trapped if market conditions shift."
    },
    {
      icon: <Building className="w-6 h-6 text-brand-navy" />,
      title: "CAM Charges (Maintenance)",
      desc: "Common Area Maintenance (CAM) can add 15-20% to your rent. We audit these charges upfront to ensure you aren't paying for capital improvements that the landlord should bear."
    },
    {
      icon: <Gavel className="w-6 h-6 text-brand-red" />,
      title: "Lease Registration",
      desc: "For leases over 11 months, registration is mandatory. We handle the stamping and legal compliance digitally, ensuring your contract is enforceable in court."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Decoding the Fine Print
          </h2>
          <p className="font-body text-slate-500 text-lg">
            Understanding the terms before you sign. We believe an informed client makes better decisions.
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
              className="group p-8 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 hover:shadow-xl hover:border-brand-navy/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-navy mb-3">
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
          <Link href="/contact-us" className="inline-flex items-center gap-2 text-brand-red font-heading font-bold text-sm uppercase tracking-widest hover:text-brand-navy transition-colors border-b border-transparent hover:border-brand-navy pb-1">
            Have a specific legal question? Ask our experts <ArrowRight className="w-4 h-4"/>
          </Link>
        </div>

      </div>
    </section>
  );
};

// 3. THE LEASEEZY PROTOCOL: Vertical Process Timeline
const TheProtocol = () => {
  const steps = [
    {
      num: "01",
      title: "Requirement Analysis",
      desc: "We analyze your business model, headcount growth, and client proximity needs to create a tailored 'Space Efficiency' report."
    },
    {
      num: "02",
      title: "Due Diligence",
      desc: "Before shortlisting, we check the building's OC (Occupancy Certificate), Fire Safety Compliance, and Title Clearances to mitigate legal risk."
    },
    {
      num: "03",
      title: "Structured Negotiation",
      desc: "We mediate the term sheet professionally. We ensure fair rent escalation clauses, clear fit-out periods, and documented inventory lists."
    },
    {
      num: "04",
      title: "Digital Handover",
      desc: "From agreement signing to key handover, we manage the entire lifecycle digitally. Your team walks into a fully compliant, ready-to-work office."
    }
  ];

  return (
    <section className="py-24 bg-brand-gray relative overflow-hidden">
      {/* Silver Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-brand-navy mb-4">
            The LeaseEzy Protocol
          </h2>
          <p className="font-body text-slate-600 max-w-2xl mx-auto">
            A standardized, transparent workflow designed for modern enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-slate-300 z-0"></div>

          {steps.map((step, i) => (
            <div key={i} className="relative z-10">
              {/* Number Bubble */}
              <div className="w-16 h-16 rounded-full bg-brand-navy text-white flex items-center justify-center font-heading font-bold text-xl border-4 border-slate-200 mb-6 shadow-lg mx-auto md:mx-0">
                {step.num}
              </div>
              
              <h3 className="font-heading text-xl font-bold text-brand-navy mb-3 text-center md:text-left">
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
          <Link href="/contact-us">
             <button className="px-8 py-3 bg-white border border-brand-navy text-brand-navy rounded-full font-heading font-bold text-xs uppercase tracking-widest hover:bg-brand-navy hover:text-white transition-all shadow-sm">
                Initiate Protocol
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
    <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-red opacity-10 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-[2px] bg-brand-red"></div>
               <span className="font-heading text-brand-red text-xs font-bold uppercase tracking-[0.5em]">
                 Our Ethics
               </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              No Ambiguity. <br/> No Hidden Costs.
            </h2>
            <p className="font-body text-slate-400 text-lg leading-relaxed mb-8">
              The Indian real estate market is notorious for opacity. We operate with 100% white-collar compliance and clear audit trails.
            </p>
            <ul className="space-y-4">
              {[
                "100% Digital Transaction Trail",
                "Strict Anti-Bribery Policy",
                "Standardized Commission Structures"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-heading text-sm font-semibold tracking-wide text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-brand-red" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl">
             <div className="space-y-6">
                <div className="flex gap-4">
                   <HelpCircle className="w-6 h-6 text-brand-yellow shrink-0 mt-1" />
                   <div>
                     <h4 className="font-heading font-bold text-lg mb-1">What if the landlord defaults?</h4>
                     <p className="font-body text-sm text-slate-400">Our contracts include strict indemnity clauses. If a dispute arises, LeaseEzy provides documented evidence and legal mediation support.</p>
                   </div>
                </div>
                <div className="w-full h-[1px] bg-white/10"></div>
                <div className="flex gap-4">
                   <FileText className="w-6 h-6 text-brand-red shrink-0 mt-1" />
                   <div>
                     <h4 className="font-heading font-bold text-lg mb-1">Are CAM charges fixed?</h4>
                     <p className="font-body text-sm text-slate-400">They vary. We ensure that CAM charges are capped or audited annually so you aren't paying for the landlord's asset appreciation.</p>
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
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-8">
           Ready for a seamless experience?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
           <Link href="/contact-us">
             <button className="px-10 py-4 bg-brand-navy text-white font-heading font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-slate-800 transition-colors shadow-lg w-full sm:w-auto">
               Speak to a Consultant
             </button>
           </Link>
           <Link href="/properties">
             <button className="px-10 py-4 bg-white text-brand-navy border border-brand-navy font-heading font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-slate-50 transition-colors w-full sm:w-auto">
               View Asset Catalog
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