import { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  Calendar,
  Maximize,
  CheckCircle2,
  Share2,
  Facebook,
  Twitter,
  ShieldCheck,
  BedDouble,
  Bath,
  ArrowLeft,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyGallery from '@/components/PropertyGallery';
import InquiryForm from '@/components/InquiryForm';

// --- HARDCODED DEMO DATA ---
// This is what your client will see. Edit this text to change the content.
const DEMO_PROPERTY = {
  _id: "demo-id-001",
  title: "Stark Tower 4BHK Sky Villa",
  location: "Science City Road, Ahmedabad",
  price: "₹ 3.75 Cr",
  area: "3,800 sqft",
  status: "For Sale",
  category: "Residential",
  description: "Experience the pinnacle of luxury living in this exclusive 4BHK duplex penthouse. Stark Tower offers a meticulous design boasting thought and brilliance in every detail. Features floor-to-ceiling windows, a private plunge pool, and panoramic views of the skyline. Perfectly situated near major business hubs.",
  features: [
    "24/7 Security", "Private Pool", "Gymnasium", 
    "Reserved Parking", "Club House", "Power Backup",
    "Landscaped Gardens", "Children's Play Area", "Smart Home Access"
  ],
  // These images will be passed to your Gallery Component
  gallery: [
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=800&q=80"
  ],
  possessionDate: "Dec 2025",
  bedrooms: 4,
  bathrooms: 5,
  reraId: "PR/GJ/AHMEDABAD/00123"
};

const SIMILAR_PROPERTIES = [
  {
    id: "sim-1",
    title: "Orchid Heights 3BHK",
    location: "Bopal, Ahmedabad",
    price: "₹ 1.25 Cr",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
    category: "Residential"
  },
  {
    id: "sim-2",
    title: "Titanium Business Bay",
    location: "Prahlad Nagar",
    price: "₹ 85.00 L",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    category: "Commercial"
  },
  {
    id: "sim-3",
    title: "Greenfield Villa",
    location: "Shilaj Road",
    price: "₹ 4.50 Cr",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80",
    category: "Villa"
  }
];

export const metadata: Metadata = {
  title: 'Property Details | LeaseEzy Demo',
  description: 'View premium property details.',
};

// --- MAIN PAGE COMPONENT ---
export default function PropertyDetailPage() {
  // We ignore specific params for the demo and always load DEMO_PROPERTY
  const property = DEMO_PROPERTY; 

  return (
    <div className="min-h-screen bg-slate-50 font-body text-slate-800">
      <Navbar />

      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/properties" className="text-slate-500 hover:text-[#0F172A] flex items-center gap-2 text-sm font-medium transition-colors">
            <ArrowLeft size={16} /> Back to Listings
          </Link>
          <div className="flex items-center gap-4">
             <button className="text-slate-400 hover:text-[#0F172A]"><Share2 size={20} /></button>
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
            <div className="space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                     <span className="px-3 py-1 text-xs font-bold uppercase rounded-sm text-white bg-[#EF4444]">
                       {property.status}
                     </span>
                     <span className="px-3 py-1 text-xs font-bold uppercase rounded-sm bg-slate-200 text-slate-600">
                       {property.category}
                     </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-heading font-bold text-[#0F172A] leading-tight">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-2 text-slate-500 font-medium">
                    <MapPin size={18} className="text-[#EF4444]" />
                    {property.location}
                  </div>
                </div>
                
                <div className="text-left lg:text-right">
                   <div className="inline-block bg-[#DAA520] text-white px-6 py-3 rounded-lg shadow-md">
                      <p className="text-xs font-semibold opacity-90 uppercase tracking-wide mb-1">Price</p>
                      <p className="text-2xl md:text-3xl font-bold leading-none">{property.price}</p>
                   </div>
                </div>
              </div>

              {/* Quick Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-slate-200">
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 rounded text-[#0F172A]"><Maximize size={20}/></div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Area</p>
                      <p className="font-bold text-slate-700">{property.area}</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 rounded text-[#0F172A]"><BedDouble size={20}/></div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Bedrooms</p>
                      <p className="font-bold text-slate-700">{property.bedrooms} Beds</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 rounded text-[#0F172A]"><Bath size={20}/></div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Bathrooms</p>
                      <p className="font-bold text-slate-700">{property.bathrooms} Baths</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 rounded text-[#0F172A]"><Calendar size={20}/></div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Possession</p>
                      <p className="font-bold text-slate-700">{property.possessionDate}</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* 3. Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-heading font-bold text-[#0F172A]">Overview</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {property.description}
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-bold">
                  <ShieldCheck size={18} /> RERA Verified: {property.reraId}
              </div>
            </div>

            {/* 4. Amenities */}
            <div className="space-y-6">
              <h2 className="text-xl font-heading font-bold text-[#0F172A]">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-slate-700">
                    <CheckCircle2 size={18} className="text-[#DAA520] flex-shrink-0" />
                    <span className="font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Map Placeholder */}
            <div className="space-y-4">
               <h2 className="text-xl font-heading font-bold text-[#0F172A]">Location</h2>
               <div className="bg-slate-200 rounded-xl h-64 w-full flex items-center justify-center relative overflow-hidden group border border-slate-300">
                  <div className="absolute inset-0 bg-slate-300 opacity-50"></div>
                  <div className="relative z-10 text-center">
                      <MapPin size={40} className="text-[#EF4444] mx-auto mb-2" />
                      <p className="font-bold text-slate-700">Map Integration</p>
                      <p className="text-xs text-slate-500">(Google Maps will appear here)</p>
                  </div>
               </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sticky Sidebar */}
          <div className="lg:col-span-4 relative">
             <div className="sticky top-24 space-y-6">
                
                {/* Client-Side Inquiry Form */}
                <InquiryForm propertyTitle={property.title} />

             </div>
          </div>

        </div>
      </main>

      {/* 6. Similar Properties */}
      <section className="bg-white border-t border-slate-200 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-2xl font-heading font-bold text-[#0F172A] mb-8">Similar Properties</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {SIMILAR_PROPERTIES.map((prop) => (
                <div key={prop.id} className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                   <div className="h-48 overflow-hidden relative">
                      <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <span className="absolute top-3 left-3 bg-[#0F172A] text-white text-[10px] font-bold px-2 py-1 rounded uppercase">{prop.category}</span>
                   </div>
                   <div className="p-5">
                      <h3 className="font-bold text-[#0F172A] text-lg mb-1 truncate">{prop.title}</h3>
                      <p className="text-sm text-slate-500 flex items-center gap-1 mb-4"><MapPin size={14} className="text-[#EF4444]" /> {prop.location}</p>
                      <div className="flex items-center justify-between border-t border-slate-200 pt-3">
                         <span className="font-bold text-[#0F172A]">{prop.price}</span>
                         <span className="text-xs font-bold text-[#EF4444] cursor-pointer hover:underline">View Details</span>
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