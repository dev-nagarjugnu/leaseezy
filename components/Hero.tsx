import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="w-full bg-white text-brand-navy">
      <div className="grid min-h-[85vh] w-full grid-cols-1 lg:grid-cols-2">
        
        {/* 1. TEXT SECTION (Left on Desktop for better readability) */}
        <div className="order-2 flex flex-col justify-center bg-brand-gray px-6 py-12 sm:px-10 sm:py-16 lg:order-1 lg:px-20 lg:py-24">
          
          {/* Tagline */}
          <div className="flex items-center gap-2 mb-6">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
              <Building2 className="h-4 w-4" />
            </span>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Commercial • Retail • Industrial
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl font-bold leading-tight text-brand-navy sm:text-5xl lg:text-6xl">
            Premium Commercial <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy to-slate-500">
              Leasing Simplified.
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
            We don't just find you an office; we curate a workspace for your growth. 
            LeaseEzy specializes in high-value commercial, retail, and industrial assets across India.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/properties"
              className="inline-flex items-center justify-center rounded-lg bg-brand-red px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-500/20 transition-all hover:bg-red-600 hover:translate-y-[-2px]"
            >
              Find Your Space
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-8 py-3.5 text-sm font-bold text-brand-navy transition-all hover:border-brand-navy hover:bg-slate-50"
            >
              Talk to an Expert
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex items-center gap-8 border-t border-slate-200 pt-8">
            <div>
              <p className="text-2xl font-bold text-brand-navy">500+</p>
              <p className="text-xs font-medium text-slate-500 uppercase">Verified Spaces</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand-navy">50+</p>
              <p className="text-xs font-medium text-slate-500 uppercase">Corp. Clients</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand-navy">Zero</p>
              <p className="text-xs font-medium text-slate-500 uppercase">Brokerage Hidden</p>
            </div>
          </div>
        </div>

        {/* 2. IMAGE SECTION */}
        <div className="order-1 relative h-[50vh] w-full bg-slate-100 lg:order-2 lg:h-auto">
          <Image
            src="/homepage-hero.webp" 
            alt="Modern commercial office building glass facade"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Overlay gradient for better text contrast if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden" />
        </div>

      </div>
    </section>
  );
}

export default Hero;