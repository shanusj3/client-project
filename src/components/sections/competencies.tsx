import Image from 'next/image';
import { content } from '@/app/lib/content';
import { Button } from '@/components/ui/button';
import { Users, Lightbulb, Calendar, Play } from 'lucide-react';

export default function About() {
  const icons = [Users, Lightbulb, Calendar];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Column - Content & Media */}
          <div className="space-y-12">
            <div>
              <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter text-black mb-8 leading-tight [letter-spacing:-0.04em]">
                {content.about.title}
              </h2>
              <Button asChild variant="outline" className="bg-secondary text-secondary-foreground border-none rounded-full px-8 hover:bg-secondary/80 transition-all font-bold">
                <a href="#agenda">View Experience</a>
              </Button>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden group">
                <Image 
                  src="/hero/about.png"
                  alt="Leadership and Execution"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                   <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                      <Play className="fill-primary-foreground text-primary-foreground w-8 h-8 ml-1" />
                   </div>
                </div>
              </div>
              <p className="text-sm font-bold text-black/40 uppercase tracking-widest text-center">
                {content.about.mediaCaption}
              </p>
            </div>

            <div className="prose prose-lg text-muted-foreground italic">
              <p>{content.about.extendedDescription}</p>
            </div>
          </div>

          {/* Right Column - Sub-content & Cards */}
          <div className="space-y-12 lg:pt-32">
             <div className="text-2xl text-black font-semibold leading-relaxed">
               {content.about.description}
             </div>

             <div className="grid grid-cols-1 gap-6">
                {content.featureCards.map((card, index) => {
                  const Icon = icons[index % icons.length];
                  return (
                    <div key={index} className="bg-card p-10 rounded-3xl border border-black/5 flex gap-8 items-start hover:border-primary/50 transition-colors group">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-black">{card.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                      </div>
                    </div>
                  );
                })}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
