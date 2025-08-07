"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Briefcase, Dribbble, Twitter } from 'lucide-react';
import { ClientsSection } from './clients-section';

interface HeroSectionProps {
  personalizedMessage: string;
}

const Dot = ({ color, position }: { color: string, position: string }) => (
  <div className={`absolute ${position} w-3 h-3 rounded-full ${color} opacity-50`}></div>
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
      <div className="container grid lg:grid-cols-2 gap-10 items-center py-20 md:py-32">
        <div className="flex flex-col items-start gap-6">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
            An automation to <span className="text-primary">business</span> transformation
          </h1>
          <p className="text-lg text-muted-foreground">
            As a passionate UX Designer I specialize in creating intuitive user-centric designs that drive engagement and elevate digital products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Let's Talk</a>
            </Button>
            <Button size="lg" variant="link" asChild className="text-foreground">
              <a href="#portfolio" onClick={(e) => handleScroll(e, '#portfolio')}>
                Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <p className="text-sm text-muted-foreground">CONNECT WITH ME</p>
            <a href="#" aria-label="Briefcase" className="text-muted-foreground hover:text-primary transition-colors">
              <Briefcase className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Dribbble" className="text-muted-foreground hover:text-primary transition-colors">
              <Dribbble className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="relative flex justify-center items-center mt-12 lg:mt-0">
          <div className="absolute w-full h-full max-w-[500px] max-h-[500px] bg-primary/10 rounded-full blur-3xl z-0"></div>
           <Dot color="bg-blue-500" position="top-1/4 left-1/4" />
           <Dot color="bg-red-500" position="top-1/2 right-1/4" />
           <Dot color="bg-green-500" position="bottom-1/4 left-1/3" />
          <Image
            src="https://i.postimg.cc/0ymvXWWQ/apran-image-Photoroom.png"
            alt="Agency Owner"
            width={500}
            height={500}
            className="rounded-full object-cover object-top z-10 shadow-2xl aspect-square"
            data-ai-hint="man portrait"
          />
          <Badge className="absolute top-10 -left-8 z-20 text-lg py-2 px-4 bg-background/80 backdrop-blur border-border text-foreground shadow-lg">
            Hi, I'm Samir
          </Badge>
          <Badge variant="outline" className="absolute bottom-10 -right-8 z-20 text-lg py-2 px-4 bg-background/80 backdrop-blur border-border text-foreground shadow-lg flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-primary"/>
            13 Years of Experience
          </Badge>
        </div>
      </div>
       <ClientsSection />
    </section>
  );
}
