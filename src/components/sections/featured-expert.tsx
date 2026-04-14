import Image from 'next/image';
import { content } from '@/app/lib/content';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

export default function FeaturedExpert() {
  return (
    <section id="speakers" className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-card/5 rounded-[3rem] border border-white/10 p-8 md:p-16 lg:p-24 relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* Image Column */}
            <div className="relative group">
               <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-white/10">
                  <Image 
                    src="/hero/speaker.png"
                    alt={content.featuredExpert.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
               </div>
               {/* Floating Tag */}
               <div className="absolute -bottom-6 -left-6 bg-primary text-black p-6 rounded-2xl shadow-2xl">
                  <div className="text-3xl font-black italic">Expert</div>
                  <div className="text-sm font-bold uppercase tracking-widest opacity-70">Featured Speaker</div>
               </div>
            </div>

            {/* Content Column */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 py-1 px-4 rounded-full">Keynote Speaker</Badge>
                <h2 className="font-headline text-5xl md:text-6xl font-black tracking-tight leading-tight">
                  {content.featuredExpert.name}
                </h2>
                <p className="text-xl text-primary font-semibold">
                  {content.featuredExpert.role}
                </p>
              </div>

              <p className="text-xl text-white/70 leading-relaxed font-light">
                {content.featuredExpert.description}
              </p>

              <div className="space-y-6">
                 <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/40">Key Expertise</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.featuredExpert.keyExpertise.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
