import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Megaphone, PenTool, Search } from "lucide-react";
import React from "react";

const services = [
  {
    icon: <PenTool className="h-10 w-10 text-primary" />,
    title: "UX/UI Design",
    description: "Creating intuitive and beautiful interfaces that users love to interact with.",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Web Development",
    description: "Building responsive, high-performance websites with modern technologies.",
  },
  {
    icon: <Megaphone className="h-10 w-10 text-primary" />,
    title: "Branding",
    description: "Developing strong brand identities that resonate with your target audience.",
  },
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "SEO Optimization",
    description: "Improving your website's visibility on search engines to attract more traffic.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide a wide range of digital services to help your business grow and succeed online.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service) => (
            <Card key={service.title} className="text-center flex flex-col items-center p-6 bg-background border-2 border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-2 shadow-lg">
              <CardHeader className="p-0 pt-6">
                {service.icon}
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
