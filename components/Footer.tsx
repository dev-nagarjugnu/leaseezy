import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white pt-24 border-t border-white/10">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red opacity-5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-yellow opacity-5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-8 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          
          {/* 1. Logo & Tagline */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
               <div className="bg-white p-2 rounded-lg inline-block">
                 <Image
                   src="/footer-logo.png"
                   alt="LeaseEzy logo"
                   width={140}
                   height={40}
                   className="h-8 w-auto object-contain"
                 />
               </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              India's premier commercial real estate advisory. We combine data intelligence with on-ground expertise to deliver seamless leasing solutions for enterprises.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <SocialLink href="https://linkedin.com/company/leaseezy" icon={<Linkedin size={18} />} />
              <SocialLink href="https://twitter.com/leaseezy" icon={<Twitter size={18} />} />
              <SocialLink href="https://instagram.com/leaseezy" icon={<Instagram size={18} />} />
              <SocialLink href="https://facebook.com/leaseezy" icon={<Facebook size={18} />} />
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="space-y-6">
            <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-white">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-brand-red transition-colors">About Us</Link></li>
              <li><Link href="/solution" className="hover:text-brand-red transition-colors">Our Solutions</Link></li>
              <li><Link href="/careers" className="hover:text-brand-red transition-colors">Careers</Link></li>
              <li><Link href="/blogs" className="hover:text-brand-red transition-colors">Market Insights</Link></li>
              <li><Link href="/contact-us" className="hover:text-brand-red transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* 3. Properties (Commercial Categories) */}
          <div className="space-y-6">
            <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-white">
              Portfolio
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/properties?category=office" className="hover:text-brand-red transition-colors">Office Spaces</Link></li>
              <li><Link href="/properties?category=retail" className="hover:text-brand-red transition-colors">Retail Shops</Link></li>
              <li><Link href="/properties?category=industrial" className="hover:text-brand-red transition-colors">Warehousing</Link></li>
              <li><Link href="/properties?category=all" className="hover:text-brand-red transition-colors">View All Assets</Link></li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div className="space-y-6">
            <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-white">
              Headquarters
            </h3>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-red shrink-0" />
                <p>123 Business District, <br/>BKC, Mumbai 400051</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-red shrink-0" />
                <p>+91 22 1234 5678</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-red shrink-0" />
                <a href="mailto:info@leaseezy.com" className="hover:text-white">info@leaseezy.com</a>
              </div>
              <div className="pt-2">
                 <p className="text-xs text-slate-500">RERA: LE-2024-001</p>
              </div>
            </div>
          </div>

        </div>

        {/* Certifications Section (Fixed: Always Full Color) */}
        <div className="border-t border-white/10 py-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 bg-brand-red rounded-full" />
              <div>
                <h3 className="font-heading text-lg font-bold text-white">
                  Certified Advisory
                </h3>
                <p className="text-xs text-slate-400">Compliant with Indian Real Estate Regulations</p>
              </div>
            </div>
            
            {/* BADGES: Removed Grayscale, Added White Background for Pop */}
            <div className="flex gap-6">
              <div className="bg-white/10 border border-white/20 p-2 rounded-lg hover:scale-105 transition-transform duration-300">
                 <Image src="/iec.png" alt="IEC" width={60} height={40} className="h-12 w-auto object-contain" />
              </div>
              <div className="bg-white/10 border border-white/20 p-2 rounded-lg hover:scale-105 transition-transform duration-300">
                 <Image src="/sec.png" alt="SEC" width={60} height={40} className="h-12 w-auto object-contain" />
              </div>
              <div className="bg-white/10 border border-white/20 p-2 rounded-lg hover:scale-105 transition-transform duration-300">
                 <Image src="/ssl.png" alt="SSL" width={60} height={40} className="h-12 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} LeaseEzy Commercial. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
             <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
             <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

// Helper Component for Social Links
function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-300"
    >
      {icon}
    </a>
  );
}

export default Footer;