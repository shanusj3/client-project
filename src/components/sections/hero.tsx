import Image from 'next/image';
import { content } from '@/app/lib/content';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col min-h-screen"
    >
      {/* Top Banner - Navy Blue */}
      <div className="bg-primary pt-40 sm:pt-48 pb-20 sm:pb-24 px-6 md:px-12 lg:px-24 flex-shrink-0">
        <div className="space-y-3 sm:space-y-4 max-w-5xl">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-primary-foreground leading-[0.9] [letter-spacing:-0.04em]">
            {content.hero.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-primary-foreground/80 tracking-tight">
            {content.hero.subtitle}
          </p>

          <div className="pt-3 sm:pt-4">
            <Button
              asChild
              size="lg"
              className="bg-black text-white hover:bg-black/90 rounded-full px-8 sm:px-10 h-12 sm:h-14 text-base sm:text-lg font-bold"
            >
              <Link href="#contact">{content.hero.cta}</Link>
            </Button>
          </div>
        </div>
      </div>


      <div className="flex flex-col md:flex-row flex-1 min-h-0">

        <div className="flex-1 bg-background text-foreground p-8 md:p-12 lg:p-24 flex flex-col justify-center relative min-h-[360px] sm:min-h-[420px] md:min-h-0">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none mb-2 sm:mb-4">
              {content.hero.experienceBlock.title}
            </h2>
            <p className="max-w-md text-base sm:text-xl text-muted-foreground leading-relaxed">
              {content.hero.experienceBlock.description}
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
              {content.hero.experienceBlock.buttons.map((btn, idx) => (
                <Button
                  key={idx}
                  asChild
                  variant={idx === 0 ? 'default' : 'outline'}
                  size="lg"
                  className={cn(
                    'rounded-full px-6 sm:px-8 h-11 sm:h-12 font-bold text-sm sm:text-base',
                    idx === 0
                      ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                      : 'border-black text-black hover:bg-black hover:text-white'
                  )}
                >
                  <Link href={btn.href}>{btn.name}</Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Scrolling Badge */}
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-32 h-32 z-20">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Rotating SVG Text */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow origin-center">
                <defs>
                  <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                </defs>
                <text className="text-[7.5px] font-black uppercase tracking-[0.2em] fill-black">
                  <textPath href="#circlePath">
                    Rajesh Sampat • 38+ Years Leadership • Strategy • Execution •
                  </textPath>
                </text>
              </svg>

              {/* Central Circle with Icon */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl relative z-10 border border-black/5">
                <ArrowDown className="text-primary w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 relative min-h-[300px] sm:min-h-[400px] md:min-h-0 bg-secondary">
          <Image
            src="/hero/hero.png"
            alt="Rajesh Sampat - Leadership"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  );
}