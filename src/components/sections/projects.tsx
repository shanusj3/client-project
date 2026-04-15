"use client";

import { content } from "@/app/lib/content";
import { Folder, Calendar, MapPin, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProjectsSection({ className, isPage = false }: { className?: string; isPage?: boolean }) {
  const { projects } = content;

  return (
    <section id="projects" className={cn("py-24 bg-black/5 relative overflow-hidden", className)}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {!isPage && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black mb-6">
                {projects.title}
              </h2>
              <p className="text-xl text-black/60 leading-relaxed">
                {projects.subtitle}
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.items.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-[2rem] overflow-hidden border border-black/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl flex flex-col"
            >
              <div className="p-10 flex flex-col h-full">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 bg-black text-white text-[10px] font-bold tracking-widest uppercase rounded-full">
                    {project.category}
                  </span>
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl font-black tracking-tighter text-black mb-6 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-6 mb-8 text-sm font-medium text-black/40">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                </div>

                <p className="text-black/60 leading-relaxed mb-10 flex-grow">
                  {project.summary}
                </p>

                <div className="space-y-4 mb-10">
                  <h4 className="text-sm font-black uppercase tracking-widest text-black/40">Key Outcomes</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-3 text-sm font-bold text-black/80">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        </div>
                        {outcome}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-black/5 mt-auto">
                  <button className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-black group-hover:gap-5 transition-all">
                    View Case Study <ExternalLink className="w-4 h-4 text-primary" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
