'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Loader2, Send } from 'lucide-react';

interface InquiryFormProps {
  propertyTitle: string;
}

export default function InquiryForm({ propertyTitle }: InquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Mock Submission Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-green-100 p-8 text-center animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="text-green-600" size={32} />
        </div>
        <h3 className="text-xl font-heading font-bold text-[#0F172A] mb-2">Inquiry Received!</h3>
        <p className="text-slate-500 text-sm mb-6">
          Our team has received your interest in <strong>{propertyTitle}</strong>. An expert agent will call you within 2 hours.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-sm font-bold text-[#0F172A] underline hover:text-[#EF4444]"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-xl font-heading font-bold text-[#0F172A]">Interested in this property?</h3>
        <p className="text-sm text-slate-500 mt-1">Fill out the form below to book a viewing or request more details.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Full Name</label>
          <input 
            type="text" 
            required
            placeholder="Ex. John Doe" 
            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] outline-none transition-all text-sm placeholder:text-slate-400" 
          />
        </div>
        
        {/* Phone Field */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Phone Number</label>
          <div className="flex group">
             <span className="px-3 py-3 bg-slate-100 border border-slate-200 border-r-0 rounded-l-lg text-slate-500 text-sm font-bold flex items-center group-focus-within:border-[#0F172A] group-focus-within:ring-1 group-focus-within:ring-[#0F172A] transition-all">
               +91
             </span>
             <input 
               type="tel" 
               required
               placeholder="98765 43210" 
               className="w-full px-4 py-3 rounded-r-lg bg-slate-50 border border-slate-200 focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] outline-none transition-all text-sm placeholder:text-slate-400" 
             />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Email Address</label>
          <input 
            type="email" 
            required
            placeholder="john@example.com" 
            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] outline-none transition-all text-sm placeholder:text-slate-400" 
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Message (Optional)</label>
          <textarea 
            rows={3} 
            placeholder={`I am interested in ${propertyTitle}. Please contact me...`}
            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] outline-none transition-all text-sm resize-none placeholder:text-slate-400"
          ></textarea>
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-start gap-2 pt-1">
          <input type="checkbox" id="terms" required className="mt-1 w-4 h-4 text-[#0F172A] rounded border-slate-300 focus:ring-[#0F172A] cursor-pointer" />
          <label htmlFor="terms" className="text-xs text-slate-500 cursor-pointer select-none">
            I agree to the <Link href="#" className="underline hover:text-[#0F172A]">Terms of Service</Link> and allow LeaseEzy to contact me via WhatsApp or Phone.
          </label>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-[#0F172A] hover:bg-[#1e293b] text-white font-bold py-4 rounded-lg shadow-lg shadow-slate-900/20 transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
        >
           {isSubmitting ? (
             <>
               <Loader2 size={18} className="animate-spin" /> Sending...
             </>
           ) : (
             <>
               Submit Inquiry <Send size={18} />
             </>
           )}
        </button>

        <div className="text-center pt-2">
            <p className="text-[10px] text-slate-400">
                <span className="flex items-center justify-center gap-1">
                    <CheckCircle2 size={10} className="text-green-500" /> 100% Spam Free Policy
                </span>
            </p>
        </div>
      </form>
    </div>
  );
}