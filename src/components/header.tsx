
"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { X, Menu } from 'lucide-react';

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

const AnimatedHamburgerButton = ({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) => {
    return (
        <motion.button
            onClick={onClick}
            className="relative z-50 h-8 w-8 text-foreground transition-colors hover:text-primary"
            animate={isOpen ? "open" : "closed"}
            initial={false}
            aria-label="Toggle menu"
        >
            <motion.div
                variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 5 },
                }}
                className="absolute h-0.5 w-6 bg-current"
                style={{ top: '35%' }}
            />
            <motion.div
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
                className="absolute h-0.5 w-6 bg-current"
                style={{ top: '50%' }}
            />
            <motion.div
                variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -5 },
                }}
                className="absolute h-0.5 w-6 bg-current"
                style={{ top: '65%' }}
            />
        </motion.button>
    );
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isCurrentlyScrolled = window.scrollY > 10;
      if(isCurrentlyScrolled !== isScrolled) {
        setIsScrolled(isCurrentlyScrolled);
      }
      
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean);
      let currentSectionId = '#hero';

      for (const section of sections) {
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSectionId = `#${section.id}`;
              break;
            }
        }
      }
      setActiveLink(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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

  const NavMenu = () => (
    <nav className="hidden md:flex items-center gap-6 text-sm">
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
    <>
      <header className="fixed top-0 left-0 right-0 z-40">
        <div className={cn(
          "transition-all duration-300",
          isScrolled ? "p-2" : "p-4"
        )}>
          <div className={cn(
              "w-full h-20 flex items-center justify-between rounded-full border border-transparent px-4 sm:px-6 transition-all duration-300",
              isScrolled ? "border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60" : ""
          )}>
            <Logo />
      
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <NavMenu />
              <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Hire Me</a>
              </Button>
            </div>
      
            {/* Mobile Navigation Trigger */}
            <div className="flex items-center md:hidden">
              <AnimatedHamburgerButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 z-30 flex h-screen w-full flex-col items-center justify-center bg-background/95 backdrop-blur-lg"
            >
                <nav className="flex flex-col items-center gap-8">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className="text-3xl font-semibold text-foreground transition-colors hover:text-primary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </nav>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
