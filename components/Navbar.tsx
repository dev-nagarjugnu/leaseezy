'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Properties', href: '#properties' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white text-brand-navy">
      <nav className="mx-auto flex w-full items-center justify-between px-6 py-4 md:px-12">
        <Link href="/" className="flex flex-shrink-0 items-center gap-3 pl-10 md:pl-10">
          <Image
            src="/logo.jpeg"
            alt="LeaseEzy logo"
            width={280}
            height={84}
            className="h-16 w-auto object-contain md:h-[5.0rem]"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex md:pr-8">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading text-[15px] font-medium tracking-wide text-brand-navy transition-all duration-300 hover:text-brand-red"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="#properties"
            className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 px-7 py-3.5 font-heading text-sm font-semibold tracking-wide text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            {/* Rich dark silver gradient texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-500/30 via-slate-400/20 to-slate-600/30 opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-800/40 via-transparent to-transparent" />
            
            {/* Premium silver border accent */}
            <div className="absolute inset-0 rounded-lg border border-slate-400/40 group-hover:border-slate-300/60 transition-colors" />
            <div className="absolute inset-[1px] rounded-lg border border-slate-500/30" />
            
            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-slate-300/40 to-transparent group-hover:translate-x-full transition-transform duration-700" />
            
            {/* Text content - highly readable white text */}
            <span className="relative z-10 flex items-center gap-2 font-heading font-bold text-white drop-shadow-lg">
              Explore Properties
            </span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-2xl border border-brand-navy/30 bg-white p-3 text-brand-navy shadow-lg md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="size-5" />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-50 bg-white px-6 py-6 text-brand-navy transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <Image
            src="/logo.jpeg"
            alt="LeaseEzy logo"
            width={140}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-2xl border border-brand-navy/30 bg-white p-3 text-brand-navy shadow-sm"
            aria-label="Close navigation menu"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-heading text-lg font-medium tracking-wide text-brand-navy transition-all duration-300 hover:text-brand-red"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#properties"
          onClick={() => setIsOpen(false)}
          className="group relative mt-12 inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 px-6 py-3.5 font-heading text-sm font-semibold tracking-wide text-white shadow-xl transition-all duration-300 hover:shadow-2xl"
        >
          {/* Rich dark silver gradient texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-500/30 via-slate-400/20 to-slate-600/30 opacity-50 group-hover:opacity-70 transition-opacity" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-800/40 via-transparent to-transparent" />
          
          {/* Premium silver border accent */}
          <div className="absolute inset-0 rounded-lg border border-slate-400/40 group-hover:border-slate-300/60 transition-colors" />
          <div className="absolute inset-[1px] rounded-lg border border-slate-500/30" />
          
          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-slate-300/40 to-transparent group-hover:translate-x-full transition-transform duration-700" />
          
          {/* Text content - highly readable white text */}
          <span className="relative z-10 font-heading font-bold text-white drop-shadow-lg">
            Explore Properties
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;

