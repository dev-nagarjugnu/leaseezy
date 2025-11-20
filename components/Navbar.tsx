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
        <Link href="/" className="flex flex-shrink-0 items-center gap-3 pl-1 md:pl-0">
          <Image
            src="/logo.jpeg"
            alt="LeaseEzy logo"
            width={280}
            height={84}
            className="h-20 w-auto object-contain md:h-[5.5rem]"
            priority
          />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <div className="flex items-center gap-8 text-sm font-semibold uppercase tracking-[0.45em] text-brand-navy/80">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading transition-colors hover:text-brand-red hover:text-opacity-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="#properties"
            className="bg-brand-red px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-brand-red/90"
          >
            Browse
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

        <div className="mt-8 flex flex-col gap-4 text-lg font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-brand-navy transition hover:text-brand-red"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#properties"
          onClick={() => setIsOpen(false)}
          className="mt-12 inline-flex w-full items-center justify-center rounded-xl bg-brand-red px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white"
        >
          Browse Properties
        </Link>
      </div>
    </header>
  );
}

export default Navbar;

