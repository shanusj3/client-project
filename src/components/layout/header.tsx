"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { 
  Menu, X, ChevronDown, ArrowRight, 
  Globe, Search, CheckCircle, Users, TrendingUp, Briefcase, 
  Cpu, Settings, Zap, HardHat 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { content } from "@/app/lib/content";

const ICON_MAP: Record<string, any> = {
  Globe, Search, CheckCircle, Users, TrendingUp, Briefcase, Cpu, Settings, Zap, HardHat
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    if (!isHomePage) {
      setIsScrolled(true);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  const handleLinkClick = (href: string) => {
    if (isMenuOpen) setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/")) return pathname === href;
    return false;
  };

  const handleMouseEnter = (linkName: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    if (linkName === "Services" || linkName === "Products") {
      setActiveDropdown(linkName);
    } else {
      setActiveDropdown(null);
    }
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const getDropdownItems = () => {
    if (activeDropdown === "Services") return (content.services as any).items;
    if (activeDropdown === "Products") return (content.products as any).items;
    return [];
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        (isScrolled || !isHomePage)
          ? "bg-white/95 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            "font-headline flex items-center gap-4 transition-colors",
            (!isScrolled && isHomePage) ? "text-white" : "text-black"
          )}
        >
          <div className="relative w-11 h-11 bg-white rounded-lg overflow-hidden shadow-md">
            <Image
              src="/logo.jpg"
              alt={content.name}
              fill
              className="object-contain p-1"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black leading-none tracking-tight">{(content as any).shortName || content.name}</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-80 mt-0.5">Strategic Engineering</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 h-full">
          {content.headerNavLinks.map((link) => {
            const hasDropdown = link.name === "Services" || link.name === "Products";
            const active = isLinkActive(link.href);
            const href = link.href.startsWith("#") && !isHomePage ? `/${link.href}` : link.href;
            
            return (
              <div 
                key={link.name}
                className="relative group py-2"
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={href}
                  onClick={() => handleLinkClick(link.href)}
                  className={cn(
                    "flex items-center gap-1.5 text-sm font-medium tracking-wide transition-all duration-300",
                    (!isScrolled && isHomePage) ? "text-white/90 hover:text-white" : "text-black/70 hover:text-black",
                    (active || (hasDropdown && activeDropdown === link.name)) && "text-secondary"
                  )}
                >
                  {link.name}
                  {hasDropdown && (
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      activeDropdown === link.name && "rotate-180"
                    )} />
                  )}
                  {active && !activeDropdown && (
                    <div className={cn(
                      "absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-secondary transition-all duration-300"
                    )} />
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                {hasDropdown && activeDropdown === link.name && (
                  <div 
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 pt-6 pointer-events-auto",
                      "w-[600px] animate-in fade-in slide-in-from-top-4 duration-300"
                    )}
                    onMouseEnter={() => {
                      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                    }}
                  >
                    <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/5 overflow-hidden">
                      <div className="grid grid-cols-2 gap-4">
                        {getDropdownItems().map((item: any) => {
                          const Icon = ICON_MAP[item.icon] || Globe;
                          const itemHref = link.href === "/services" ? `/#services` : `/#products`; // Simplified for landing page
                          
                          return (
                            <Link
                              key={item.id}
                              href={itemHref}
                              onClick={() => handleLinkClick(itemHref)}
                              className="group/item flex items-center p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300 border border-transparent hover:border-black/5"
                            >
                              <div className="flex items-center">
                                <p className="text-sm font-medium text-black tracking-tight">{item.title}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                      
                      <div className="mt-8 pt-8 border-t border-black/5 flex items-center justify-between">
                         <div className="space-y-1">
                            <p className="text-[10px] font-black text-black uppercase tracking-widest opacity-30">Strategic engineering solutions</p>
                            <p className="text-[11px] font-bold text-black/60 italic">World-class expertise, tailored for you.</p>
                         </div>
                         <Button asChild size="sm" variant="ghost" className="rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-secondary hover:text-white">
                            <Link href={link.href}>View All {link.name}</Link>
                         </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            className={cn(
              "rounded-full px-7 h-10 text-xs font-black uppercase tracking-widest transition-all duration-500 shadow-xl",
              (!isScrolled && isHomePage) 
                ? "bg-white text-black hover:bg-white/90" 
                : "bg-primary text-white hover:bg-primary/90"
            )}
          >
            <Link href={isHomePage ? "#contact" : "/#contact"}>Contact us</Link>
          </Button>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn((!isScrolled && isHomePage) ? "text-white" : "text-black")}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white p-6 z-40 animate-in fade-in duration-300 overflow-y-auto">
          <nav className="flex flex-col gap-3">
            {content.headerNavLinks.map((link) => {
              const href = link.href.startsWith("#") && !isHomePage ? `/${link.href}` : link.href;
              const hasDropdown = link.name === "Services" || link.name === "Products";
              
              return (
                <div key={link.name} className="space-y-2">
                  <Link
                    href={href}
                    onClick={() => handleLinkClick(link.href)}
                    className="w-full text-lg font-medium p-5 bg-slate-50 flex items-center justify-between rounded-xl text-black hover:bg-slate-100 transition-all border border-black/5"
                  >
                    {link.name}
                    {hasDropdown && <ChevronDown className="w-5 h-5 opacity-30" />}
                  </Link>
                  
                  {hasDropdown && (
                    <div className="grid grid-cols-1 gap-2 pl-4">
                       {(link.name === "Services" ? content.services : content.products).items.map((item: any) => (
                         <Link
                           key={item.id}
                           href={link.href === "/services" ? `/#services` : `/#products`}
                           onClick={() => handleLinkClick(item.href)}
                           className="flex items-center gap-4 p-4 bg-slate-50/50 rounded-xl text-sm font-medium text-black/70 italic hover:text-black hover:bg-secondary/10 transition-colors"
                         >
                           <ArrowRight className="w-3 h-3 text-secondary" />
                           {item.title}
                         </Link>
                       ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Button asChild className="w-full bg-[#0A2540] text-white rounded-xl h-14 text-sm font-black uppercase tracking-widest mt-6 shadow-xl">
              <Link href={isHomePage ? "#contact" : "/#contact"} onClick={() => handleLinkClick("#contact")}>
                Get in touch
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
