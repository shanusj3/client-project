"use client";

import Image from 'next/image';
import { content } from '@/app/lib/content';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function About({ isPage = false }: { isPage?: boolean }) {
  const { about } = content;

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-10 animate-in fade-in slide-in-from-left duration-1000">
             <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black leading-tight relative">
                  Decades of Industrial <br /> Expertise
                  <div className="absolute -bottom-4 left-0 w-20 h-1.5 bg-secondary rounded-full" />
                </h2>
             </div>
             
             <div className="space-y-6 pt-4">
                <p className="text-lg md:text-xl text-black/80 font-medium leading-relaxed max-w-xl">
                  {about.description}
                </p>
                {isPage && (
                  <p className="text-base text-black/60 leading-relaxed max-w-xl">
                    {about.extendedDescription}
                  </p>
                )}
             </div>

             <div className="flex flex-wrap gap-4 pt-4">
                {isPage ? (
                  <>
                    <Button asChild size="lg" className="bg-[#007A87] text-white hover:bg-[#005F68] rounded-full px-10 h-16 text-sm font-black uppercase tracking-widest shadow-xl shadow-teal-500/10">
                       <Link href="/services">Our Services</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-teal-100 text-teal-800 hover:bg-teal-50 rounded-full px-10 h-16 text-sm font-black uppercase tracking-widest bg-teal-50/30">
                       <Link href="/#contact">Get In Touch</Link>
                    </Button>
                  </>
                ) : (
                  <Button asChild size="lg" className="bg-[#007A87] text-white hover:bg-[#005F68] rounded-full px-10 h-16 text-sm font-black uppercase tracking-widest shadow-xl shadow-teal-500/10 group">
                    <Link href="/about" className="flex items-center gap-2">
                      LEARN MORE ABOUT US <ArrowDown className="w-4 h-4 -rotate-90 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                )}
             </div>
          </div>

          {/* Right Column - Media */}
          <div className="relative animate-in fade-in slide-in-from-right duration-1000 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 border border-black/5 rounded-full -m-10 lg:-m-16 animate-pulse-slow" />
              <div className="absolute inset-0 border border-black/[0.03] rounded-full -m-20 lg:-m-32" />
              
              <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border-[8px] md:border-[16px] border-white z-10">
                <Image 
                  src="/hero/industrial-full.jpg" 
                  alt="Industrial Infrastructure"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 via-transparent to-transparent" />
              </div>

              {/* Rotating Circular Badge (Teal with Arrow Down) */}
              <div className="absolute bottom-10 -left-10 md:bottom-20 md:-left-20 z-20">
                <div className="relative w-28 h-28 md:w-44 md:h-44 flex items-center justify-center">
                  {/* Rotating Text Circle */}
                  <div className="absolute inset-0 bg-secondary rounded-full shadow-2xl overflow-hidden animate-spin-slow">
                    <svg viewBox="0 0 100 100" className="w-full h-full scale-90 origin-center">
                      <defs>
                        <path id="badgeTextPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                      </defs>
                      <text className="text-[7px] font-black uppercase tracking-[0.2em] fill-white">
                        <textPath href="#badgeTextPath">
                          Strategic Engineering Services India LLP • SESIL • 
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  {/* Center Icon */}
                  <div className="relative z-10 text-white">
                    <ArrowDown className="w-6 h-6 md:w-10 md:h-10 animate-bounce" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
