import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const services = [
  {
    title: "Social Media",
    description: "Building and managing your brand's presence across social platforms to engage your audience.",
  },
  {
    title: "Video Editing",
    description: "Crafting compelling video content that tells your story and captivates your audience.",
  },
  {
    title: "Graphic Design",
    description: "Creating stunning visuals, from YouTube thumbnails to complete brand assets.",
  },
  {
    title: "Paid Ads",
    description: "Driving targeted traffic and maximizing ROI with strategic paid advertising campaigns.",
  },
  {
    title: "Web & App Development",
    description: "Building responsive, high-performance websites and apps with modern technologies.",
  },
  {
    title: "AI & Automation",
    description: "Implementing AI agents and automation to streamline your business operations.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Your Complete Growth Toolkit</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer digital services to grow and elevate your business online.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <Card key={service.title} className="text-center flex flex-col items-center p-6 bg-background border-2 border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-2 shadow-lg">
              <CardHeader className="p-0 pt-6">
                <CardTitle className="mt-4 font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex items-center">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
