'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search, ChevronRight, User } from 'lucide-react';

// --- MOCK DATA (SEO RICH TITLES) ---
const BLOG_POSTS = [
  {
    id: 1,
    slug: 'gift-city-investment-guide-2025',
    title: "Why GIFT City is India's New Real Estate Goldmine",
    excerpt: "An in-depth analysis of tax benefits, SEZ norms, and the surging rental yields in Gujarat's financial tech hub.",
    category: "Market Trends",
    author: "Vikram Singh",
    date: "Nov 24, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    featured: true
  },
  {
    id: 2,
    slug: 'rent-agreement-vs-lease',
    title: "Lease vs. Leave & License: What Tenants Must Know",
    excerpt: "Stop getting confused by legal jargon. Here is the definitive guide to protecting your rights in Indian rental contracts.",
    category: "Legal Advice",
    author: "Sneha Patel",
    date: "Nov 20, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    featured: false
  },
  {
    id: 3,
    slug: 'luxury-living-bangalore',
    title: "The Rise of Ultra-Luxury Condos in Bangalore",
    excerpt: "From Whitefield to Sadashivnagar, discover why HNIs are shifting from bungalows to managed high-rise communities.",
    category: "Lifestyle",
    author: "Rajesh Malhotra",
    date: "Nov 18, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    featured: false
  },
  {
    id: 4,
    slug: 'nri-property-management',
    title: "The NRI's Guide to Property Management in India",
    excerpt: "How to manage your rental assets remotely without relying on relatives. Digital inspections, rent collection, and more.",
    category: "NRI Corner",
    author: "Vikram Singh",
    date: "Nov 15, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=800&auto=format&fit=crop",
    featured: false
  },
  {
    id: 5,
    slug: 'commercial-leasing-trends',
    title: "Post-Pandemic Office Spaces: The Hybrid Shift",
    excerpt: "Commercial leasing isn't dead; it's evolving. What companies are looking for in 2025 workspaces.",
    category: "Market Trends",
    author: "Sneha Patel",
    date: "Nov 10, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    featured: false
  },
];

const CATEGORIES = ["All", "Market Trends", "Legal Advice", "Lifestyle", "NRI Corner"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const filteredPosts = activeCategory === "All" 
    ? BLOG_POSTS.filter(post => !post.featured) 
    : BLOG_POSTS.filter(post => post.category === activeCategory && !post.featured);

  const featuredPost = BLOG_POSTS.find(post => post.featured);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      {/* 
        1. SEO HEADER SECTION 
        Dark Navy for premium contrast. H1 tag optimized for search engines.
      */}
      <header className="bg-[#0F172A] pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1D4ED8] rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6 border border-white/10 rounded-full px-4 py-1 bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse" />
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-slate-300">
              LeaseEzy Intelligence
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Market Insights & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-400">
              Expert Perspectives
            </span>
          </h1>
          <p className="font-body text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Curated articles on real estate trends, legal nuances, and lifestyle upgrades. 
            Stay ahead of the curve with LeaseEzy.
          </p>
        </div>
      </header>

      {/* 
        2. MAIN CONTENT AREA 
        Silver Gradient Background for that "LeaseEzy" signature look
      */}
      <main className="relative py-20 px-6 overflow-hidden">
        {/* The Silver Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-[#E8EAEF] to-[#D1D5DB] z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* FEATURED ARTICLE (SEO PRIORITY) */}
          {featuredPost && activeCategory === "All" && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <Link href={`/blog/${featuredPost.slug}`}>
                <article className="group relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer">
                  <Image 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Premium Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent opacity-90" />
                  
                  <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:max-w-4xl">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-[#EF4444] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
                        Featured
                      </span>
                      <span className="text-slate-300 text-sm font-medium flex items-center gap-2">
                        <Clock className="w-4 h-4" /> {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight mb-4 group-hover:text-slate-200 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="font-body text-slate-300 text-lg md:text-xl line-clamp-2 max-w-2xl mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-white font-heading font-bold uppercase tracking-widest text-sm group-hover:gap-4 transition-all">
                      Read Full Article <ArrowRight className="w-5 h-5 text-[#EF4444]" />
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          )}

          {/* FILTERS & SEARCH */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeCategory === cat 
                      ? 'bg-[#0F172A] text-white shadow-lg scale-105' 
                      : 'bg-white text-slate-500 hover:bg-white/80 border border-transparent hover:border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Simple Search Bar */}
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full md:w-64 pl-10 pr-4 py-2 rounded-full bg-white border border-transparent focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 outline-none text-sm font-body transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* BLOG GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <article className="group h-full bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col hover:-translate-y-1">
                    
                    {/* Card Image */}
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image 
                        src={post.image} 
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-md text-[#0F172A] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-xl font-bold text-[#0F172A] mb-3 leading-snug group-hover:text-[#1D4ED8] transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="font-body text-sm text-slate-500 mb-6 line-clamp-3 flex-grow leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Author & Read More */}
                      <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                           <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                              <User className="w-4 h-4" />
                           </div>
                           <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                             {post.author}
                           </span>
                        </div>
                        <span className="bg-slate-50 p-2 rounded-full text-[#0F172A] group-hover:bg-[#EF4444] group-hover:text-white transition-colors">
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                  </article>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* 
            3. NON-LOUD CTA STRIP
            Sleek, horizontal, premium look. Not a big box.
          */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#0F172A] px-8 py-10 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
              {/* Subtle Texture */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
              <div className="absolute right-0 top-0 w-64 h-64 bg-[#EF4444] blur-[100px] opacity-20 rounded-full pointer-events-none" />

              <div className="relative z-10 text-center md:text-left">
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  Knowledge is Power.
                </h3>
                <p className="font-body text-slate-400 text-sm max-w-md">
                  Join 5,000+ investors and tenants receiving our weekly market intelligence report. No spam, just value.
                </p>
              </div>

              <div className="relative z-10 w-full md:w-auto">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] text-sm font-body w-full sm:w-64"
                  />
                  <button className="px-8 py-3 bg-[#1D4ED8] hover:bg-[#153eac] text-white font-heading font-bold text-xs uppercase tracking-widest rounded-lg transition-all shadow-lg whitespace-nowrap">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </main>
      <Footer />
    </div>
  );
}