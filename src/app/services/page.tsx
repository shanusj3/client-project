import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ServicesSection from '@/components/sections/services';
import Contact from '@/components/sections/contact';
import AIInquirer from '@/components/ai/inquirer';
import { content } from '@/app/lib/content';

export const metadata = {
  title: `Services | ${content.name}`,
  description: content.services.description,
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        {/* Sub-page Hero */}
        <section className="bg-black text-white py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 animate-in slide-in-from-bottom duration-700">
              Services
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed animate-in slide-in-from-bottom delay-150 duration-700">
              {content.services.description}
            </p>
          </div>
        </section>

        <ServicesSection isPage={true} />
        
        <Contact />
      </main>
      <AIInquirer />
      <Footer />
    </>
  );
}
