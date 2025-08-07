"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const CorelkLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-primary"
  >
    <path
      d="M21.6 0H2.4C1.08 0 0 1.08 0 2.4V21.6C0 22.92 1.08 24 2.4 24H21.6C22.92 24 24 22.92 24 21.6V2.4C24 1.08 22.92 0 21.6 0ZM8.4 19.2H4.8V10.8H8.4V19.2ZM14.4 19.2H10.8V4.8H14.4V19.2ZM20.4 19.2H16.8V8.4H20.4V19.2Z"
      fill="currentColor"
    />
  </svg>
);


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');
  
  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#services', label: 'History' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#testimonials', label: 'About Me' },
    { href: '#blog', label: 'Blog' },
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
      <CorelkLogo />
      <span className="text-xl font-bold font-headline text-foreground">Corelk</span>
    </a>
  );

  const NavMenu = ({ isMobile = false }) => (
    <nav className={isMobile ? "flex flex-col items-start gap-4 p-4 text-lg" : "hidden md:flex items-center gap-6 text-sm"}>
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
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <div className="container mx-4 md:mx-6 flex h-16 items-center justify-between rounded-full border border-border bg-background/80 px-6 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
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
