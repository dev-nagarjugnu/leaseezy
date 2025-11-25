'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronRight, Sparkles } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
          : 'bg-white py-5 border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* 1. LOGO */}
        <Link href="/" className="flex-shrink-0 relative z-50">
          <Image
            src="/logo.jpeg"
            alt="LeaseEzy logo"
            width={160}
            height={50}
            className="h-10 w-auto object-contain cursor-pointer"
            priority
          />
        </Link>

        {/* 2. DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-8">
          
          {/* Standard Links */}
          <Link href="/solution" className="group relative font-heading text-sm font-semibold text-slate-600 hover:text-[#0F172A] transition-colors">
            Solutions
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0F172A] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link href="/about" className="group relative font-heading text-sm font-semibold text-slate-600 hover:text-[#0F172A] transition-colors">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0F172A] transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* ✨ HIGHLIGHTED PROPERTIES BUTTON ✨ */}
          {/* Design: Soft Red Pill with Sparkle Icon */}
          <Link 
            href="/properties" 
            className="group flex items-center gap-2 px-5 py-2 rounded-full bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20 hover:bg-[#EF4444] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
          >
            <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
            <span className="font-heading text-xs font-bold uppercase tracking-widest">
              Properties
            </span>
          </Link>

        </div>

        {/* 3. RIGHT SIDE: Search + Contact CTA */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Search */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-slate-400 group-focus-within:text-[#1D4ED8] transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-48 focus:w-64 pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20 focus:border-[#1D4ED8] transition-all duration-300 placeholder:text-slate-400 font-body"
            />
          </div>

          {/* Contact Button (Solid Navy) */}
          <Link 
            href="/contact-us"
            className="px-6 py-2.5 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold uppercase tracking-widest rounded-lg transition-colors duration-300 shadow-md"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="lg:hidden p-2 text-slate-700 hover:bg-slate-50 rounded-md transition-colors"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        className={`fixed inset-0 z-[60] bg-white transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-8">
            <Image
              src="/logo.jpeg"
              alt="LeaseEzy logo"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 bg-slate-50 rounded-full text-slate-500 hover:text-[#EF4444]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Search */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search properties..."
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#1D4ED8]"
            />
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col gap-2">
            
            {/* Properties (Highlighted in Mobile too) */}
            <Link
              href="/properties"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-4 rounded-xl bg-red-50 text-[#EF4444] mb-2"
            >
              <span className="flex items-center gap-3 font-heading text-lg font-bold">
                <Sparkles className="w-5 h-5" /> Properties
              </span>
              <ChevronRight className="h-5 w-5" />
            </Link>

            <Link href="/solution" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 group">
              <span className="font-heading text-lg font-medium text-slate-700 group-hover:text-[#0F172A]">Solutions</span>
              <ChevronRight className="h-5 w-5 text-slate-300" />
            </Link>

            <Link href="/about" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 group">
              <span className="font-heading text-lg font-medium text-slate-700 group-hover:text-[#0F172A]">About</span>
              <ChevronRight className="h-5 w-5 text-slate-300" />
            </Link>

            <Link href="/contact-us" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 group">
              <span className="font-heading text-lg font-medium text-slate-700 group-hover:text-[#0F172A]">Contact</span>
              <ChevronRight className="h-5 w-5 text-slate-300" />
            </Link>

          </div>

          <div className="mt-auto pt-8 border-t border-slate-100">
            <p className="text-xs text-center text-slate-400 uppercase tracking-widest">
              © LeaseEzy 2024
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;