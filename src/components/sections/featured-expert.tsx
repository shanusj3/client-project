"use client";

import Image from 'next/image';
import { content } from '@/app/lib/content';
import { Badge } from '@/components/ui/badge';
import { Users } from 'lucide-react';

export default function FeaturedExpert() {
  const { about } = content;
  const { ceo } = about;

  return (
    <section id="leadership" className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-card/5 rounded-[3rem] border border-white/10 p-8 md:p-16 lg:p-24 relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* Image Column */}
            <div className="relative group">
               <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-white/10 bg-slate-800">
                  <Image 
                    src={ceo.image}
                    alt={ceo.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as any).style.display = 'none';
                    }}
                  />
                  {/* Placeholder if image missing */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                    <Users className="w-32 h-32" />
                  </div>
               </div>
               {/* Floating Tag */}
               <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-2xl shadow-2xl">
                  <div className="text-3xl font-black italic">Leadership</div>
                  <div className="text-sm font-bold uppercase tracking-widest opacity-70">Strategic Guidance</div>
               </div>
            </div>

            {/* Content Column */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-secondary border-secondary/30 py-1 px-4 rounded-full">Founder & Strategic Lead</Badge>
                <h2 className="font-headline text-5xl md:text-6xl font-black tracking-tight leading-tight">
                  {ceo.name}
                </h2>
                <p className="text-xl text-secondary font-semibold">
                  {ceo.role}
                </p>
              </div>

              <p className="text-xl text-white/70 leading-relaxed font-light">
                {ceo.bio}
              </p>

              <div className="pt-4 border-t border-white/10">
                 <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Core Philosophy</p>
                 <p className="text-2xl font-serif italic text-white/90">
                   "Driving engineering excellence through strategic depth and global vision."
                 </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
