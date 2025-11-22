'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Properties', href: '#properties' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white backdrop-blur-sm bg-opacity-95">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex flex-shrink-0 items-center gap-2">
          <Image
            src="/logo.jpeg"
            alt="LeaseEzy logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain md:h-14"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-[15px] font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-brand-blue"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Search Bar & Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search items, collections, account"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-gray-900 placeholder-gray-400 transition-all duration-200"
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Mobile Search Icon */}
          <button
            type="button"
            className="p-2.5 rounded-lg bg-gray-100 text-gray-700"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="p-2.5 rounded-lg bg-gray-100 text-gray-700"
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-white px-6 py-6 transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
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
            className="p-2.5 rounded-lg bg-gray-100 text-gray-700"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Search */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search items, collections, account"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-gray-900 placeholder-gray-400"
          />
        </div>

        {/* Mobile Navigation Links */}
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-heading text-lg font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-brand-blue py-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;

