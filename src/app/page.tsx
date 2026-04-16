import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/competencies';
import Leadership from '@/components/sections/featured-expert';
import ServicesSection from '@/components/sections/services';
import IndustriesSection from '@/components/sections/industries';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Leadership />
        <ServicesSection />
        <IndustriesSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
