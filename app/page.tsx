import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import FeaturedDeals from '@/components/FeaturedDeals';
import Testimonials from '@/components/Testimonials';
import FindYourSpace from '@/components/FindYourSpace';
import ServiceHighlights from '@/components/ServiceHighlights';
import WhyLeaseEzy from '@/components/WhyLeaseEzy';
import NewsletterSection from '@/components/NewsletterSection';
import CategorySection from '@/components/BrowseListings';
import TrustCTASection from '@/components/ActionBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-brand-navy">
      <Navbar />
      <main className="flex flex-col gap-0">
        <Hero />
        <TrustCTASection />
        <FindYourSpace />
        <FeaturedDeals />
        <Testimonials />
        <CategorySection />
        <ServiceHighlights />
        <WhyLeaseEzy />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
