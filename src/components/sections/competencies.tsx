"use client";

import Image from 'next/image';
import { content } from '@/app/lib/content';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function About() {
  const { about, name, tagline } = content;

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <Badge variant="outline" className="text-secondary border-secondary/30 py-1 px-4 rounded-full">About {name}</Badge>
          <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter text-black leading-tight">
            {about.title}
          </h2>
          <p className="text-xl md:text-2xl text-black/60 font-medium leading-relaxed">
            {tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column - Media */}
          <div className="relative">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden group shadow-2xl border-8 border-slate-50">
              <Image 
                src="/about/company.png"
                alt="Strategic Engineering Services India LLP - Office"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  (e.target as any).style.display = 'none';
                }}
              />
              {/* Fallback pattern */}
              <div className="absolute inset-0 bg-slate-100 flex items-center justify-center -z-10">
                <div className="w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-12">
                <p className="text-white font-bold text-xl leading-snug">
                  {about.mediaCaption}
                </p>
              </div>
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-10 -right-10 bg-black text-white p-10 rounded-[2.5rem] shadow-2xl hidden md:block border-4 border-white">
               <div className="text-5xl font-black mb-1">38+</div>
               <div className="text-sm font-bold uppercase tracking-[0.2em] opacity-60">Years of Experience</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-10">
             <div className="text-2xl text-black font-semibold leading-relaxed border-l-4 border-secondary pl-8">
               {about.description}
             </div>
             
             <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>{about.extendedDescription}</p>
             </div>

             <div className="pt-8">
                <Button asChild size="lg" className="bg-black text-white hover:bg-black/90 rounded-full px-10 h-14 text-lg font-bold">
                  <a href="#leadership">Meet Our Leadership</a>
                </Button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
