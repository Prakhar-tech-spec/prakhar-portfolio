
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useScroll, useSpring } from "framer-motion";
import React, { useRef } from "react";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We start by understanding your brand, goals, and target audience to build a comprehensive strategy.",
  },
  {
    step: "02",
    title: "Design & Creative",
    description: "Our team crafts stunning visuals and compelling content that aligns with the strategy and captivates your audience.",
  },
  {
    step: "03",
    title: "Development & Execution",
    description: "We bring the designs to life, building high-performance websites, apps, and campaigns that deliver results.",
  },
  {
    step: "04",
    title: "Launch & Growth",
    description: "After launching, we monitor performance, optimize for growth, and provide ongoing support to ensure success.",
  },
];

const Step = ({ step, title, description }: { step: string; title: string; description: string; }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <motion.li 
            ref={ref}
            style={{ opacity: scrollYProgress }}
            className="mb-10 ml-12"
        >
            <span className="absolute flex items-center justify-center w-16 h-16 bg-background rounded-full -left-8 ring-8 ring-background text-primary font-bold text-2xl border-2 border-primary">
                {step}
            </span>
            <h3 className="flex items-center mb-1 text-2xl font-headline font-semibold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </motion.li>
    )
}

export function WorkProcessSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="process" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Our Proven Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We follow a structured approach to ensure every project is a success, from initial idea to final launch.
          </p>
        </div>

        <div ref={ref} className="mt-16 relative max-w-2xl mx-auto">
            <motion.div 
                style={{ scaleY: scaleX }}
                className="absolute left-0 top-0 w-1 h-full bg-primary origin-top"
            />
            <ol className="relative">
                {processSteps.map((step) => (
                    <Step key={step.title} {...step} />
                ))}
            </ol>
        </div>
      </div>
    </section>
  );
}
