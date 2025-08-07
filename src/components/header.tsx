
"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Results' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
];

const ADVENTURELogo = () => (
    <div className="flex items-center gap-2 font-semibold">
      <div className="bg-primary text-primary-foreground h-8 w-8 flex items-center justify-center rounded-md">
        <span className="text-lg font-bold">AD</span>
      </div>
      <span className="text-xl font-bold font-headline text-foreground">VENTURE</span>
    </div>
);


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean);
      let currentSectionId = '#hero';

      for (const section of sections) {
        const rect = section!.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSectionId = `#${section!.id}`;
          break;
        }
      }
      setActiveLink(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink(href);
    setIsMenuOpen(false);
  };

  const Logo = () => (
    <a href="#hero" className="flex items-center gap-2 font-semibold" onClick={(e) => handleLinkClick(e, '#hero')}>
      <ADVENTURELogo />
    </a>
  );

  const NavMenu = ({ isMobile = false }) => (
    <nav className={cn(
      "flex items-center gap-6 text-sm",
      isMobile ? "flex-col items-start gap-4 p-4 text-lg" : "hidden md:flex"
    )}>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => handleLinkClick(e, link.href)}
          className={cn(
            "transition-colors hover:text-primary",
            activeLink === link.href ? "text-primary font-semibold" : "text-muted-foreground"
          )}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className={cn(
          "mx-auto flex h-16 max-w-7xl items-center justify-between transition-all duration-300 px-4",
          isScrolled ? "mt-2" : "mt-0"
      )}>
        <div className={cn(
            "flex w-full items-center justify-between rounded-full border border-transparent px-4 sm:px-6 transition-all duration-300",
            isScrolled ? "border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60" : ""
        )}>
            <div className="flex items-center">
              <Logo />
            </div>
    
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <NavMenu />
              <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Hire Me</a>
              </Button>
            </div>
    
            {/* Mobile Navigation */}
            <div className="flex items-center md:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader className="mt-6 mb-8 border-b pb-4">
                     <Logo />
                     <SheetTitle className="sr-only">Main Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-4">
                    <NavMenu isMobile={true} />
                    <Button asChild className="mt-4 w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                       <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Hire Me</a>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
