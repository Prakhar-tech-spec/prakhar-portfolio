"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Mountain } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#testimonials', label: 'Testimonials' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  
  const Logo = () => (
    <a href="#" className="flex items-center gap-2 font-semibold" onClick={(e) => handleScroll(e, '#hero')}>
      <Mountain className="h-6 w-6 text-primary" />
      <span className="text-xl font-bold font-headline">Corelk</span>
    </a>
  );

  const NavMenu = ({ isMobile = false }) => (
    <nav className={isMobile ? "flex flex-col items-start gap-4 p-4 text-lg" : "hidden md:flex items-center gap-6 text-sm"}>
      {navLinks.map((link) => (
        <a key={link.href} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="transition-colors hover:text-primary">
          {link.label}
        </a>
      ))}
       <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="transition-colors hover:text-primary">
          Contact
        </a>
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4 md:px-6">
        <Logo />
        <div className="flex-1" />
        <NavMenu />
        <div className="flex items-center gap-4 ml-auto">
           <Button asChild className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground">
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
                <div className="p-4 mt-6">
                  <div className="mb-8">
                     <Logo />
                  </div>
                  <NavMenu isMobile={true} />
                  <Button asChild className="mt-8 w-full bg-accent hover:bg-accent/90 text-accent-foreground">
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
