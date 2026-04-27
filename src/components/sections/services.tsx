import Image from "next/image";
import { content } from "@/app/lib/content";
import { Globe, Search, CheckCircle, Users, TrendingUp, Briefcase, ChevronRight, Settings, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  Globe: Globe,
  Search: Search,
  CheckCircle: CheckCircle,
  Users: Users,
  TrendingUp: TrendingUp,
  Briefcase: Briefcase,
  Settings: Settings,
};

export default function ServicesSection({ className, isPage = false }: { className?: string; isPage?: boolean }) {
  const { services } = content;

  return (
    <section id="services" className={cn("py-24 bg-[#F8FAFC]", className)}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-secondary/30" />
            <span className="text-secondary font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">
              WHAT WE DO
            </span>
            <div className="h-px w-8 bg-secondary/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-black leading-tight">
            {services.title}
          </h2>
          <p className="text-lg text-black/60 leading-relaxed">
            {services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.items.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Settings;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-black/5 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Top Image Section */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <Image
                    src={service.image || "/sections/industrial-specialist.jpg"}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

                  {/* Icon and Tag Overlays */}
                  <div className="absolute inset-0 p-6 flex items-start justify-between">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/30 backdrop-blur-md flex items-center justify-center">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-secondary/90 backdrop-blur-sm text-[8px] font-black tracking-widest text-white uppercase rounded-full shadow-lg">
                      {service.tag}
                    </span>
                  </div>
                </div>

                {/* Bottom Content Section */}
                <div className="p-7 md:p-10 flex flex-col flex-grow bg-white">
                  <h3 className="text-xl md:text-2xl font-black text-black mb-4 tracking-tighter leading-tight group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-black/60 leading-relaxed mb-8 flex-grow">
                    {isPage 
                      ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                      : service.description}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {service.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm font-bold text-black/70">
                        <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-secondary" />
                        </div>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-black/5 mt-auto">
                    <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-secondary group-hover:gap-4 transition-all">
                      LEARN MORE <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
