
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Onboarding",
    description: "We start by getting on a onboarding call to learn about you, your business, niche, target audience, goals and more.",
  },
  {
    step: "02",
    title: "Research",
    description: "We conduct in-depth research on your industry, competitors, and target audience to identify opportunities.",
  },
  {
    step: "03",
    title: "Strategy",
    description: "Based on our research, we develop a comprehensive strategy tailored to your brand and objectives.",
  },
  {
    step: "04",
    title: "Execution",
    description: "Our team executes the strategy, creating and managing content, campaigns, and other deliverables to drive results.",
  },
];

const Step = ({ step, title, description, index, progress }: { step: string; title: string; description: string; index: number, progress: any }) => {
    const stepCount = processSteps.length;
    const start = index / stepCount;
    const end = start + 1 / stepCount;
    
    const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0.3, 1, 1, 0.3]);
    const color = useTransform(progress, [start, start + 0.05, end - 0.05, end], ['hsl(var(--muted-foreground))', 'hsl(var(--primary))', 'hsl(var(--primary))', 'hsl(var(--muted-foreground))']);
    const dotColor = useTransform(progress, [start, start + 0.05, end - 0.05, end], ['hsl(var(--border))', 'hsl(var(--primary))', 'hsl(var(--primary))', 'hsl(var(--border))']);

    return (
        <motion.div style={{ opacity }} className="relative mb-24 last:mb-0">
            <motion.div 
                className="absolute w-2 h-2 rounded-full -left-[4.5px] top-3.5"
                style={{ backgroundColor: dotColor }}
            />
            <div className="absolute -left-12 md:-left-20 top-1 text-7xl md:text-8xl font-bold pointer-events-none opacity-20 text-background text-stroke">
                {step}
            </div>
            <motion.h3 style={{ color }} className="mb-2 text-3xl font-bold font-headline">{title}</motion.h3>
            <p className="text-muted-foreground max-w-sm">{description}</p>
        </motion.div>
    )
}

export function WorkProcessSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="process" className="py-20 md:py-32" ref={containerRef}>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="md:sticky md:top-28 h-max">
            <h2 className="text-4xl md:text-5xl font-bold font-headline">
                Our <span className="text-primary font-cursive">Creative</span> Journey
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                The process we follow to help you GROW and SELL on social media that takes just 4hrs/month of your time.
            </p>
            <Button size="lg" asChild className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="https://cal.com/prakhar-creatific/30min" target="_blank" rel="noopener noreferrer">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
            </Button>
        </div>

        <div className="relative">
            <motion.div
                className="absolute left-0 top-0 w-0.5 bg-primary origin-top"
                style={{ height: timelineHeight }}
            />
            <div className="pl-8">
              {processSteps.map((step, index) => {
                  return <Step key={step.step} {...step} index={index} progress={scrollYProgress} />;
              })}
            </div>
        </div>
      </div>
    </section>
  );
}
