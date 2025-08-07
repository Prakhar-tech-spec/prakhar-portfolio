
"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  
  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Results' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink(href);
    setIsMenuOpen(false);
  };
  
  useEffect(() => {
    const handleScrollObserver = () => {
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean);
      const currentSection = sections.find(section => {
        const rect = section!.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (currentSection) {
        setActiveLink(`#${currentSection.id}`);
      }
    };
    
    window.addEventListener('scroll', handleScrollObserver);
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, [navLinks]);


  const Logo = () => (
    <a href="#" className="flex items-center gap-2 font-semibold" onClick={(e) => handleScroll(e, '#hero')}>
      <ADVENTURELogo />
    </a>
  );

  const NavMenu = ({ isMobile = false }) => (
    <nav className={cn(
      "items-center gap-6 text-sm",
      isMobile ? "flex flex-col items-start gap-4 p-4 text-lg" : "hidden md:flex"
    )}>
      {navLinks.map((link) => (
         <a
          key={link.href}
          href={link.href}
          onClick={(e) => handleScroll(e, link.href)}
          className={cn(
            "relative transition-colors hover:text-primary",
            activeLink === link.href ? "text-primary" : "text-muted-foreground"
          )}
        >
          {link.label}
          {activeLink === link.href && !isMobile && (
             <span className="absolute left-0 -bottom-2 h-0.5 w-full bg-primary transition-all"></span>
          )}
        </a>
      ))}
    </nav>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="container flex h-16 items-center justify-between rounded-full border border-border/40 bg-background/80 px-6 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center">
           <Logo />
        </div>
        
        <div className="hidden md:flex flex-1 justify-center items-center">
          <NavMenu />
        </div>

        <div className="flex items-center gap-4">
           <Button asChild className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
             <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Hire Me</a>
           </Button>
           <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
                <div className="p-4 mt-6">
                  <div className="mb-8">
                     <Logo />
                  </div>
                  <NavMenu isMobile={true} />
                  <Button asChild className="mt-8 w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                     <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Hire Me</a>
                  </Button>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
