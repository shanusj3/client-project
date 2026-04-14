import { content } from '@/app/lib/content';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tight text-black">
            {content.education.title}
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-card p-12 md:p-20 rounded-[3rem] border border-black/5 relative overflow-hidden group hover:shadow-2xl transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 text-center space-y-6">
            <div className="w-20 h-20 bg-black rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform">
               <GraduationCap className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-black leading-tight">
              {content.education.degree}
            </h3>
            <p className="text-xl text-muted-foreground font-medium">
              {content.education.university}
            </p>
            <p className="text-lg text-primary font-black italic tracking-widest pt-4">
              {content.education.duration}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
