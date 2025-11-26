import Image from 'next/image';
import { MapPin, ArrowUpRight, Building2 } from 'lucide-react';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

type Property = {
  _id: string;
  title: string;
  location: string;
  area?: string;
  mainImage?: unknown;
};

const propertyQuery = `
  *[_type == "property"] | order(_createdAt desc)[0...3]{
    _id,
    title,
    location,
    area,
    mainImage
  }
`;

export async function FeaturedProperties() {
  const properties = await client.fetch<Property[]>(propertyQuery);

  return (
    <section id="properties" className="bg-brand-gray py-20 lg:py-28 text-brand-navy">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div className="flex items-center gap-2 md:justify-start justify-center">
            <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse"/>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Market Opportunities
            </p>
          </div>
          <h2 className="font-heading text-3xl font-bold md:text-5xl text-brand-navy">
            Signature Commercial Assets
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Handpicked Grade-A offices and retail spaces available for immediate lease.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => {
            const imageUrl = property.mainImage
              ? urlFor(property.mainImage).width(800).height(600).fit('crop').url()
              : '';

            return (
              <article
                key={property._id}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:border-brand-navy/20 hover:-translate-y-1"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  {typeof imageUrl === 'string' && imageUrl.length > 0 ? (
                    <Image
                      src={imageUrl}
                      alt={property.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 400px"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-slate-400">
                      <Building2 className="w-12 h-12 opacity-20" />
                    </div>
                  )}
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-brand-navy/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    For Lease
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4">
                    <p className="flex items-center gap-1.5 text-xs font-bold text-brand-red uppercase tracking-wider mb-2">
                      <MapPin className="h-3.5 w-3.5" />
                      {property.location ?? 'Prime Location'}
                    </p>
                    <h3 className="font-heading text-xl font-bold text-brand-navy line-clamp-2 leading-tight">
                      {property.title}
                    </h3>
                  </div>

                  <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase">Total Area</p>
                      <p className="text-sm font-bold text-brand-navy">
                        {property.area ?? 'Contact for details'}
                      </p>
                    </div>
                    
                    <Link
                      href={`/properties/${property._id}`}
                      className="group/btn flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 border border-slate-200 text-brand-navy transition-all group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red"
                    >
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover/btn:rotate-45" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}

          {properties.length === 0 && (
            <div className="col-span-full py-12 text-center border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50">
              <Building2 className="mx-auto h-12 w-12 text-slate-300 mb-4" />
              <p className="text-slate-500 font-medium">New premium listings are being curated.</p>
              <p className="text-sm text-slate-400">Check back shortly.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;