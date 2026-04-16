"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { content } from "@/app/lib/content";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    if (!isHomePage) {
      setIsScrolled(true);
      setActiveSection("");
    }

    // Intersection Observer for active section detection
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sectionIds = content.headerNavLinks
      .filter((l) => l.href.startsWith("#"))
      .map((link) => link.href.replace("#", ""));

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [isHomePage]);

  const handleLinkClick = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/")) return pathname === href;
    const id = href.replace("#", "");
    return activeSection === id;
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? "bg-white/90 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            "font-headline text-2xl font-black tracking-tighter flex items-center gap-3 transition-colors",
            !isScrolled ? "text-primary-foreground" : "text-black"
          )}
        >
          <div className="relative w-12 h-12 bg-white rounded-xl overflow-hidden shadow-lg border-2 border-white">
            <Image
              src="/logo.jpg"
              alt={content.name}
              fill
              className="object-contain p-1"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl leading-none">{(content as any).shortName || content.name}</span>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Strategic Engineering</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-2xl transition-all duration-500">
          {content.headerNavLinks.map((link) => {
            const active = isLinkActive(link.href);
            const href = link.href.startsWith("#") && !isHomePage ? `/${link.href}` : link.href;
            return (
              <Link
                key={link.name}
                href={href}
                onClick={handleLinkClick}
                className={cn(
                  "px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300",
                  active
                    ? "bg-black text-white shadow-lg"
                    : "bg-white text-black hover:bg-white/80 shadow-sm"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            className="rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-500 shadow-lg hover:shadow-xl bg-white text-black hidden md:inline-flex"
          >
            <Link href={isHomePage ? "#contact" : "/#contact"}>Contact us</Link>
          </Button>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(!isScrolled ? "text-primary-foreground" : "text-black")}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white p-6 z-40 animate-in fade-in duration-300">
          <nav className="flex flex-col gap-4">
            {content.headerNavLinks.map((link) => {
              const href = link.href.startsWith("#") && !isHomePage ? `/${link.href}` : link.href;
              return (
                <Link
                  key={link.name}
                  href={href}
                  onClick={handleLinkClick}
                  className="w-full text-xl font-bold p-6 bg-card/10 rounded-2xl text-black hover:bg-primary transition-all shadow-sm"
                >
                  {link.name}
                </Link>
              );
            })}
            <Button asChild className="w-full bg-black text-white rounded-2xl h-16 text-xl font-black mt-4 shadow-xl">
              <Link href={isHomePage ? "#contact" : "/#contact"} onClick={handleLinkClick}>
                Get in touch
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
