import Image from 'next/image';
import Link from 'next/link';

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
    <section className="bg-white py-16 text-brand-navy md:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:px-8">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-red">
            Featured Deals
          </p>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Signature Exclusives</h2>
          <p className="text-base text-slate-600 md:text-lg">
            Handpicked Grade-A assets across India&apos;s most coveted micro-markets.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {deals.map((deal) => (
            <article
              key={deal.id}
              className="relative overflow-hidden rounded-3xl bg-brand-navy shadow-xl transition hover:-translate-y-1"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <div className="space-y-1">
                  <p className="text-sm uppercase tracking-[0.35em] text-white/70">{deal.status}</p>
                  <h3 className="text-xl font-semibold leading-tight">{deal.title}</h3>
                  <p className="text-base text-white/90">{deal.location}</p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-white/80">Total Area: {deal.area}</p>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-brand-red hover:border-brand-red hover:text-white"
                  >
                    View Property
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

