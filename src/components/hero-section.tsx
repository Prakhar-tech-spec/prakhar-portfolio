"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface HeroSectionProps {
  personalizedMessage: string;
}

export function HeroSection({ personalizedMessage }: HeroSectionProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if(targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="hero" className="container grid lg:grid-cols-2 gap-10 items-center py-20 md:py-32">
      <div className="flex flex-col items-start gap-6">
        <p className="text-primary font-semibold">{personalizedMessage}</p>
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
          Crafting Seamless Digital Experiences
        </h1>
        <p className="text-lg text-muted-foreground">
          As a passionate UX Designer I specialize in creating intuitive user-centric designs that drive engagement and elevate digital products.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
            <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Let's Talk</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#portfolio" onClick={(e) => handleScroll(e, '#portfolio')}>Portfolio</a>
          </Button>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <a href="#" aria-label="Github" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="relative flex justify-center items-center mt-12 lg:mt-0">
        <div className="absolute w-full h-full max-w-[500px] max-h-[500px] bg-primary/10 rounded-full blur-3xl z-0"></div>
        <Image
          src="https://placehold.co/500x500.png"
          alt="Agency Owner"
          width={500}
          height={500}
          className="rounded-full object-cover z-10 shadow-2xl aspect-square"
          data-ai-hint="portrait man"
        />
        <Badge className="absolute bottom-10 right-0 z-20 text-lg py-2 px-4 bg-background/80 backdrop-blur border-primary text-primary shadow-lg">
          13 Years of Experience
        </Badge>
      </div>
    </section>
  );
}
