import Image from 'next/image';
import { MapPin } from 'lucide-react';
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
    <section id="properties" className="bg-white py-20 text-brand-navy">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:px-8">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-red">Featured</p>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Prime Spaces for Your Business</h2>
          <p className="text-base text-slate-600 md:text-lg">
            Latest Grade-A listings curated by our on-ground advisory desk.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => {
            const imageUrl = property.mainImage
              ? urlFor(property.mainImage).width(800).height(450).fit('crop').url()
              : '';

            return (
              <article
                key={property._id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-200">
                  {typeof imageUrl === 'string' && imageUrl.length > 0 ? (
                    <Image
                      src={imageUrl}
                      alt={property.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 400px"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-slate-500">
                      Image coming soon
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-3 px-6 py-6">
                  <h3 className="text-lg font-semibold text-brand-navy line-clamp-2">{property.title}</h3>
                  <p className="flex items-center gap-2 text-sm text-slate-500">
                    <MapPin className="h-4 w-4 text-brand-red" />
                    {property.location ?? 'Location TBA'}
                  </p>
                  <p className="text-sm text-slate-600">
                    Area: <span className="font-semibold">{property.area ?? 'N/A'}</span>
                  </p>
                  <Link
                    href={`/properties/${property._id}`}
                    className="mt-4 text-sm font-semibold text-brand-red underline decoration-brand-red/40 underline-offset-4"
                  >
                    View Details →
                  </Link>
                </div>
              </article>
            );
          })}

          {properties.length === 0 && (
            <p className="text-center text-sm text-slate-500 md:col-span-2 lg:col-span-3">
              No listings available right now. Please check back soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;

