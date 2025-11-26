import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';

/* 
  Ideally, these images should be office buildings. 
  Ensure your /public folder has these images or replace them later.
*/
const deals = [
  {
    id: 'deal-1',
    title: 'Unitech Business Zone - Tower B',
    location: 'NH-8, Gurgaon',
    area: '170,000 sq ft',
    status: 'Prime Building',
    image: '/demo-property-1.jpg',
  },
  {
    id: 'deal-2',
    title: 'Augusta Point',
    location: 'NH-8, Gurgaon',
    area: '150,000 sq ft',
    status: 'Prime Building',
    image: '/demo-property-2.jpg',
  },
  {
    id: 'deal-3',
    title: 'SP Infocity - Tower A',
    location: 'NH-8, Gurgaon',
    area: '336,000 sq ft',
    status: 'Prime Building',
    image: '/demo-property-3.jpg',
  },
  {
    id: 'deal-4',
    title: 'ILABS Center',
    location: 'Hitec City, Hyderabad',
    area: '280,000 sq ft',
    status: 'Grade A',
    image: '/demo-property-4.jpg',
  },
  {
    id: 'deal-5',
    title: 'Prestige Shantiniketan',
    location: 'Whitefield, Bengaluru',
    area: '420,000 sq ft',
    status: 'Mixed Use',
    image: '/demo-property-5.jpg',
  },
  {
    id: 'deal-6',
    title: 'Godrej BKC',
    location: 'Bandra Kurla Complex, Mumbai',
    area: '250,000 sq ft',
    status: 'Premium',
    image: '/demo-property-6.jpg',
  },
  {
    id: 'deal-7',
    title: 'DLF Downtown',
    location: 'Tidel Park, Chennai',
    area: '190,000 sq ft',
    status: 'Upcoming',
    image: '/demo-property-7.jpg',
  },
  {
    id: 'deal-8',
    title: 'Mindspace',
    location: 'Hitec City, Hyderabad',
    area: '310,000 sq ft',
    status: 'Operational',
    image: '/demo-property-8.jpg',
  },
  {
    id: 'deal-9',
    title: 'Phoenix Marketcity Offices',
    location: 'Pune',
    area: '270,000 sq ft',
    status: 'Retail + Office',
    image: '/demo-property-9.jpg',
  },
  {
    id: 'deal-10',
    title: 'One Horizon Center',
    location: 'DLF Phase V, Gurgaon',
    area: '230,000 sq ft',
    status: 'Premium',
    image: '/demo-property-10.jpg',
  },
];

export function FeaturedDeals() {
  return (
    <section className="bg-brand-gray py-20 lg:py-28 text-brand-navy">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
            Exclusive Mandates
          </p>
          <h2 className="font-heading text-3xl font-bold md:text-5xl text-brand-navy">
            Signature Deals
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Handpicked Grade-A assets across India&apos;s most coveted business districts.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {deals.map((deal) => (
            <article
              key={deal.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:border-brand-navy/20 hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 420px"
                />
                <div className="absolute top-4 left-4 bg-brand-navy/90 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm">
                  {deal.status}
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-between p-6">
                <div>
                  <h3 className="font-heading text-lg font-bold text-brand-navy leading-tight mb-2">
                    {deal.title}
                  </h3>
                  <p className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wide mb-4">
                    <MapPin className="h-3.5 w-3.5 text-brand-red" />
                    {deal.location}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Leasable Area</span>
                    <span className="text-sm font-bold text-brand-navy">{deal.area}</span>
                  </div>
                  
                  <Link
                    href="#contact"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-red hover:text-brand-navy transition-colors"
                  >
                    View Details
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDeals;