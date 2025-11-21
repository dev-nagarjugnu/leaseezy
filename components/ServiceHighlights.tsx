'use client';

import Image from 'next/image';

const services = [
  {
    title: 'Buy',
    description:
      'Advisory-driven acquisition support for corporate HQs, flagship retail, and institutional portfolios across India’s top business districts.',
    image: '/buy.jpg',
  },
  {
    title: 'Sell',
    description:
      'Structured exits with curated buyer pools, data-backed valuations, and seamless diligence that preserves momentum and pricing power.',
    image: '/sale.jpg',
  },
  {
    title: 'Rent',
    description:
      'Plug-and-play leasing programs that match Grade-A spaces with enterprise tenants, backed by airtight documentation and on-ground ops.',
    image: '/rent.jpg',
  },
  {
    title: 'Invest',
    description:
      'Access institutional-quality deal flow—offices, logistics, retail—complete with underwriting, capital partners, and turn-key asset management.',
    image: '/invest.jpg',
  },
];

export function ServiceHighlights() {
  return (
    <section className="bg-gradient-to-b from-[#0B1120] via-[#4b5668] to-[#e2e7f0] py-20 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 text-center md:text-left">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-red">What We Offer</p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Tailored Property Services for Every Move
          </h2>
          <p className="text-base text-slate-300 md:w-3/4">
            LeaseEzy orchestrates end-to-end commercial real estate journeys: identifying opportunities, structuring
            finance, negotiating leases, and unlocking new markets with zero friction.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-[32px] border border-white/40 bg-white/60 shadow-xl transition hover:shadow-2xl"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 transition group-hover:bg-black/70" />
              <div className="relative flex min-h-[250px] flex-col justify-end gap-3 p-8 text-left text-white">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-200">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceHighlights;

