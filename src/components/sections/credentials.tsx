import { content } from '@/app/lib/content';
import { Award } from 'lucide-react';

export default function Credentials() {
  return (
    <section id="credentials" className="py-24 bg-card/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tight text-black">
            {content.credentials.title}
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.credentials.items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-[2.5rem] border border-black/5 hover:border-primary/50 transition-all hover:shadow-2xl hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                 <Award className="w-8 h-8 text-primary group-hover:text-black" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-black text-black leading-tight border-b border-black/5 pb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-medium italic">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
