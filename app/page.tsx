import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import WhyChooseUs from '@/components/WhyChooseUs';
import ClientLogos from '@/components/ClientLogos';
import FeaturedDeals from '@/components/FeaturedDeals';
import Testimonials from '@/components/Testimonials';
import FindYourSpace from '@/components/FindYourSpace';
import ServiceHighlights from '@/components/ServiceHighlights';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-brand-navy">
      <Navbar />
      <main className="flex flex-col gap-0">
        <Hero />
        <FindYourSpace />
        <FeaturedDeals />
        <Testimonials />
        <ServiceHighlights />
        <WhyChooseUs />
        <ClientLogos />
      </main>
      <Footer />
    </div>
  );
}
