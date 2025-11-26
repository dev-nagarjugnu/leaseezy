import Image from 'next/image';
import { BadgeCheck, Clock, ShieldCheck, MapPin } from 'lucide-react';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Verified Titles',
    description: '100% compliant documentation and clear ownership history.',
  },
  {
    icon: Clock,
    title: 'Rapid Move-In',
    description: 'Grade-A offices ready for immediate business operations.',
  },
  {
    icon: BadgeCheck,
    title: 'Fair Pricing',
    description: 'Zero hidden costs. Direct negotiation protocols.',
  },
  {
    icon: MapPin,
    title: 'Prime Locations',
    description: 'Access to high-demand business districts and IT parks.',
  },
];

export function BusinessLifestyle() {
  return (
    <section className="bg-white py-20 lg:py-28 text-brand-navy">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 lg:px-8">
        
        {/* Top Section: Text + Image */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-8 bg-brand-red"></span>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
                The LeaseEzy Advantage
              </p>
            </div>
            
            <h2 className="font-heading text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
              A Workspace Tailored for <br/>
              <span className="text-slate-500">Corporate Excellence.</span>
            </h2>
            
            <p className="text-lg leading-relaxed text-slate-600">
              Your office is more than just a location; it's a strategic asset. 
              We move beyond simple listings to curate commercial environments that enhance productivity and reflect your brand's ambition.
            </p>

            <div className="pt-4">
              <div className="h-1 w-20 bg-brand-navy rounded-full" />
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[300px] w-full overflow-hidden rounded-2xl shadow-2xl sm:h-[400px] lg:h-[450px]">
            <Image
              src="/leaseEzy-advantage.jpg"
              alt="Premium corporate boardroom and office interior"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle overlay to ensure it looks premium */}
            <div className="absolute inset-0 bg-brand-navy/10" />
          </div>
        </div>

        {/* Bottom Section: Benefit Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand-red/30"
            >
              <div className="mb-6 inline-flex rounded-lg bg-brand-red/5 p-4 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-brand-navy">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessLifestyle;