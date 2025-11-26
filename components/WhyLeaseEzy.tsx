'use client';

import { CheckCircle2, FileCheck, TrendingUp, Users } from 'lucide-react';

const points = [
  {
    icon: CheckCircle2,
    title: 'Exclusive Inventory',
    description:
      'Access off-market listings and premium Grade-A assets across major financial districts.',
  },
  {
    icon: FileCheck,
    title: '360° Compliance',
    description:
      'Rigorous due diligence on titles, zoning, and safety norms to ensure zero legal friction.',
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description:
      'Dedicated relationship managers who understand your business model and space requirements.',
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven Insights',
    description:
      'Market rental analysis and future valuation reports to help you negotiate better leases.',
  },
];

export function WhyLeaseEzy() {
  return (
    <section className="bg-brand-gray py-20 lg:py-28 text-brand-navy">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
            Why Choose Us
          </p>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
            Built for Modern Enterprises
          </h2>
          <p className="text-lg text-slate-600">
            We blend market intelligence with on-ground expertise to de-risk every transaction and accelerate your expansion plans.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div
              key={point.title}
              className="flex flex-col items-start gap-4 rounded-xl border border-slate-200 bg-white p-8 text-left shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl hover:border-brand-navy/20"
            >
              <div className="rounded-lg bg-brand-navy/5 p-3 text-brand-navy">
                <point.icon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-brand-navy mb-2">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyLeaseEzy;