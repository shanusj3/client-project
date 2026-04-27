"use client";

import { content } from "@/app/lib/content";
import { Plane, Fuel, Cpu, HardHat, Zap, Shield, Settings, Wind } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  Plane: Plane,
  Fuel: Fuel,
  Cpu: Cpu,
  HardHat: HardHat,
  Zap: Zap,
  Shield: Shield,
  Settings: Settings,
  Wind: Wind,
};

export default function IndustriesSection({ className, isPage = false }: { className?: string; isPage?: boolean }) {
  const { industries } = content;

  return (
    <section id="products" className={cn("py-20 md:py-24 bg-slate-50 relative overflow-hidden", className)}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-black mb-4 md:mb-6">
              {industries.title}
            </h2>
            <p className="text-xl text-black/60 leading-relaxed">
              {industries.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.items.map((industry, index) => {
            const Icon = iconMap[industry.icon as keyof typeof iconMap] || Settings;
            return (
              <div
                key={index}
                className="group p-8 bg-white border border-black/5 rounded-[2rem] transition-all duration-500 hover:shadow-xl hover:border-secondary/30 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:bg-secondary/10">
                  <Icon className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4 tracking-tight group-hover:text-secondary transition-colors">
                  {industry.title}
                </h3>
                <p className="text-black/60 leading-relaxed text-sm">
                  {isPage 
                    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    : industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none" />
    </section>
  );
}
