import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-slate-800 via-slate-800/95 to-slate-900 text-white">
      {/* Subtle geometric shapes in background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute left-10 top-20 h-32 w-1 rotate-12 bg-slate-300" />
        <div className="absolute right-20 top-40 h-24 w-1 -rotate-12 bg-slate-300" />
        <div className="absolute left-1/4 bottom-32 h-1 w-24 rotate-12 bg-slate-300" />
        <div className="absolute right-1/3 bottom-20 h-1 w-32 -rotate-12 bg-slate-300" />
      </div>
      
      {/* Rounded top edge */}
      <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-b from-white via-white/50 to-transparent rounded-t-[2rem]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-20 pb-8 md:px-8 lg:pt-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 pb-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <div className="mb-6 relative">
              {/* Subtle outer glow effect that blends with footer */}
              <div className="absolute -inset-6 bg-gradient-to-br from-slate-600/30 via-slate-700/40 to-slate-800/50 rounded-2xl blur-2xl opacity-60" />
              
              {/* Gradient background container that blends with footer */}
              <div className="relative bg-gradient-to-br from-slate-200 via-slate-300 to-slate-800 rounded-xl p-5 shadow-xl border border-slate-600/30 backdrop-blur-sm">
                {/* Inner gradient overlay for smooth blend */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 via-transparent to-slate-800/80 rounded-xl pointer-events-none" />
                
                {/* Logo with proper visibility */}
                <div className="relative z-10">
                  <Image
                    src="/footer-logo.png"
                    alt="LeaseEzy logo"
                    width={160}
                    height={48}
                    className="h-auto w-full max-w-[140px] object-contain"
                  />
                </div>
                
                {/* Subtle corner accents */}
                <div className="absolute top-2 left-2 h-1.5 w-1.5 rounded-full bg-brand-red/60" />
                <div className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-brand-yellow/60" />
                <div className="absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full bg-brand-blue/60" />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Premium commercial leasing advisory for Indian businesses.
            </p>
          </div>

          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p>LeaseEzy Commercial Real Estate</p>
              <p className="text-xs text-slate-400">Registration: LE-2024-001</p>
              <p className="text-xs text-slate-400">Established: 2024</p>
              <div className="pt-2">
                <p className="text-xs text-slate-400">Mumbai, Maharashtra</p>
                <p className="text-xs text-slate-400">India</p>
              </div>
              <p className="pt-2 text-xs text-slate-400">+91 1800-LEASE-EZY</p>
            </div>
          </div>

          {/* Address/Contact */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p className="text-xs text-slate-400">123 Business District</p>
              <p className="text-xs text-slate-400">Mumbai, MH 400001</p>
              <p className="text-xs text-slate-400">India</p>
              <p className="pt-2 text-xs text-slate-400">+91 22 1234 5678</p>
              <p className="text-xs text-slate-400">
                <a href="mailto:info@leaseezy.com" className="hover:text-white transition-colors">
                  info@leaseezy.com
                </a>
              </p>
              <p className="pt-2 text-xs text-slate-400">License: CRE-MH-2024-001</p>
            </div>
          </div>

          {/* Properties Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Properties
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#properties" className="text-slate-300 transition-colors hover:text-white">
                  Browse Listings
                </Link>
              </li>
              <li>
                <Link href="#properties" className="text-slate-300 transition-colors hover:text-white">
                  Featured Deals
                </Link>
              </li>
              <li>
                <Link href="#properties" className="text-slate-300 transition-colors hover:text-white">
                  Office Spaces
                </Link>
              </li>
              <li>
                <Link href="#properties" className="text-slate-300 transition-colors hover:text-white">
                  Retail Properties
                </Link>
              </li>
              <li>
                <Link href="#properties" className="text-slate-300 transition-colors hover:text-white">
                  Industrial Facilities
                </Link>
              </li>
              <li>
                <Link href="#properties" className="text-slate-300 transition-colors hover:text-white">
                  Business Campuses
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Connect */}
          <div className="space-y-6 md:space-y-8">
            {/* Services */}
            <div className="space-y-4">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
                Services
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#solutions" className="text-slate-300 transition-colors hover:text-white">
                    Property Advisory
                  </Link>
                </li>
                <li>
                  <Link href="#solutions" className="text-slate-300 transition-colors hover:text-white">
                    Lease Negotiation
                  </Link>
                </li>
                <li>
                  <Link href="#solutions" className="text-slate-300 transition-colors hover:text-white">
                    Site Selection
                  </Link>
                </li>
                <li>
                  <Link href="#solutions" className="text-slate-300 transition-colors hover:text-white">
                    Legal Support
                  </Link>
                </li>
                <li>
                  <Link href="#solutions" className="text-slate-300 transition-colors hover:text-white">
                    Finance Assistance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect - Social Media */}
            <div className="space-y-4">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
                Connect
              </h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://twitter.com/leaseezy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-800/50 text-slate-300 transition-all hover:border-white/40 hover:bg-slate-700/50 hover:text-white"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/leaseezy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-800/50 text-slate-300 transition-all hover:border-white/40 hover:bg-slate-700/50 hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com/leaseezy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-800/50 text-slate-300 transition-all hover:border-white/40 hover:bg-slate-700/50 hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/company/leaseezy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-800/50 text-slate-300 transition-all hover:border-white/40 hover:bg-slate-700/50 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Safe, Secure & Certified Section */}
        <div className="border-t border-white/10 py-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {/* Title with accent line */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-1 bg-gradient-to-b from-brand-red to-brand-red/60" />
              <h3 className="font-heading text-xl font-bold text-white md:text-2xl">
                Safe, Secure & Certified
              </h3>
            </div>
            
            {/* Certification Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:justify-end">
              <div className="group relative flex h-24 w-24 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-4 shadow-lg backdrop-blur-sm transition-all hover:border-brand-red/60 hover:bg-gradient-to-br hover:from-slate-700/90 hover:to-slate-800/90 hover:scale-105 hover:shadow-xl">
                <Image
                  src="/iec.png"
                  alt="IEC Certification"
                  width={96}
                  height={96}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="group relative flex h-24 w-24 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-4 shadow-lg backdrop-blur-sm transition-all hover:border-brand-red/60 hover:bg-gradient-to-br hover:from-slate-700/90 hover:to-slate-800/90 hover:scale-105 hover:shadow-xl">
                <Image
                  src="/sec.png"
                  alt="Security Certification"
                  width={96}
                  height={96}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="group relative flex h-24 w-24 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-4 shadow-lg backdrop-blur-sm transition-all hover:border-brand-red/60 hover:bg-gradient-to-br hover:from-slate-700/90 hover:to-slate-800/90 hover:scale-105 hover:shadow-xl">
                <Image
                  src="/ssl.png"
                  alt="SSL Certified"
                  width={96}
                  height={96}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 md:justify-start md:gap-6">
              <Link href="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-white">
                Terms of Use
              </Link>
              <Link href="/cookies" className="transition-colors hover:text-white">
                Cookie Consent
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-slate-700/80 to-slate-800/80">
                <Image
                  src="/logo.jpeg"
                  alt="LeaseEzy"
                  width={20}
                  height={20}
                  className="h-4 w-4 rounded-full object-contain"
                />
        </div>
              <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} LeaseEzy. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

