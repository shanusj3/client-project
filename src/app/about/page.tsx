import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Competencies from '@/components/sections/competencies';
import Leadership from '@/components/sections/featured-expert';
import Contact from '@/components/sections/contact';
import { content } from '@/app/lib/content';

export const metadata = {
  title: `About Us | ${content.name}`,
  description: content.about.description,
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        {/* Sub-page Hero */}
        <section className="bg-secondary text-secondary-foreground py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 animate-in slide-in-from-bottom duration-700">
              About Us
            </h1>
            <p className="text-xl md:text-2xl opacity-80 max-w-3xl leading-relaxed animate-in slide-in-from-bottom delay-150 duration-700">
              {content.about.description}
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24 bg-slate-50 overflow-hidden relative">
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-black/5 flex flex-col space-y-6 animate-in slide-in-from-left duration-700">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h2 className="text-3xl font-black tracking-tight text-black">Our Mission</h2>
                <p className="text-lg text-black/70 leading-relaxed italic">
                  "{content.about.mission}"
                </p>
              </div>
              <div className="bg-black p-12 rounded-[2.5rem] shadow-xl flex flex-col space-y-6 animate-in slide-in-from-right duration-700">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">👁️</span>
                </div>
                <h2 className="text-3xl font-black tracking-tight text-white">Our Vision</h2>
                <p className="text-lg text-white/70 leading-relaxed italic">
                  "{content.about.vision}"
                </p>
              </div>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </section>

        <Competencies isPage={true} />
        <Leadership isPage={true} />
        
        <Contact />
      </main>
      <Footer />
    </>
  );
}
