"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Briefcase, Instagram, Facebook, Linkedin } from 'lucide-react';
import { ClientsSection } from './clients-section';

interface HeroSectionProps {
  personalizedMessage: string;
}

const Dot = ({ color, position }: { color: string, position: string }) => (
  <div className={`absolute ${position} w-2 h-2 md:w-3 md:h-3 rounded-full ${color} opacity-50`}></div>
);

export function HeroSection({ personalizedMessage }: HeroSectionProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-grid-white/[0.05]">
      <div className="container grid lg:grid-cols-2 items-center">
        <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
            An automation to <span className="text-primary">business</span> transformation
          </h1>
          <p className="text-lg text-muted-foreground font-bold italic">
            Execute Growth & Automate
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-md">
            Smart strategy. Killer creative. AI that works while you sleep.
          </p>
          <div className="flex flex-row justify-center lg:justify-start gap-4">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="https://api.whatsapp.com/send?phone=917029757375&text=Hi!%20I%E2%80%99m%20interested%20in%20your%20done-for-you%20creative%20and%20growth%20services.%20Can%20we%20connect%20to%20discuss%20what%20might%20be%20the%20best%20fit%3F" target="_blank" rel="noopener noreferrer">Let's Talk</a>
            </Button>
            <Button size="lg" variant="link" asChild className="text-foreground">
              <a href="#portfolio" onClick={(e) => handleScroll(e, '#portfolio')}>
                Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <p className="text-sm text-muted-foreground">CONNECT WITH ME</p>
            <a href="https://www.instagram.com/arpanigcoach?igsh=OGRuNnRyeHVqNzBr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#hero" onClick={(e) => handleScroll(e, '#hero')} aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/arpan-dey-5369212a4/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="Linkedin" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="relative flex justify-center items-center mt-12 lg:mt-0">
          <div className="absolute w-full h-full max-w-[300px] max-h-[300px] md:max-w-[500px] md:max-h-[500px] bg-primary/10 rounded-lg blur-3xl z-0"></div>
           <Dot color="bg-blue-500" position="top-1/4 left-1/4" />
           <Dot color="bg-red-500" position="top-1/2 right-1/4" />
           <Dot color="bg-green-500" position="bottom-1/4 left-1/3" />
           <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-lg overflow-hidden z-10 shadow-2xl">
              <Image
                src="https://i.postimg.cc/0ymvXWWQ/apran-image-Photoroom.png"
                alt="Agency Owner"
                width={500}
                height={600}
                className="object-cover w-full h-auto md:h-[600px]"
                data-ai-hint="man portrait"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
           </div>
          <div className="absolute top-10 -left-4 md:top-20 md:-left-8 z-20 animate-float">
            <Badge className="relative text-base md:text-lg py-2 px-4 bg-primary text-primary-foreground shadow-lg transition-colors hover:bg-primary/90">
              Hi, I'm Arpan
            </Badge>
          </div>
          <Badge variant="outline" className="absolute bottom-8 -right-4 md:bottom-10 md:-right-4 z-20 text-sm md:text-lg py-2 px-4 bg-background/80 backdrop-blur border-border text-foreground shadow-lg flex items-center gap-2 transition-colors hover:bg-primary/90 animate-float" style={{ animationDelay: '1.5s' }}>
            <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-primary"/>
            13 Years of Experience
          </Badge>
        </div>
      </div>
       <ClientsSection />
    </section>
  );
}
