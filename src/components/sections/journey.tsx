"use client";

import Image from 'next/image';
import { content } from '@/app/lib/content';
import { Button } from '@/components/ui/button';
import { MapPin, User, Clock } from 'lucide-react';

export default function Forums() {
  return (
    <section id="agenda" className="py-24 bg-card/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter text-black [letter-spacing:-0.04em]">
              {content.journey.title}
            </h2>
          </div>
          <Button asChild className="bg-secondary text-secondary-foreground font-bold rounded-full px-8 hover:bg-secondary/80">
             <a href="#contact">Collaborate</a>
          </Button>
        </div>

        {/* Session List */}
        <div className="space-y-4">
          {content.journey.sessions.map((session) => (
            <div 
              key={session.id} 
              className="bg-white p-8 md:p-12 rounded-[2rem] border border-black/5 hover:border-primary/50 transition-all group hover:shadow-2xl hover:-translate-y-1 block"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Time & Location */}
                <div className="lg:col-span-3 space-y-4">
                  <div className="text-xl font-black text-primary flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    {session.time}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground font-semibold">
                    <MapPin className="w-5 h-5" />
                    Professional Milestone
                  </div>
                </div>

                {/* Speaker Image */}
                <div className="lg:col-span-2 hidden lg:block">
                   <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-black/5 group-hover:border-primary/50 transition-colors">
                      <Image 
                        src="/hero/speaker.png"
                        alt={session.speaker}
                        fill
                        className="object-cover"
                      />
                   </div>
                </div>

                {/* Info */}
                <div className="lg:col-span-7 flex flex-col md:flex-row justify-between gap-8 md:items-center">
                   <div className="space-y-4 max-w-xl">
                      <h3 className="text-2xl md:text-3xl font-black text-black leading-tight group-hover:text-primary transition-colors">
                        {session.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {session.description}
                      </p>
                      <div className="flex items-center gap-3 pt-2">
                         <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                            <User className="w-4 h-4 text-black" />
                         </div>
                         <span className="font-bold text-black/70 italic">Held by {session.speaker}</span>
                      </div>
                   </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
