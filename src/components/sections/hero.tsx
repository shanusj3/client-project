"use client";

import Image from 'next/image';
import { content } from '@/app/lib/content';
import Link from 'next/link';
import { ArrowRight, Award, Briefcase, Globe } from 'lucide-react';

const iconMap = {
  Award: Award,
  Briefcase: Briefcase,
  Globe: Globe,
};

export default function Hero() {
  const { hero } = content;

  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section
        id="home"
        className="relative flex flex-col overflow-hidden"
        style={{ background: '#071828', minHeight: '88vh' }}
      >
        {/* Full-bleed background photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero/industrial-full.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Dark-blue overlay: opaque left, transparent right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(100deg, rgba(5,16,34,0.95) 0%, rgba(5,16,34,0.88) 32%, rgba(5,16,34,0.48) 58%, rgba(5,16,34,0.18) 100%)',
            }}
          />
          {/* Bottom fade into stats bar */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: 140,
              background: 'linear-gradient(to top, #071828, transparent)',
            }}
          />
        </div>

        {/* Copy block — wide container so headline fits on 2 lines */}
        <div
          className="container mx-auto px-6 md:px-12 relative z-10"
          style={{ paddingTop: 'clamp(7rem, 13vw, 11rem)', paddingBottom: '5rem' }}
        >
          {/* max-w-5xl keeps text block wide enough for 2-line headline */}
          <div className="max-w-5xl space-y-5">

            {/* Eyebrow */}
            <p
              className="font-black uppercase tracking-[0.24em]"
              style={{ fontSize: 11, color: '#4BA8E0' }}
            >
              STRATEGIC ENGINEERING SOLUTIONS
            </p>

            {/* ── Headline: "Engineering Excellence" line 1, "for Global Expansion" line 2 ── */}
            <h1
              className="font-black text-white tracking-tighter leading-tight"
              style={{
                fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                maxWidth: 900, // control width manually
              }}
            >
              Engineering Excellence <br />
              for Global Expansion
            </h1>
            {/* Sub-copy */}
            <p
              className="leading-relaxed"
              style={{
                fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
                color: 'rgba(255,255,255,0.52)',
                maxWidth: 560,
              }}
            >
              Delivering strategic engineering, global sourcing, and market entry
              solutions that empower businesses to scale with confidence in India
              and beyond.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Primary — teal-blue filled rounded-rect */}
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 font-bold text-white transition-all hover:brightness-110"
                style={{
                  height: 56,
                  padding: '0 2rem',
                  borderRadius: 12,
                  background: '#1B72B0',
                  fontSize: '0.875rem',
                }}
              >
                Discuss Your Requirements
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Ghost — pill outline */}
              <Link
                href="#services"
                className="inline-flex items-center justify-center font-bold text-white transition-all hover:bg-white/10"
                style={{
                  height: 56,
                  padding: '0 2rem',
                  borderRadius: 9999,
                  border: '1.5px solid rgba(255,255,255,0.30)',
                  fontSize: '0.875rem',
                }}
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}