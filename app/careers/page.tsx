import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Briefcase, TrendingUp, Users, ArrowRight, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white text-brand-navy font-body">
      <Navbar />
      
      <main className="pt-24 pb-20">
        
        {/* --- HERO SECTION --- */}
        <section className="relative px-6 lg:px-8 py-16 lg:py-24 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-brand-red font-bold tracking-widest text-xs uppercase mb-4 block">
              Join the Team
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-brand-navy mb-6">
              Shape the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy to-slate-500">
                Commercial Real Estate.
              </span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              LeaseEzy is India's fastest-growing commercial leasing partner. We are looking for ambitious minds who understand the value of premium assets and client relationships.
            </p>
          </div>
        </section>

        {/* --- VALUES GRID (Why Join Us?) --- */}
        <section className="bg-brand-gray py-20 border-y border-slate-100">
          <div className="px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-10">
              
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-hover hover:shadow-md">
                <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-navy mb-6">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">High-Growth Environment</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Work on high-ticket commercial deals. Our average deal size ensures your career trajectory moves vertically, not horizontally.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-hover hover:shadow-md">
                <div className="h-12 w-12 bg-red-50 rounded-lg flex items-center justify-center text-brand-red mb-6">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">Premium Clientele</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Engage with CXOs, Founders, and Industry Leaders. We don't just sell space; we build corporate relationships.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-hover hover:shadow-md">
                <div className="h-12 w-12 bg-yellow-50 rounded-lg flex items-center justify-center text-yellow-600 mb-6">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">Transparency First</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our "No Hidden Clauses" policy applies to employees too. Clear incentives, honest feedback, and a culture of trust.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* --- OPEN POSITIONS --- */}
        <section className="px-6 lg:px-8 py-24 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-brand-navy">Current Openings</h2>
            <p className="text-slate-500 mt-2">Find your role in our expanding network.</p>
          </div>

          <div className="flex flex-col gap-6">
            
            {/* Job 1 */}
            <div className="group flex flex-col md:flex-row md:items-center justify-between bg-white border border-slate-200 p-6 rounded-lg hover:border-brand-navy/30 transition-all hover:shadow-lg">
              <div>
                <h3 className="font-heading text-lg font-bold text-brand-navy group-hover:text-brand-red transition-colors">
                  Senior Sales Manager (Commercial)
                </h3>
                <div className="flex items-center gap-4 mt-2 text-xs text-slate-500 font-medium uppercase tracking-wide">
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Mumbai / Gift City</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> Full Time</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <Link 
                  href="mailto:hr@leaseezy.com?subject=Application for Senior Sales Manager"
                  className="inline-flex items-center text-sm font-bold text-brand-navy hover:text-brand-red transition-colors"
                >
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Job 2 */}
            <div className="group flex flex-col md:flex-row md:items-center justify-between bg-white border border-slate-200 p-6 rounded-lg hover:border-brand-navy/30 transition-all hover:shadow-lg">
              <div>
                <h3 className="font-heading text-lg font-bold text-brand-navy group-hover:text-brand-red transition-colors">
                  Real Estate Investment Analyst
                </h3>
                <div className="flex items-center gap-4 mt-2 text-xs text-slate-500 font-medium uppercase tracking-wide">
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Mumbai HQ</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> On-site</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <Link 
                  href="mailto:hr@leaseezy.com?subject=Application for Investment Analyst"
                  className="inline-flex items-center text-sm font-bold text-brand-navy hover:text-brand-red transition-colors"
                >
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Job 3 */}
            <div className="group flex flex-col md:flex-row md:items-center justify-between bg-white border border-slate-200 p-6 rounded-lg hover:border-brand-navy/30 transition-all hover:shadow-lg">
              <div>
                <h3 className="font-heading text-lg font-bold text-brand-navy group-hover:text-brand-red transition-colors">
                  Client Relations Executive
                </h3>
                <div className="flex items-center gap-4 mt-2 text-xs text-slate-500 font-medium uppercase tracking-wide">
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Remote / Hybrid</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> Contract</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <Link 
                  href="mailto:hr@leaseezy.com?subject=Application for Client Relations"
                  className="inline-flex items-center text-sm font-bold text-brand-navy hover:text-brand-red transition-colors"
                >
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>

          {/* Fallback CTA */}
          <div className="mt-16 bg-slate-50 rounded-2xl p-8 text-center border border-slate-100">
            <h4 className="font-heading text-xl font-bold text-brand-navy">Don't see your role?</h4>
            <p className="text-slate-600 mt-2 mb-6 max-w-xl mx-auto">
              We are always open to meeting talented individuals. Send us your resume and tell us how you can make a difference.
            </p>
            <Link 
              href="mailto:careers@leaseezy.com"
              className="inline-block bg-brand-navy hover:bg-slate-800 text-white px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-navy-500/20"
            >
              Email Your Resume
            </Link>
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}