
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
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

const Step = ({ step, title, description, index, progress, range }: { step: string; title: string; description: string; index: number, progress: any, range: any[] }) => {
    const opacity = useTransform(progress, range, [1, 1]);
    const color = useTransform(progress, range, ['hsl(var(--primary))', 'hsl(var(--muted-foreground))']);

    return (
        <motion.div style={{ opacity }} className="relative mb-24 last:mb-0">
            <div className="absolute -left-12 md:-left-20 top-1 text-7xl md:text-8xl font-bold text-foreground/5 pointer-events-none">
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

  return (
    <section id="process" className="py-20 md:py-32" ref={containerRef}>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="md:sticky md:top-28 h-max">
            <h2 className="text-4xl md:text-5xl font-bold font-headline">
                Our <span className="text-primary font-cursive">Creative</span> Journey
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                The process we follow to help you GROW and SELL on social media that takes just 4hrs/month of your time.
            </p>
            <Button size="lg" className="mt-8">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
        </div>

        <div className="relative">
            <motion.div
                className="absolute left-0 top-0 w-1 bg-primary origin-top"
                style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
            />
            <div className="md:pl-8">
              {processSteps.map((step, index) => {
                  const totalSteps = processSteps.length;
                  const start = index / totalSteps;
                  const end = (index + 0.5) / totalSteps;
                  return <Step key={step.step} {...step} index={index} progress={scrollYProgress} range={[start, end]} />;
              })}
            </div>
        </div>
      </div>
    </section>
  );
}
