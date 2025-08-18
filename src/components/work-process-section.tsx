
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import React from "react";

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

export function WorkProcessSection() {
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

        <div className="mt-16 relative">
          <div className="absolute left-0 top-1/2 w-full h-0.5 bg-border -translate-y-1/2"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={step.title} className="bg-secondary border-secondary-foreground/10 text-center p-6 transition-transform duration-300 hover:-translate-y-2">
                <CardHeader className="p-0 items-center">
                    <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary font-bold text-2xl mb-4">
                        {step.step}
                    </div>
                    <CardTitle className="font-headline text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4">
                    <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
