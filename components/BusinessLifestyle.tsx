import Image from 'next/image';
import { BadgeCheck, Clock3, ShieldCheck, MapPinned } from 'lucide-react';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Unmatched Transparency',
    description: '100% verified titles and clean documentation.',
  },
  {
    icon: Clock3,
    title: 'Instant Occupation',
    description: 'Move-in ready Grade-A offices.',
  },
  {
    icon: BadgeCheck,
    title: 'Zero Hidden Costs',
    description: 'Transparent pricing models.',
  },
  {
    icon: MapPinned,
    title: 'Strategic Network',
    description: 'Access to premium business hubs.',
  },
];

export function BusinessLifestyle() {
  return (
    <section className="bg-[#F8FAFC] py-20 text-brand-navy">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-red">The LeaseEzy Advantage</p>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              A workspace tailor-made for your growth.
            </h2>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              With diverse commercial options, you&apos;re not just choosing an office; you&apos;re crafting a headquarters that
              reflects your brand&apos;s ambition. Beyond mere leasing, we support your business expansion, hassle-free.
            </p>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-[2.5rem] shadow-xl sm:h-[420px]">
            <Image
              src="/leaseEzy-advantage.jpg"
              alt="Modern corporate office"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-3xl border border-white/60 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-brand-blue/10 p-3 text-brand-blue">
                <benefit.icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-navy">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessLifestyle;

