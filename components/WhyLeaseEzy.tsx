'use client';

import Image from 'next/image';

const points = [
  {
    title: 'Exclusive Listings',
    description:
      'Handpicked towers, campuses, and retail assets that match premium brand expectations across every metro.',
  },
  {
    title: 'Comprehensive Services',
    description:
      'From scouting to fit-outs, finance, and legal, we orchestrate the complete lifecycle of every commercial move.',
  },
  {
    title: 'Customer Satisfaction',
    description:
      'White-glove relationship management that keeps stakeholders informed and confident through every milestone.',
  },
  {
    title: 'Expert Guidance',
    description:
      'Advisors with hyperlocal intel and institutional-grade process so decisions are fast, data-backed, and de-risked.',
  },
];

export function WhyLeaseEzy() {
  return (
    <section className="bg-white py-20 text-[#0B1120]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 text-center">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-red">Why LeaseEzy?</p>
          <h2 className="text-3xl font-bold md:text-4xl">Built for growth-stage teams</h2>
          <p className="text-base text-slate-600 md:w-3/4 md:mx-auto">
            We blend data, relationships, and on-ground intelligence to de-risk every lease and create spaces that scale
            with ambition.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {points.map((point) => (
            <article
              key={point.title}
              className="flex flex-col gap-4 rounded-[28px] border border-white/40 bg-gradient-to-b from-[#fdfefe] via-[#edf1f7] to-[#d9dfe9] p-6 text-left shadow-[0_20px_50px_rgba(15,17,32,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(15,17,32,0.15)]"
            >
              <div className="inline-flex items-center gap-3">
                <Image src="/net.webp" alt="" width={32} height={32} />
                <h3 className="text-lg font-semibold">{point.title}</h3>
              </div>
              <p className="text-sm text-slate-600">{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyLeaseEzy;

