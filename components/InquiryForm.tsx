'use client';

import { useState } from 'react';
import { 
  CheckCircle2, Loader2, Send, 
  Building2, Calendar, FileText, Eye, 
  MapPin, ShieldCheck 
} from 'lucide-react';

interface InquiryFormProps {
  propertyTitle: string;
}

type IntentType = 'viewing' | 'floorplan' | 'quote' | 'callback';

export default function InquiryForm({ propertyTitle }: InquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [intent, setIntent] = useState<IntentType>('viewing');

  // Mock Submission Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request capturing specific property data
    console.log(`Submitting inquiry for: ${propertyTitle} | Intent: ${intent}`);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 text-center animate-in fade-in zoom-in duration-300 h-full flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 border border-green-100">
          <CheckCircle2 className="text-green-600" size={40} />
        </div>
        <h3 className="text-2xl font-heading font-bold text-brand-navy mb-2">Inquiry Locked-In</h3>
        <p className="text-slate-500 text-sm mb-8 max-w-xs mx-auto leading-relaxed">
          We have registered your interest for <br/>
          <span className="font-bold text-brand-navy block mt-1">"{propertyTitle}"</span>
        </p>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 w-full mb-6">
          <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Next Steps</p>
          <p className="text-sm font-medium text-brand-navy">Asset Manager assignment in &lt; 2 hrs.</p>
        </div>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-sm font-bold text-brand-red underline hover:text-brand-navy transition-colors"
        >
          Make another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-xl shadow-navy-900/5 border border-slate-200 overflow-hidden flex flex-col h-full">
      
      {/* 1. AGENT / TRUST HEADER */}
      <div className="bg-slate-50 p-6 border-b border-slate-100 flex items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold border-2 border-white shadow-md">
            LM
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
        </div>
        <div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Listing Manager</p>
          <p className="font-heading text-sm font-bold text-brand-navy">LeaseEzy Advisory Desk</p>
        </div>
      </div>

      <div className="p-6 md:p-8 flex-grow">
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* 2. PROPERTY BINDING (Read Only) */}
          <div className="bg-brand-navy/5 p-3 rounded-lg border border-brand-navy/10 flex items-start gap-3">
            <Building2 className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Inquiring For</p>
              <p className="text-sm font-bold text-brand-navy leading-tight">{propertyTitle}</p>
            </div>
          </div>

          {/* 3. INTENT SELECTOR (Qualifies the Lead) */}
          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
              I am interested in...
            </label>
            <div className="grid grid-cols-2 gap-2">
              <IntentButton 
                active={intent === 'viewing'} 
                onClick={() => setIntent('viewing')} 
                icon={<Eye size={14}/>} 
                label="Site Visit" 
              />
              <IntentButton 
                active={intent === 'floorplan'} 
                onClick={() => setIntent('floorplan')} 
                icon={<FileText size={14}/>} 
                label="Floor Plans" 
              />
              <IntentButton 
                active={intent === 'quote'} 
                onClick={() => setIntent('quote')} 
                icon={<Building2 size={14}/>} 
                label="Best Price" 
              />
              <IntentButton 
                active={intent === 'callback'} 
                onClick={() => setIntent('callback')} 
                icon={<Calendar size={14}/>} 
                label="Callback" 
              />
            </div>
          </div>

          <div className="w-full h-[1px] bg-slate-100 my-2"></div>

          {/* 4. USER DETAILS */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-xs font-bold text-brand-navy mb-1.5">Full Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                required
                placeholder="Ex. Rajesh Kumar" 
                className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none transition-all text-sm placeholder:text-slate-400" 
              />
            </div>

            {/* COMPANY NAME (Crucial for B2B) */}
            <div>
              <label className="block text-xs font-bold text-brand-navy mb-1.5">Company Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                required
                placeholder="Ex. TechFlow Solutions Pvt Ltd" 
                className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none transition-all text-sm placeholder:text-slate-400" 
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-brand-navy mb-1.5">Work Email <span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  required
                  placeholder="name@company.com" 
                  className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none transition-all text-sm placeholder:text-slate-400" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-brand-navy mb-1.5">Phone <span className="text-red-500">*</span></label>
                <input 
                  type="tel" 
                  required
                  placeholder="+91 98765..." 
                  className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none transition-all text-sm placeholder:text-slate-400" 
                />
              </div>
            </div>

            {/* TIMELINE (Qualifies Urgency) */}
            <div>
              <label className="block text-xs font-bold text-brand-navy mb-1.5">Move-in Timeline</label>
              <div className="relative">
                <select className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none transition-all text-sm text-slate-600 appearance-none cursor-pointer">
                  <option>Immediate (Within 1 Month)</option>
                  <option>1 - 3 Months</option>
                  <option>3 - 6 Months</option>
                  <option>Just Browsing / Future Planning</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>
          </div>

          {/* 5. SUBMIT ACTION */}
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-brand-navy hover:bg-slate-800 text-white font-bold py-4 rounded-lg shadow-lg shadow-navy-900/20 transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4 group"
          >
             {isSubmitting ? (
               <>
                 <Loader2 size={18} className="animate-spin" /> Verify & Submit...
               </>
             ) : (
               <>
                 <span className="uppercase tracking-wider text-xs">Submit Official Inquiry</span> 
                 <Send size={16} className="group-hover:translate-x-1 transition-transform" />
               </>
             )}
          </button>

          <div className="text-center">
              <p className="text-[10px] text-slate-400 flex items-center justify-center gap-1.5">
                  <ShieldCheck size={12} className="text-green-500" /> 
                  Assets verified by LeaseEzy Legal Team
              </p>
          </div>
        </form>
      </div>
    </div>
  );
}

// Helper for the Intent Grid
function IntentButton({ active, onClick, icon, label }: any) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex items-center gap-2 px-3 py-2.5 rounded-md border text-xs font-bold transition-all duration-200
        ${active 
          ? 'bg-brand-navy text-white border-brand-navy shadow-md' 
          : 'bg-white text-slate-500 border-slate-200 hover:border-brand-navy hover:text-brand-navy'
        }
      `}
    >
      {icon} {label}
    </button>
  );
}