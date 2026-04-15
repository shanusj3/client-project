"use client";

import { content } from "@/app/lib/content";
import { Shield, Settings, Cpu, TrendingUp, DollarSign, Users, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  Shield: Shield,
  Settings: Settings,
  Cpu: Cpu,
  TrendingUp: TrendingUp,
  DollarSign: DollarSign,
  Users: Users,
};

export default function ServicesSection({ className, isPage = false }: { className?: string; isPage?: boolean }) {
  const { services } = content;

  return (
    <section id="services" className={cn("py-24 relative overflow-hidden", className)}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {!isPage && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black mb-6">
                {services.title}
              </h2>
              <p className="text-xl text-black/60 leading-relaxed">
                {services.subtitle}
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.items.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Settings;
            return (
              <div
                key={service.id}
                className="group relative p-8 bg-white border border-black/5 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden flex flex-col h-full"
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150" />
                
                <div className="mb-8 relative">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:rotate-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -bottom-2 -right-2 px-3 py-1 bg-primary text-[10px] font-bold tracking-widest uppercase rounded-full border-2 border-white shadow-sm">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-black mb-4 tracking-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-black/60 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm font-medium text-black/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-black/5 mt-auto">
                  <button className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-black group-hover:gap-4 transition-all tracking-tighter">
                    Learn More <ChevronRight className="w-4 h-4 text-primary" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
