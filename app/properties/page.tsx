'use client';

import Link from "next/link";
import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  ArrowRight, 
  Search, 
  Filter, 
  LayoutGrid, 
  List as ListIcon, 
  X, 
  CheckCircle2, 
  Star 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- Types & Mock Data ---

type Category = "All" | "Residential" | "Commercial" | "Villa";
type ViewMode = "grid" | "list";

interface Property {
  id: string;
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Villa";
  price: string;
  priceValue: number; // Added for sorting logic potential
  location: string;
  area: string;
  imageUrl: string;
  status: "For Sale" | "For Lease";
  date: string;
}

const MOCK_PROPERTIES: Property[] = Array.from({ length: 45 }).map((_, i) => {
  const types: ("Residential" | "Commercial" | "Villa")[] = ["Residential", "Commercial", "Villa"];
  const type = types[i % 3];
  const locations = ["Downtown Dubai", "Business Bay", "Palm Jumeirah", "Marina", "Hills Estate"];
  
  const baseTitle =
    type === "Villa"
      ? "Luxury 5-Bed Villa with Sea View"
      : type === "Commercial"
      ? "Premium Office Space with City View"
      : "Modern Apartment with Sea View";

  return {
    id: `prop-${i}`,
    slug: baseTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    title: baseTitle,
    category: type,
    price: type === "Commercial" ? "₹ 1.20 L/mo" : "₹ 3.75 Cr",
    priceValue: i * 10000,
    location: locations[i % locations.length],
    area: type === "Villa" ? "5,200 sqft" : type === "Commercial" ? "1,200 sqft" : "1,850 sqft",
    imageUrl: `https://images.unsplash.com/photo-${
        type === "Villa" 
        ? "1613977257363-707ba9348227" 
        : type === "Commercial" 
        ? "1497366216548-37526070297c" 
        : "1545324418-cc1a3fa10c00"
    }?auto=format&fit=crop&w=800&q=80`,
    status: i % 3 === 0 ? "For Lease" : "For Sale",
    date: "Added 2 days ago",
  };
});

// --- Components ---

const Badge = ({ children }: { children: string }) => {
  const isSale = children === "For Sale";
  return (
    <span className={`
      text-[10px] sm:text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-sm
      ${isSale 
        ? "bg-[#EF4444] text-white" 
        : "bg-[#0F172A] text-white" 
      }
    `}>
      {children}
    </span>
  );
};

