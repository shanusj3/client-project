import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import IndustriesSection from '@/components/sections/industries';
import Contact from '@/components/sections/contact';
import { content } from '@/app/lib/content';

export const metadata = {
  title: `Industries Served | ${content.name}`,
  description: content.industries.subtitle,
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        {/* Sub-page Hero */}
        <section className="bg-secondary text-secondary-foreground py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 animate-in slide-in-from-bottom duration-700">
              {content.industries.title}
            </h1>
            <p className="text-xl md:text-2xl opacity-80 max-w-3xl leading-relaxed animate-in slide-in-from-bottom delay-150 duration-700">
              {content.industries.subtitle}
            </p>
          </div>
        </section>

        <IndustriesSection className="bg-white" isPage={true} />
        
        <Contact />
      </main>
      <Footer />
    </>
  );
}
