
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { Meteors } from "./ui/meteors";

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
  {
    title: "Graphic Design",
    description: "Creating stunning visuals, from YouTube thumbnails to complete brand assets.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Stand Out. <span className="text-primary font-cursive">Everywhere.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <div key={service.title} className="relative">
              <Card className="group text-center flex flex-col items-center p-6 bg-background border-2 border-transparent transition-all duration-300 transform md:hover:-translate-y-2 shadow-lg hover:shadow-primary/20 md:hover:bg-primary md:hover:bg-[linear-gradient(45deg,rgba(0,0,0,0.05)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.05)_50%,rgba(0,0,0,0.05)_75%,transparent_75%,transparent)] md:hover:bg-[length:6px_6px] overflow-hidden">
                <CardHeader className="p-0 pt-6">
                  <CardTitle className="mt-4 font-headline md:group-hover:font-cursive md:group-hover:text-primary-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center transition-all duration-300">
                    <p className="text-muted-foreground md:max-h-0 md:opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out md:group-hover:text-primary-foreground">
                      {service.description}
                    </p>
                </CardContent>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Meteors number={20} />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
