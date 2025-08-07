"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Mountain } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#history', label: 'History' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About Me' },
    { href: '#blog', label: 'Blog' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  
  const Logo = () => (
    <a href="#" className="flex items-center gap-2 font-semibold" onClick={(e) => handleScroll(e, '#hero')}>
      <Mountain className="h-6 w-6 text-primary" />
      <span className="text-xl font-bold font-headline text-foreground">Corelk</span>
    </a>
  );

  const NavMenu = ({ isMobile = false }) => (
    <nav className={isMobile ? "flex flex-col items-start gap-4 p-4 text-lg" : "hidden md:flex items-center gap-6 text-sm"}>
      {navLinks.map((link) => (
        <a key={link.href} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="transition-colors hover:text-primary text-muted-foreground">
          {link.label}
        </a>
      ))}
       <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="transition-colors hover:text-primary text-muted-foreground">
          Contact
        </a>
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4 md:px-6">
        <Logo />
        <div className="flex-1 justify-center items-center hidden md:flex">
          <NavMenu />
        </div>
        <div className="flex items-center gap-4 ml-auto">
           <Button asChild className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground">
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
