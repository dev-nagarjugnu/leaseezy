import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="w-full bg-white text-brand-navy">
      <div className="grid min-h-[80vh] w-full grid-cols-1 lg:grid-cols-[1.5fr_1fr]">
        <div className="order-1 bg-brand-navy px-4 pb-8 pt-6 sm:px-6 sm:pb-12 sm:pt-10 lg:order-1 lg:flex lg:items-end lg:px-16 lg:pb-16 lg:pt-16">
          <div className="relative mx-auto h-[260px] w-full max-w-5xl overflow-hidden shadow-2xl sm:h-[360px] lg:h-[70vh]">
            <Image
              src="/homepage-hero.webp"
              alt="Premium commercial skyscraper skyline"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
          </div>
        </div>

        <div className="order-2 flex flex-col justify-center bg-[#F8F9FA] px-6 py-10 sm:px-8 sm:py-14 lg:order-2 lg:px-16 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-red">
            Properties
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-brand-navy sm:text-5xl lg:mt-6 lg:text-6xl">
            Find Your Next Commercial Space in India
          </h1>
          <p className="mt-4 text-base text-slate-600 sm:mt-6">
            Discover a wide range of premium commercial assets across India.
            We simplify your search for office, retail, and industrial spaces with precision insights.
          </p>
          <Link
            href="#properties"
            className="mt-8 inline-flex items-center text-base font-semibold text-brand-navy underline decoration-2 underline-offset-8 sm:mt-10"
          >
            Explore Properties &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;

