'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, Building2, Users2, Trophy } from "lucide-react";

// --- ANIMATION UTILITIES ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const imageReveal: Variants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1.2 } }
};

// --- COMPONENTS ---

// 1. HERO: Cinematic & Silver
const Hero = () => {
  return (
    <section className="relative h-[85vh] lg:h-[90vh] flex flex-col justify-end pb-20 bg-[#0F172A] overflow-hidden">
      
      {/* Background Image with Slow Zoom */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={imageReveal}
          className="relative w-full h-full"
        >
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
            alt="Architecture" 
            fill
            className="object-cover opacity-80"
            priority
          />
          {/* Multi-layer Gradient for Readability & Mood */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/80 to-transparent"></div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp}
          className="max-w-4xl"
        >
          {/* Brand Label Pattern */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-[#EF4444]"></div>
            <span className="font-heading text-[#EF4444] text-xs font-bold uppercase tracking-[0.5em]">
              Est. 2024
            </span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.1] tracking-tight mb-8">
            The Art of <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Modern Living.
            </span>
          </h1>
          
          <p className="font-body text-slate-300 text-lg md:text-xl font-light max-w-xl leading-relaxed border-l-2 border-white/20 pl-6">
            LeaseEzy is not just a brokerage. We are the curators of your next chapter, blending data-driven precision with the art of hospitality.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// 2. INTRODUCTION: The Silver Gradient Section + Contextual CTA
const Introduction = () => {
  return (
    // SILVER GRADIENT BACKGROUND
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-[#E8EAEF] to-[#D1D5DB] z-0" />
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/60 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Sticky Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0F172A] mb-8 leading-tight">
              Beyond the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] to-[#0F172A]">
                Transaction.
              </span>
            </h2>
            
            {/* CTA #1: CONTEXTUAL & ELEGANT */}
            <div className="hidden lg:block">
              <Link href="/properties" className="group flex items-center gap-4 text-[#0F172A] font-heading font-bold text-sm uppercase tracking-widest hover:text-[#EF4444] transition-colors">
                <span className="border-b border-[#0F172A] pb-1 group-hover:border-[#EF4444] transition-colors">
                  View Our Collection
                </span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </div>

          {/* Narrative Text */}
          <div className="lg:col-span-7 space-y-10 font-body text-slate-600 text-lg leading-relaxed">
            <p>
              <span className="text-[#0F172A] font-bold text-xl">The real estate landscape has changed.</span> Clients no longer need just an agent; they need a strategic partner. A partner who understands that a property is not merely an asset class—it is the foundation of a lifestyle and the cornerstone of a business legacy.
            </p>
            <p>
              At LeaseEzy, we recognized a void in the market for a firm that operates at the intersection of <strong>luxury hospitality</strong> and <strong>investment banking</strong>. We stripped away the noise, the clutter, and the opacity that plagues the industry.
            </p>
            
            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-300/50">
              <div className="group">
                <h3 className="flex items-center gap-2 font-heading text-[#0F172A] font-bold text-lg mb-2 group-hover:text-[#1D4ED8] transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#EF4444]" /> Precision
                </h3>
                <p className="text-sm text-slate-500">
                  Every recommendation is backed by hyper-local data and rigorous market analysis. We don't guess; we know.
                </p>
              </div>
              <div className="group">
                <h3 className="flex items-center gap-2 font-heading text-[#0F172A] font-bold text-lg mb-2 group-hover:text-[#1D4ED8] transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#EF4444]" /> Discretion
                </h3>
                <p className="text-sm text-slate-500">
                  We protect your privacy with the same vigor as we protect your capital. Your business remains yours.
                </p>
              </div>
            </div>

            {/* Mobile Only CTA */}
            <div className="block lg:hidden pt-6">
              <Link href="/properties" className="inline-flex items-center gap-2 text-[#EF4444] font-bold uppercase tracking-widest text-sm">
                View Collection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// 3. STATS: Dark Glass on Navy
const Stats = () => {
  const stats = [
    { label: "Assets Managed", value: "₹500Cr+", icon: <Trophy className="w-6 h-6 text-[#FBBF24]" /> },
    { label: "Verified Listings", value: "2,500+", icon: <CheckCircle2 className="w-6 h-6 text-[#1D4ED8]" /> },
    { label: "Client Retention", value: "98%", icon: <Users2 className="w-6 h-6 text-[#EF4444]" /> },
    { label: "Cities Active", value: "12", icon: <Building2 className="w-6 h-6 text-emerald-500" /> },
  ];

  return (
    <section className="bg-[#0F172A] py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-4 bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="font-heading text-4xl font-bold text-white tracking-tight mb-2">
                {stat.value}
              </h3>
              <p className="font-heading text-xs font-bold text-slate-400 uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 4. THE JOURNEY: Magazine Layout
const TheJourney = () => {
  const milestones = [
    {
      year: "2023",
      title: "The Inception",
      desc: "LeaseEzy was conceptualized in Ahmedabad with a singular vision: to digitize and elevate the fragmented property leasing market.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800"
    },
    {
      year: "2024",
      title: "The Expansion",
      desc: "Within 12 months, we secured exclusive leasing rights for 3 major commercial hubs in GIFT City, establishing our dominance in the B2B sector.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"
    },
    {
      year: "Future",
      title: "The Horizon",
      desc: "We are developing proprietary AI tools to predict rental yields with 99% accuracy, setting a new benchmark for investment tech.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center lg:text-left">
        <h2 className="font-heading text-4xl font-bold text-[#0F172A] mb-4">Our Chronicle</h2>
        <p className="font-body text-slate-500 text-lg max-w-xl mx-auto lg:mx-0">A timeline of ambition, execution, and trust.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {milestones.map((item, i) => (
          <div key={i} className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Visual Side */}
            <div className="flex-1 w-full relative group">
               <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" 
                  />
                  {/* Subtle Silver Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A]/40 to-transparent mix-blend-multiply"></div>
               </div>
               {/* Decorative Year */}
               <span className="absolute -top-10 -left-6 md:-left-10 text-8xl md:text-9xl font-extrabold text-slate-100 z-[-1] select-none font-heading">
                 {item.year}
               </span>
            </div>

            {/* Content Side */}
            <div className="flex-1 space-y-6">
               <div className="flex items-center gap-4">
                  <span className="font-heading text-[#EF4444] text-sm font-bold uppercase tracking-[0.3em]">
                    Chapter 0{i+1}
                  </span>
                  <div className="h-[1px] w-12 bg-slate-300"></div>
               </div>
               <h3 className="font-heading text-3xl md:text-4xl font-bold text-[#0F172A] leading-tight">
                 {item.title}
               </h3>
               <p className="font-body text-slate-600 text-lg leading-relaxed">
                 {item.desc}
               </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

// 5. THE PHILOSOPHY: Premium Dark Section
const Philosophy = () => {
  return (
    <section className="py-32 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Accent Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1D4ED8] opacity-10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <span className="font-heading text-[#EF4444] text-xs font-bold uppercase tracking-[0.3em]">Our Ethos</span>
            <h2 className="font-heading text-4xl md:text-6xl font-bold mt-6 mb-8 leading-tight">
              Standards <br/> over Sales.
            </h2>
            <p className="font-body text-slate-400 text-lg leading-relaxed max-w-md">
              We decline more listings than we accept. Why? Because we only represent properties that meet our stringent criteria for quality, legality, and value.
            </p>
          </div>

          <div className="space-y-12">
             {[
               { title: "Transparency", text: "We believe the fine print should be as clear as the headline. Zero hidden clauses." },
               { title: "Speed", text: "Time is the ultimate luxury. Our processes are engineered to save yours." },
               { title: "Network", text: "Access to off-market pockets that never reach public portals." }
             ].map((item, i) => (
               <div key={i} className="group cursor-default">
                  <div className="flex items-baseline justify-between border-b border-white/10 pb-4 mb-4 group-hover:border-[#EF4444] transition-colors duration-500">
                    <h3 className="font-heading text-2xl font-semibold text-white group-hover:text-[#EF4444] transition-colors">{item.title}</h3>
                    <span className="text-[#EF4444] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-4 group-hover:translate-x-0">
                      <ArrowRight size={24}/>
                    </span>
                  </div>
                  <p className="font-body text-slate-400 text-sm max-w-sm leading-relaxed">{item.text}</p>
               </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// 6. LEADERSHIP: Clean Portrait Grid
const Leadership = () => {
  const leaders = [
    { name: "Rajesh Malhotra", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" },
    { name: "Sneha Patel", role: "Director of Leasing", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" },
    { name: "Vikram Singh", role: "Head of Investments", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
             <h2 className="font-heading text-4xl font-bold text-[#0F172A]">The Stewardship</h2>
             <p className="font-body text-slate-500 mt-2 text-lg">Guiding your investments with experience.</p>
          </div>
          <Link href="/careers" className="text-[#0F172A] border-b-2 border-[#0F172A] pb-1 text-sm font-bold uppercase tracking-widest hover:text-[#EF4444] hover:border-[#EF4444] transition-all">
             Join the Team
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {leaders.map((leader, i) => (
            <div key={i} className="group relative">
               <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 mb-6 shadow-md">
                 <Image 
                   src={leader.img} 
                   alt={leader.name} 
                   fill 
                   className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" 
                 />
                 {/* Blue Overlay on Hover */}
                 <div className="absolute inset-0 bg-[#1D4ED8]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"></div>
               </div>
               <h3 className="font-heading text-xl font-bold text-[#0F172A]">{leader.name}</h3>
               <p className="font-heading text-[#EF4444] text-xs font-bold uppercase tracking-widest mt-1">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 7. CTA #2: THE PREMIUM TRANSITION (Replacing MinimalCTA)
const PremiumCTA = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative w-full max-w-6xl bg-[#0F172A] rounded-3xl overflow-hidden shadow-2xl"
      >
        {/* Abstract Background Art */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Home"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/40"></div>
        </div>

        <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Ready to elevate your <br/> real estate experience?
            </h2>
            <p className="font-body text-slate-300 text-lg leading-relaxed">
              Whether you are buying, selling, or leasing, our expert consultants are ready to guide you home.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/properties">
              <button className="group relative px-8 py-4 bg-[#EF4444] text-white font-heading font-bold text-sm uppercase tracking-widest rounded-lg overflow-hidden transition-all hover:bg-red-600 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                <span className="relative z-10 flex items-center gap-2">
                  Browse Listings <ArrowRight className="w-4 h-4"/>
                </span>
              </button>
            </Link>
            
            <Link href="/contact">
              <button className="px-8 py-4 bg-transparent border border-white/30 text-white font-heading font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-white hover:text-[#0F172A] transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// --- MAIN PAGE LAYOUT ---

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#EF4444] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Stats />
        <TheJourney />
        <Philosophy />
        <Leadership />
        <PremiumCTA />
      </main>
      <Footer />
    </div>
  );
}