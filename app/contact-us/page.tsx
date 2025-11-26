'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2, Building2, Briefcase, User } from 'lucide-react';

type InquiryType = 'tenant' | 'landlord' | 'general';

export function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [inquiryType, setInquiryType] = useState<InquiryType>('tenant');

  // Simple handler to simulate submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <main>
        {/* 
          HERO SECTION 
        */}
        <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-brand-gray">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-navy/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
              {/* LEFT COLUMN: Text & Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-10"
              >
                {/* Header Group */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="h-0.5 w-8 bg-brand-red"></span>
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-brand-red">
                      Contact Us
                    </span>
                  </div>
                  <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy leading-tight">
                    Strategic <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-navy">
                      Real Estate Solutions.
                    </span>
                  </h1>
                  <p className="mt-6 font-body text-lg text-slate-600 max-w-md leading-relaxed">
                    Whether you are scaling your headquarters or liquidating an asset, our advisory team ensures a seamless transaction.
                  </p>
                </div>

                {/* Contact Information Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <ContactCard 
                    icon={<Phone className="w-5 h-5 text-brand-navy" />}
                    title="Corporate Line"
                    detail="+91 22 1234 5678"
                    subDetail="Mon-Sat, 9am - 7pm"
                  />
                  <ContactCard 
                    icon={<Mail className="w-5 h-5 text-brand-red" />}
                    title="Advisory Desk"
                    detail="consult@leaseezy.com"
                    subDetail="2hr Response Time"
                  />
                  <ContactCard 
                    icon={<MapPin className="w-5 h-5 text-brand-navy" />}
                    title="Headquarters"
                    detail="One BKC, Bandra East"
                    subDetail="Mumbai, Maharashtra 400051"
                    className="sm:col-span-2"
                  />
                </div>

                {/* Trust Badge */}
                <div className="inline-flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <div className="p-2 bg-green-50 rounded-full text-green-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-navy">Zero Spam Policy</p>
                    <p className="text-xs text-slate-500">Your data is secured under NDA protocols.</p>
                  </div>
                </div>

              </motion.div>

              {/* RIGHT COLUMN: The Dynamic Form */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-xl shadow-navy-900/10 p-8 sm:p-10 border border-slate-100">
                  
                  {formStatus === 'success' ? (
                    <SuccessMessage onReset={() => setFormStatus('idle')} />
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      
                      {/* 1. Inquiry Type Selector (The "Dynamic" Part) */}
                      <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-lg">
                        <TypeButton 
                          active={inquiryType === 'tenant'} 
                          onClick={() => setInquiryType('tenant')}
                          icon={<Building2 size={14} />}
                          label="I want to Lease"
                        />
                        <TypeButton 
                          active={inquiryType === 'landlord'} 
                          onClick={() => setInquiryType('landlord')}
                          icon={<Briefcase size={14} />}
                          label="I want to List"
                        />
                        <TypeButton 
                          active={inquiryType === 'general'} 
                          onClick={() => setInquiryType('general')}
                          icon={<User size={14} />}
                          label="General"
                        />
                      </div>

                      <div className="space-y-5">
                        {/* Basic Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <InputField label="Full Name" placeholder="Ex. Rajesh Kumar" type="text" />
                          <InputField label="Work Email" placeholder="name@company.com" type="email" />
                        </div>
                        <InputField label="Phone Number" placeholder="+91 98765 00000" type="tel" />

                        {/* --- DYNAMIC FIELDS BASED ON SELECTION --- */}
                        <AnimatePresence mode="wait">
                          {inquiryType === 'tenant' && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                              className="grid grid-cols-1 sm:grid-cols-2 gap-5 overflow-hidden"
                            >
                              <SelectField label="Property Type" options={['Office Space', 'Retail Shop', 'Warehouse', 'Co-Working']} />
                              <SelectField label="Requirement Size" options={['< 2,000 sqft', '2,000 - 5,000 sqft', '5,000 - 10,000 sqft', '10,000+ sqft']} />
                              <div className="sm:col-span-2">
                                <InputField label="Preferred Location(s)" placeholder="Ex. BKC, Lower Parel, Cyber Hub..." type="text" />
                              </div>
                            </motion.div>
                          )}

                          {inquiryType === 'landlord' && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                              className="grid grid-cols-1 sm:grid-cols-2 gap-5 overflow-hidden"
                            >
                              <InputField label="Asset Location" placeholder="Where is property located?" type="text" />
                              <SelectField label="Asset Type" options={['Commercial Building', 'Retail Storefront', 'Industrial Shed', 'Plot']} />
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Message */}
                        <div className="space-y-2">
                          <label className="font-heading text-xs font-bold uppercase tracking-wider text-slate-500">
                            Specific Requirements
                          </label>
                          <textarea 
                            rows={3}
                            placeholder={inquiryType === 'tenant' ? "Tell us about your budget, timeline, and fit-out needs..." : "Tell us about the property details..."}
                            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-brand-navy font-body placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-navy focus:border-brand-navy transition-all resize-none text-sm"
                          />
                        </div>
                      </div>

                      <button 
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full group relative flex items-center justify-center gap-3 bg-brand-navy text-white py-4 px-8 rounded-lg overflow-hidden transition-all hover:bg-slate-800 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {formStatus === 'submitting' ? (
                          <span className="animate-pulse font-heading font-bold text-sm uppercase tracking-wider">Processing...</span>
                        ) : (
                          <>
                            <span className="font-heading font-bold text-sm uppercase tracking-wider relative z-10">
                              {inquiryType === 'tenant' ? 'Request Call Back' : 'Submit Listing Details'}
                            </span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
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

// --- HELPER COMPONENTS ---

function ContactCard({ icon, title, detail, subDetail, className = "" }: any) {
  return (
    <div className={`flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-brand-navy/20 ${className}`}>
      <div className="shrink-0 w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
        {icon}
      </div>
      <div>
        <h3 className="font-heading text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
          {title}
        </h3>
        <p className="font-heading text-base font-bold text-brand-navy mb-0.5">
          {detail}
        </p>
        <p className="font-body text-xs text-slate-500 font-medium">
          {subDetail}
        </p>
      </div>
    </div>
  );
}

function InputField({ label, placeholder, type }: any) {
  return (
    <div className="space-y-2">
      <label className="font-heading text-[10px] font-bold uppercase tracking-widest text-slate-500">
        {label}
      </label>
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-brand-navy font-body placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-navy focus:border-brand-navy transition-all shadow-sm text-sm"
      />
    </div>
  );
}

function SelectField({ label, options }: { label: string, options: string[] }) {
  return (
    <div className="space-y-2">
      <label className="font-heading text-[10px] font-bold uppercase tracking-widest text-slate-500">
        {label}
      </label>
      <div className="relative">
        <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-brand-navy font-body focus:outline-none focus:ring-1 focus:ring-brand-navy focus:border-brand-navy transition-all appearance-none cursor-pointer text-sm">
          {options.map(opt => <option key={opt}>{opt}</option>)}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>
    </div>
  );
}

function TypeButton({ active, onClick, icon, label }: any) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center gap-2 py-2.5 rounded-md text-xs font-bold transition-all duration-300 ${
        active 
        ? 'bg-white text-brand-navy shadow-sm ring-1 ring-slate-200' 
        : 'text-slate-500 hover:text-brand-navy hover:bg-slate-200/50'
      }`}
    >
      {icon} {label}
    </button>
  );
}

function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <div className="h-[450px] flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in duration-500">
      <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-2 border border-green-100">
        <CheckCircle2 className="w-10 h-10" />
      </div>
      <div>
        <h3 className="font-heading text-2xl font-bold text-brand-navy mb-2">Request Received</h3>
        <p className="text-slate-500 font-body text-sm max-w-xs mx-auto">
          Our commercial advisory team has received your details. A relationship manager will contact you within 2 hours.
        </p>
      </div>
      <button 
        onClick={onReset}
        className="text-brand-red font-bold underline text-sm hover:text-brand-navy transition-colors"
      >
        Submit another inquiry
      </button>
    </div>
  );
}

export default ContactPage;