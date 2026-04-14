import { content } from '@/app/lib/content';
import { CheckCircle2 } from 'lucide-react';

export default function CoreCompetencies() {
  return (
    <section id="expertise" className="py-24 bg-white relative overflow-hidden">
       {/* Background decorative text */}
       <div className="absolute top-0 right-0 text-[15rem] font-black text-black/[0.02] select-none leading-none -translate-y-1/4 translate-x-1/4">
        EXPERTISE
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
             <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter text-black">
                {content.competencies.title}
             </h2>
             <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.competencies.items.map((item, index) => (
              <div 
                key={index} 
                className="bg-card/30 p-10 rounded-[2.5rem] border border-black/5 hover:border-primary/50 transition-all hover:bg-white hover:shadow-2xl flex flex-col items-center text-center space-y-6 group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors">
                  <CheckCircle2 className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-black leading-tight">
                  {item}
                </h3>
                <p className="text-muted-foreground text-sm font-medium">
                  Proven expertise in driving strategic value and operational success.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
