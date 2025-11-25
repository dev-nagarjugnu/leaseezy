'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';

export function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Simple handler to simulate submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="min-h-screen w-full bg-[#F8FAFC]">
      <Navbar />
      <main>
        {/* 
          HERO SECTION 
          Silver Gradient Background with subtle noise/texture 
        */}
        <section className="relative w-full py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-[#E8EAEF] to-[#D1D5DB]" />
        {/* Decorative Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-50/50 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* LEFT COLUMN: Text & Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              
              {/* Header Group */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[2px] w-12 bg-[#EF4444]" />
                  <span className="font-heading text-xs font-bold uppercase tracking-[0.5em] text-[#EF4444]">
                    Get In Touch
                  </span>
                </div>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] leading-tight">
                  Let's find your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] to-[#0F172A]">
                    dream space.
                  </span>
                </h1>
                <p className="mt-6 font-body text-lg text-slate-600 max-w-md leading-relaxed">
                  Have a question about a property? Want to list your home? 
                  Our team of experts is ready to assist you.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <ContactCard 
                  icon={<Phone className="w-5 h-5 text-[#1D4ED8]" />}
                  title="Call Us"
                  detail="+1 (555) 123-4567"
                  subDetail="Mon-Fri from 8am to 5pm"
                />
                
                <ContactCard 
                  icon={<Mail className="w-5 h-5 text-[#EF4444]" />}
                  title="Email Us"
                  detail="hello@leaseezy.com"
                  subDetail="We reply within 2 hours"
                />

                <ContactCard 
                  icon={<MapPin className="w-5 h-5 text-emerald-600" />}
                  title="Visit Office"
                  detail="123 Marina Blvd, Suite 400"
                  subDetail="San Francisco, CA 94123"
                  className="sm:col-span-2"
                />
              </div>

              {/* Business Hours Strip */}
              <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 border border-white/50 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-[#0F172A] rounded-lg text-white">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                    Operating Hours
                  </h3>
                  <div className="font-body text-sm text-slate-600 space-y-1">
                    <p className="flex justify-between w-48"><span>Monday - Friday:</span> <span className="font-semibold text-[#0F172A]">9 AM - 6 PM</span></p>
                    <p className="flex justify-between w-48"><span>Saturday:</span> <span className="font-semibold text-[#0F172A]">10 AM - 4 PM</span></p>
                    <p className="flex justify-between w-48"><span>Sunday:</span> <span className="text-[#EF4444] font-semibold">Closed</span></p>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* RIGHT COLUMN: The Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Form Container with Glass Effect */}
              <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 sm:p-10 border border-slate-100 relative overflow-hidden">
                
                {/* Subtle top shimmer */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#EF4444] via-[#1D4ED8] to-[#EF4444]" />

                {formStatus === 'success' ? (
                  <div className="h-[500px] flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 animate-bounce">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-[#0F172A]">Message Sent!</h3>
                    <p className="text-slate-500 font-body max-w-xs">
                      Thank you for reaching out. One of our agents will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="mt-6 text-[#1D4ED8] font-bold underline text-sm"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <InputField label="First Name" placeholder="John" type="text" />
                      <InputField label="Last Name" placeholder="Doe" type="text" />
                    </div>

                    <InputField label="Email Address" placeholder="john@example.com" type="email" />
                    
                    {/* Phone & Interest Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <InputField label="Phone Number" placeholder="+1 (555) 000-0000" type="tel" />
                      
                      <div className="space-y-2">
                        <label className="font-heading text-xs font-bold uppercase tracking-wider text-slate-500">
                          I'm interested in
                        </label>
                        <div className="relative">
                          <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-[#0F172A] font-body focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent transition-all appearance-none cursor-pointer">
                            <option>Renting a Property</option>
                            <option>Listing a Property</option>
                            <option>Property Management</option>
                            <option>General Inquiry</option>
                          </select>
                          {/* Custom Dropdown Arrow */}
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-heading text-xs font-bold uppercase tracking-wider text-slate-500">
                        Message
                      </label>
                      <textarea 
                        rows={4}
                        placeholder="Tell us a bit more about what you are looking for..."
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-[#0F172A] font-body placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full group relative flex items-center justify-center gap-3 bg-[#0F172A] text-white py-4 px-8 rounded-lg overflow-hidden transition-all hover:bg-[#1E293B] shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'submitting' ? (
                        <span className="animate-pulse font-heading font-bold text-sm uppercase tracking-wider">Sending...</span>
                      ) : (
                        <>
                          <span className="font-heading font-bold text-sm uppercase tracking-wider relative z-10">Send Message</span>
                          <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-center text-xs text-slate-400 font-body">
                      By submitting this form, you agree to our <span className="underline cursor-pointer hover:text-[#0F172A]">Privacy Policy</span>.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// ------------------------------------
// SUB-COMPONENTS FOR CLEANER CODE
// ------------------------------------

function ContactCard({ icon, title, detail, subDetail, className = "" }: any) {
  return (
    <div className={`flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <div className="shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
        {icon}
      </div>
      <div>
        <h3 className="font-heading text-sm font-bold text-[#0F172A] uppercase tracking-wide mb-1">
          {title}
        </h3>
        <p className="font-heading text-base font-semibold text-[#0F172A] mb-1">
          {detail}
        </p>
        <p className="font-body text-xs text-slate-500">
          {subDetail}
        </p>
      </div>
    </div>
  );
}

function InputField({ label, placeholder, type }: any) {
  return (
    <div className="space-y-2">
      <label className="font-heading text-xs font-bold uppercase tracking-wider text-slate-500">
        {label}
      </label>
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-[#0F172A] font-body placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent transition-all shadow-sm"
      />
    </div>
  );
}

export default ContactPage;