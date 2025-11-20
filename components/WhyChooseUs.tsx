import { Search, Shield, Zap } from 'lucide-react';

const pillars = [
  {
    icon: Search,
    title: 'Curated Inventory',
    description: 'Only Grade-A buildings that elevate your brand perception.',
  },
  {
    icon: Shield,
    title: 'Verified Listings',
    description: '100% direct mandates with clean titles and transparent paperwork.',
  },
  {
    icon: Zap,
    title: 'Fast Closures',
    description: 'End-to-end advisory support that moves at the speed of business.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-20 text-brand-navy">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 text-center md:px-8">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-red">
            Why LeaseEzy
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Built for growth-stage teams</h2>
          <p className="text-base text-slate-600 md:text-lg">
            We blend data, relationships, and on-ground intelligence to de-risk every lease.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <pillar.icon className="h-10 w-10 text-brand-navy" />
              <h3 className="mt-6 text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

