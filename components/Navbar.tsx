'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ArrowUpRight, Search } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out border-b ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-slate-200 py-3' 
          : 'bg-white border-slate-100 py-5' // Kept relatively slim even at top
      }`}
    >
      {/* Container: Using grid for perfect centering of the Nav */}
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-12 items-center">
        
        {/* 1. LOGO (Left Side - lg:col-span-3) */}
        {/* Expanded width to w-64 to ensure Tagline is readable without making header tall */}
        <div className="lg:col-span-3 flex items-center justify-start">
          <Link href="/" className="relative z-50 block group">
            <div className={`relative transition-all duration-500 ease-in-out ${scrolled ? 'h-12 w-56' : 'h-14 w-64'}`}>
              <Image
                src="/logo.jpeg"
                alt="LeaseEzy Commercial"
                fill
                className="object-contain object-left" 
                priority
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
          </Link>
        </div>

        {/* 2. DESKTOP NAVIGATION (Center - lg:col-span-6) */}
        {/* Centered Layout for Premium Symmetry */}
        <div className="hidden lg:flex lg:col-span-6 justify-center">
          <nav className="flex items-center gap-8 bg-slate-50/50 px-8 py-2.5 rounded-full border border-slate-100">
            <NavLink href="/solution">Solutions</NavLink>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <NavLink href="/properties">Properties</NavLink>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <NavLink href="/about">Company</NavLink>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <NavLink href="/careers">Careers</NavLink>
          </nav>
        </div>

        {/* 3. ACTION AREA (Right Side - lg:col-span-3) */}
        <div className="hidden lg:flex lg:col-span-3 justify-end items-center gap-4">
          
          {/* Minimal Search Trigger */}
          <button className="p-2.5 text-slate-400 hover:text-brand-navy hover:bg-slate-50 rounded-full transition-all">
            <Search className="w-5 h-5" />
          </button>

          {/* The "Advisory" Button - Sleek & Solid */}
          <Link 
            href="/contact-us"
            className="group relative overflow-hidden rounded-lg bg-brand-navy px-6 py-2.5 text-white shadow-md shadow-navy-900/10 transition-all hover:shadow-lg hover:shadow-navy-900/20 hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            <span className="relative flex items-center gap-2 font-heading text-[11px] font-bold uppercase tracking-[0.2em]">
              Advisory <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>

        {/* Mobile Menu Toggle (Right aligned on mobile) */}
        <div className="flex lg:hidden justify-end">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="p-2 text-brand-navy hover:bg-slate-50 rounded-md transition-colors"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        className={`fixed inset-0 z-[200] bg-white transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-10 border-b border-slate-100 pb-6">
            <div className="relative h-12 w-48">
              <Image
                src="/logo.jpeg"
                alt="LeaseEzy logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 bg-slate-50 rounded-full text-slate-500 hover:text-brand-red"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col gap-4">
            <MobileLink href="/properties" onClick={() => setIsOpen(false)}>Browse Assets</MobileLink>
            <MobileLink href="/solution" onClick={() => setIsOpen(false)}>Solutions</MobileLink>
            <MobileLink href="/about" onClick={() => setIsOpen(false)}>Company</MobileLink>
            <MobileLink href="/careers" onClick={() => setIsOpen(false)}>Careers</MobileLink>
            <MobileLink href="/blogs" onClick={() => setIsOpen(false)}>Insights</MobileLink>
          </div>

          {/* Mobile Bottom Action */}
          <div className="mt-auto">
            <Link 
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-3 bg-brand-navy py-4 text-white font-heading text-xs font-bold uppercase tracking-widest shadow-xl rounded-lg"
            >
              Contact Advisory <ArrowUpRight className="w-4 h-4" />
            </Link>
            <p className="text-[10px] text-center text-slate-400 mt-6 uppercase tracking-widest">
              Est. 2024 • Commercial Leasing
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

// --- HELPER COMPONENTS ---

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="font-heading text-[11px] font-bold text-slate-600 uppercase tracking-[0.15em] hover:text-brand-navy transition-all hover:scale-105"
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="flex items-center justify-between group p-4 rounded-lg hover:bg-slate-50 transition-colors"
    >
      <span className="font-heading text-lg font-bold text-brand-navy group-hover:text-brand-red transition-colors">
        {children}
      </span>
      <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand-red transition-colors" />
    </Link>
  );
}

export default Navbar;