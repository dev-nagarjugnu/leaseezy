import { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  Calendar,
  Maximize,
  CheckCircle2,
  Share2,
  ShieldCheck,
  ArrowLeft,
  Building2,
  Car,
  Zap,
  Users
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyGallery from '@/components/PropertyGallery';
import InquiryForm from '@/components/InquiryForm';

// --- HARDCODED COMMERCIAL DEMO DATA ---
const DEMO_PROPERTY = {
  _id: "demo-office-001",
  title: "One BKC - Premium Corporate Suite",
  location: "Bandra Kurla Complex, Mumbai",
  price: "₹ 275 / sqft", // Lease Rate
  area: "5,200 sqft",
  status: "For Lease",
  category: "Office Space",
  description: "A Grade-A commercial asset situated in the heart of India's financial district. This fitted-out office suite offers a column-free floor plate, enabling maximum space efficiency. Features include a dedicated server room, executive cabins with glass partitions, and a panoramic view of the MCA Club. Ideal for MNCs and Financial Institutions.",
  features: [
    "100% Power Backup", "Central HVAC", "High-Speed Elevators", 
    "Access Control System", "Dedicated Server Room", "Visitor Parking",
    "Fire Safety Compliant", "Cafeteria", "24/7 CCTV Surveillance"
  ],
  // Corporate Office Images
  gallery: [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80", // Main Office
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80", // Workstations
    "https://images.unsplash.com/photo-1504384308090-c54be3852f33?auto=format&fit=crop&w=800&q=80", // Boardroom
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", // Facade
    "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=800&q=80"  // Lobby
  ],
  possessionDate: "Ready to Move",
  workstations: "45 - 60",
  parkingRatio: "1:1000 sqft",
  floorPlate: "Column Free",
  reraId: "P51800012345"
};

const SIMILAR_PROPERTIES = [
  {
    id: "sim-1",
    title: "Cyber City Tower C",
    location: "DLF Phase 2, Gurgaon",
    price: "₹ 145 / sqft",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    category: "IT Park"
  },
  {
    id: "sim-2",
    title: "The Capital - Unit 402",
    location: "BKC, Mumbai",
    price: "₹ 310 / sqft",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=600&q=80",
    category: "Office"
  },
  {
    id: "sim-3",
    title: "Phoenix Marketcity Retail",
    location: "Kurla, Mumbai",
    price: "₹ 450 / sqft",
    image: "https://images.unsplash.com/photo-1567449303099-1d9c383660ff?auto=format&fit=crop&w=600&q=80",
    category: "Retail"
  }
];

export const metadata: Metadata = {
  title: 'Property Details | LeaseEzy Commercial',
  description: 'View premium commercial asset details.',
};

// --- MAIN PAGE COMPONENT ---
export default function PropertyDetailPage() {
  const property = DEMO_PROPERTY; 

  return (
    <div className="min-h-screen bg-white font-body text-brand-navy">
      <Navbar />

      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/properties" className="text-slate-500 hover:text-brand-navy flex items-center gap-2 text-sm font-bold transition-colors uppercase tracking-wide">
            <ArrowLeft size={16} /> Back to Catalog
          </Link>
          <div className="flex items-center gap-4">
             <button className="text-slate-400 hover:text-brand-navy transition-colors flex items-center gap-2 text-sm font-bold">
               <Share2 size={18} /> <span className="hidden sm:inline">Share Asset</span>
             </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: Main Content */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* 1. Client-Side Image Gallery */}
            <PropertyGallery images={property.gallery} title={property.title} />

            {/* 2. Title & Price Header */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                     <span className="px-3 py-1 text-[10px] font-bold uppercase rounded bg-brand-red text-white tracking-wider">
                       {property.status}
                     </span>
                     <span className="px-3 py-1 text-[10px] font-bold uppercase rounded bg-brand-navy text-white tracking-wider">
                       {property.category}
                     </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-navy leading-tight">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                    <MapPin size={16} className="text-brand-red" />
                    {property.location}
                  </div>
                </div>
                
                <div className="text-left lg:text-right">
                   <div className="inline-block border border-slate-200 bg-slate-50 px-6 py-3 rounded-lg">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Asking Rate</p>
                      <p className="text-2xl md:text-3xl font-bold text-brand-navy leading-none">{property.price}</p>
                   </div>
                </div>
              </div>

              {/* Quick Details Grid (Commercial Specs) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-slate-200">
                 
                 {/* Area */}
                 <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-brand-navy/5 rounded-lg text-brand-navy"><Maximize size={20}/></div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wide">Chargeable Area</p>
                      <p className="font-bold text-brand-navy text-sm">{property.area}</p>
                    </div>
                 </div>

                 {/* Capacity */}
                 <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-brand-navy/5 rounded-lg text-brand-navy"><Users size={20}/></div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wide">Capacity</p>
                      <p className="font-bold text-brand-navy text-sm">{property.workstations} Seats</p>
                    </div>
                 </div>

                 {/* Parking */}
                 <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-brand-navy/5 rounded-lg text-brand-navy"><Car size={20}/></div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wide">Parking</p>
                      <p className="font-bold text-brand-navy text-sm">{property.parkingRatio}</p>
                    </div>
                 </div>

                 {/* Power/Layout */}
                 <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-brand-navy/5 rounded-lg text-brand-navy"><Zap size={20}/></div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wide">Layout</p>
                      <p className="font-bold text-brand-navy text-sm">{property.floorPlate}</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* 3. Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-heading font-bold text-brand-navy border-l-4 border-brand-red pl-3">Asset Overview</h2>
              <p className="text-slate-600 leading-relaxed text-base">
                {property.description}
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg text-green-700 text-xs font-bold uppercase tracking-wide mt-2">
                  <ShieldCheck size={16} /> RERA Registered: {property.reraId}
              </div>
            </div>

            {/* 4. Amenities (Commercial) */}
            <div className="space-y-6">
              <h2 className="text-xl font-heading font-bold text-brand-navy border-l-4 border-brand-red pl-3">Building Specs & Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-brand-navy">
                    <CheckCircle2 size={16} className="text-brand-red flex-shrink-0" />
                    <span className="font-bold text-xs uppercase tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Map Placeholder */}
            <div className="space-y-4">
               <h2 className="text-xl font-heading font-bold text-brand-navy border-l-4 border-brand-red pl-3">Location Context</h2>
               <div className="bg-slate-100 rounded-xl h-72 w-full flex items-center justify-center relative overflow-hidden group border border-slate-200">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/city-fields.png')] opacity-20"></div>
                  <div className="relative z-10 text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                        <MapPin size={32} className="text-brand-red" />
                      </div>
                      <p className="font-bold text-brand-navy">Micro-Market Analysis</p>
                      <p className="text-xs text-slate-500 mt-1">Map View & Connectivity Report</p>
                  </div>
               </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sticky Sidebar */}
          <div className="lg:col-span-4 relative">
             <div className="sticky top-24 h-auto">
                {/* 
                   INTEGRATING THE NEW LEAD-GEN FORM 
                   Passing the property title dynamically
                */}
                <InquiryForm propertyTitle={property.title} />
             </div>
          </div>

        </div>
      </main>

      {/* 6. Similar Properties */}
      <section className="bg-slate-50 border-t border-slate-200 py-20 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center gap-2 mb-8">
             <span className="h-0.5 w-8 bg-brand-red"></span>
             <h2 className="text-2xl font-heading font-bold text-brand-navy">Comparable Assets</h2>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {SIMILAR_PROPERTIES.map((prop) => (
                <div key={prop.id} className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl hover:border-brand-navy/20 transition-all duration-300">
                   <div className="h-52 overflow-hidden relative">
                      <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors"></div>
                      <span className="absolute top-3 left-3 bg-brand-navy text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm">
                        {prop.category}
                      </span>
                   </div>
                   <div className="p-5">
                      <h3 className="font-heading font-bold text-brand-navy text-lg mb-1 truncate">{prop.title}</h3>
                      <p className="text-xs font-bold text-slate-500 flex items-center gap-1 mb-4 uppercase tracking-wide">
                        <MapPin size={12} className="text-brand-red" /> {prop.location}
                      </p>
                      <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                         <span className="font-bold text-brand-navy">{prop.price}</span>
                         <span className="text-xs font-bold text-brand-red cursor-pointer hover:underline flex items-center gap-1">
                           View Details <ArrowLeft size={12} className="rotate-180" />
                         </span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}