// 1. Grid View Card (Vertical)
const PropertyCardGrid = ({ property }: { property: Property }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#EF4444]/30 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
  >
    <Link href={`/properties/${property.slug}`} className="relative block h-60 overflow-hidden">
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
      <div className="absolute top-4 left-4 z-10"><Badge>{property.status}</Badge></div>
      <div className="absolute bottom-4 left-4 z-10 text-white">
          <p className="text-xs font-medium bg-black/30 backdrop-blur-sm px-2 py-1 rounded border border-white/20 inline-flex items-center gap-1">
            <MapPin size={12} className="text-[#EF4444]" /> {property.location}
          </p>
      </div>
    </Link>
    <div className="p-5 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-3">
        <span className="text-[11px] font-bold text-[#EF4444] bg-red-50 px-2 py-1 rounded uppercase tracking-wider">{property.category}</span>
      </div>
      <h3 className="font-heading font-bold text-lg text-[#0F172A] mb-2 line-clamp-2 leading-tight group-hover:text-[#EF4444] transition-colors">{property.title}</h3>
      <div className="mt-auto pt-5 border-t border-slate-100 flex items-end justify-between">
        <div className="flex flex-col">
          <span className="text-xs text-slate-400 font-semibold uppercase mb-1">Price</span>
          <span className="font-heading font-bold text-xl text-[#0F172A]">{property.price}</span>
          <span className="text-xs text-slate-500 mt-1">{property.area}</span>
        </div>
        <Link
          href={`/properties/${property.slug}`}
          className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-[#EF4444] group-hover:border-[#EF4444] group-hover:text-white transition-all duration-300"
        >
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </motion.div>
);

// 2. List View Card (Horizontal)
const PropertyCardList = ({ property }: { property: Property }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#EF4444]/30 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row h-auto md:h-52"
  >
    <Link href={`/properties/${property.slug}`} className="relative block w-full md:w-72 h-48 md:h-full shrink-0 overflow-hidden">
      <img src={property.imageUrl} alt={property.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute top-4 left-4 z-10"><Badge>{property.status}</Badge></div>
    </Link>
    
    <div className="p-5 flex flex-col justify-between flex-grow">
      <div>
        <div className="flex justify-between items-center mb-2">
           <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
             <MapPin size={14} className="text-[#EF4444]" /> {property.location}
           </span>
           <span className="text-[11px] font-bold text-[#EF4444] bg-red-50 px-2 py-1 rounded uppercase">{property.category}</span>
        </div>
        <h3 className="font-heading font-bold text-xl text-[#0F172A] mb-2 group-hover:text-[#EF4444] transition-colors">{property.title}</h3>
        <p className="text-sm text-slate-500 line-clamp-2">Featuring premium amenities, modern architecture, and situated in the heart of {property.location}, this property offers an unparalleled lifestyle.</p>
      </div>

      <div className="flex items-center justify-between mt-4 md:mt-0 pt-4 border-t border-slate-100">
         <div className="flex gap-6">
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wide">Price</span>
              <p className="font-bold text-lg text-[#0F172A]">{property.price}</p>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wide">Area</span>
              <p className="font-medium text-slate-700">{property.area}</p>
            </div>
         </div>
         <Link href={`/properties/${property.slug}`} className="px-5 py-2 rounded-lg bg-[#0F172A] text-white text-sm font-bold hover:bg-[#EF4444] transition-colors shadow-lg shadow-slate-900/10">
           View Details
         </Link>
      </div>
    </div>
  </motion.div>
);

const FilterButton = ({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) => (
  <button
    onClick={onClick}
    className={`
      px-6 py-2.5 rounded-full font-heading font-semibold text-sm transition-all duration-300 relative overflow-hidden
      ${active
        ? "bg-[#EF4444] text-white shadow-lg shadow-red-500/30 ring-2 ring-red-400/20"
        : "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:border-white/40"
      }
    `}
  >
    {label}
  </button>
);

// --- Main Page Component ---

function PropertiesContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [showFilters, setShowFilters] = useState(false);
  const searchParams = useSearchParams();
  
  // Filter States
  const [filterLocation, setFilterLocation] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 800));
      setProperties(MOCK_PROPERTIES);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (!categoryParam) return;
    const map: Record<string, Category> = {
      all: "All",
      residential: "Residential",
      commercial: "Commercial",
      villa: "Villa",
    };
    const normalized = categoryParam.toLowerCase();
    const mappedCategory = map[normalized];
    if (mappedCategory && mappedCategory !== activeCategory) {
      setActiveCategory(mappedCategory);
    }
  }, [searchParams, activeCategory]);

  // Complex Filtering Logic
  const filteredProperties = properties.filter((p) => {
    const categoryMatch = activeCategory === "All" || p.category === activeCategory;
    const locationMatch = filterLocation === "All" || p.location === filterLocation;
    const statusMatch = filterStatus === "All" || (filterStatus === "Sale" ? p.status === "For Sale" : p.status === "For Lease");
    return categoryMatch && locationMatch && statusMatch;
  });

  // Pagination
  const ITEMS_PER_PAGE = viewMode === 'grid' ? 12 : 8; // Show fewer items in list view
  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
  const paginatedProperties = filteredProperties.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  useEffect(() => { setCurrentPage(1); }, [activeCategory, filterLocation, filterStatus, viewMode]);

  return (
    <div className="min-h-screen flex flex-col font-body bg-slate-50">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative py-28 sm:py-36 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')" }} 
        >
          <div className="absolute inset-0 bg-[#0F172A]/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6 animate-fade-in-up">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] to-orange-400">Signature Space</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Curated commercial and residential properties for the discerning client.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["All", "Residential", "Commercial", "Villa"].map((cat) => (
              <FilterButton
                key={cat}
                label={cat === "All" ? "All Properties" : cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat as Category)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Controls & Grid Section */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full -mt-12 relative z-20">
        
        {/* Active Filters Bar */}
        <div className="bg-white p-4 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="font-heading font-bold text-[#0F172A] text-lg">
              <span className="text-[#EF4444]">{filteredProperties.length}</span> Premium Listings
            </span>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border text-sm font-semibold transition-all ${showFilters ? 'bg-slate-100 border-slate-300 text-[#0F172A]' : 'bg-white border-slate-200 text-slate-600 hover:border-[#EF4444]'}`}
              >
                <Filter size={16} className={showFilters ? "text-[#EF4444]" : ""} />
                {showFilters ? "Hide Filters" : "Filters"}
              </button>

              <div className="flex gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white text-[#0F172A] shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    <LayoutGrid size={18}/>
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white text-[#0F172A] shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    <ListIcon size={18}/>
                  </button>
              </div>
            </div>
          </div>

          {/* Expandable Filter Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
                   <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 uppercase">Location</label>
                      <select 
                        className="w-full p-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:ring-2 focus:ring-[#EF4444] outline-none"
                        value={filterLocation}
                        onChange={(e) => setFilterLocation(e.target.value)}
                      >
                        <option value="All">All Locations</option>
                        <option value="Downtown Dubai">Downtown Dubai</option>
                        <option value="Business Bay">Business Bay</option>
                        <option value="Palm Jumeirah">Palm Jumeirah</option>
                      </select>
                   </div>
                   <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 uppercase">Status</label>
                      <select 
                        className="w-full p-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:ring-2 focus:ring-[#EF4444] outline-none"
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                      >
                        <option value="All">Any Status</option>
                        <option value="Sale">For Sale</option>
                        <option value="Lease">For Lease</option>
                      </select>
                   </div>
                   <div className="flex items-end">
                      <button 
                        onClick={() => { setFilterLocation("All"); setFilterStatus("All"); }}
                        className="w-full p-2.5 text-sm text-[#EF4444] font-bold hover:bg-red-50 rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <X size={14} /> Clear All Filters
                      </button>
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results Area */}
        <div className="mt-8 min-h-[400px]">
          {loading ? (
             <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
               {Array.from({ length: 8 }).map((_, i) => (
                 <div key={i} className={`bg-white rounded-2xl border border-slate-200 animate-pulse ${viewMode === 'grid' ? 'h-96' : 'h-48'}`} />
               ))}
             </div>
          ) : filteredProperties.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={32} className="text-slate-400" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#0F172A]">No Properties Match</h3>
              <p className="text-slate-500 mt-2">Try resetting your filters.</p>
            </div>
          ) : (
            <motion.div 
              layout
              className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 max-w-4xl mx-auto'}`}
            >
              <AnimatePresence mode="popLayout">
                {paginatedProperties.map((property) => (
                  viewMode === 'grid' 
                    ? <PropertyCardGrid key={property.id} property={property} />
                    : <PropertyCardList key={property.id} property={property} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Pagination */}
          {!loading && filteredProperties.length > 0 && (
             <div className="flex justify-center gap-2 mt-12">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-slate-200 text-[#0F172A] font-bold disabled:opacity-50 hover:bg-slate-50"
                >
                  Prev
                </button>
                <span className="px-4 py-2 text-slate-500 font-medium">Page {currentPage} of {totalPages}</span>
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-slate-200 text-[#0F172A] font-bold disabled:opacity-50 hover:bg-slate-50"
                >
                  Next
                </button>
             </div>
          )}
        </div>
      </main>

      {/* 5. NEW CTA SECTION: "Consultation" Focused (Fixed Visual) */}
      <section className="relative py-24 px-4 overflow-hidden bg-[#0F172A]">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop')",
               backgroundPosition: 'center',
               backgroundSize: 'cover'
             }} 
        />
        
        {/* Red Glow Effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EF4444] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Text Content */}
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[#EF4444] text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                <CheckCircle2 size={12} /> Expert Guidance
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white leading-tight">
                Can't Find The <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">Perfect Match?</span>
              </h2>
            </div>
            
            <p className="text-slate-400 text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
              Don't waste time scrolling. Our dedicated property consultants have access to off-market inventory and can curate a shortlist tailored to your specific business or residential needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
               <button className="px-8 py-4 bg-[#EF4444] hover:bg-[#d93838] text-white font-bold rounded-lg shadow-[0_20px_50px_-12px_rgba(239,68,68,0.5)] transition-all hover:scale-105 flex items-center justify-center gap-2">
                 Schedule a Free Call <ArrowRight size={20} />
               </button>
            </div>
          </div>

          {/* Right Visual Element (The "Consultation Widget" Look) */}
          <div className="flex-1 w-full max-w-md">
             {/* This represents a "Booking Interface" - Professional & Service Oriented */}
             <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl transform md:rotate-2 transition-transform hover:rotate-0 duration-500">
                
                {/* Header of the Card */}
                <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                   <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden">
                      {/* Placeholder for Agent Avatar */}
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80" alt="Agent" className="w-full h-full object-cover opacity-80" />
                   </div>
                   <div>
                      <p className="text-white font-bold text-sm">Priority Consultation</p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wide">Agents Available Now</p>
                      </div>
                   </div>
                </div>
                
                {/* Simulated Time Slots */}
                <div className="space-y-3 mb-6">
                   <p className="text-xs text-slate-400 font-medium uppercase">Select a Time</p>
                   <div className="grid grid-cols-2 gap-2">
                      <div className="px-3 py-2 rounded bg-[#EF4444] text-white text-xs font-bold text-center border border-[#EF4444] shadow-lg shadow-red-900/20 cursor-default">
                        Today, 4:00 PM
                      </div>
                      <div className="px-3 py-2 rounded bg-slate-800 text-slate-400 text-xs font-medium text-center border border-slate-700">
                        Tomorrow, 10:00 AM
                      </div>
                   </div>
                </div>

                {/* Simulated Inquiry Details */}
                <div className="space-y-2">
                   <div className="h-2 w-1/3 bg-slate-700 rounded-full"></div>
                   <div className="h-10 w-full bg-slate-800/50 rounded-lg border border-slate-700 flex items-center px-3">
                      <span className="text-xs text-slate-500">I'm looking for a 3BHK in...</span>
                   </div>
                </div>

                {/* Bottom Decor */}
                <div className="pt-6 mt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-slate-500">
                   <span>LeaseEzy Concierge</span>
                   <span className="flex items-center gap-1"><CheckCircle2 size={10} className="text-[#EF4444]" /> Verified Partner</span>
                </div>
             </div>
          </div>

        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-50 text-[#0F172A] font-heading text-lg">Loading properties...</div>}>
      <PropertiesContent />
    </Suspense>
  );
}