import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const portfolioItems = [
  {
    title: "E-commerce Platform Redesign",
    category: "UX/UI Design",
    image: "https://placehold.co/600x400.png",
    aiHint: "website screenshot"
  },
  {
    title: "SaaS Dashboard Development",
    category: "Web Development",
    image: "https://placehold.co/600x400.png",
    aiHint: "dashboard analytics"
  },
  {
    title: "Corporate Branding for Tech Startup",
    category: "Branding",
    image: "https://placehold.co/600x400.png",
    aiHint: "logo design"
  },
  {
    title: "Mobile App for Fintech Company",
    category: "UX/UI Design",
    image: "https://placehold.co/600x400.png",
    aiHint: "mobile app"
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Selected Works</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Take a look at some of our recent projects that showcase our skills and creativity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {portfolioItems.map((item) => (
            <Card key={item.title} className="overflow-hidden group">
              <CardHeader className="p-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={item.aiHint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <Badge variant="secondary">{item.category}</Badge>
                <CardTitle className="mt-4 font-headline">{item.title}</CardTitle>
              </CardContent>
              <CardFooter>
                 <Button variant="link" asChild className="p-0 h-auto text-primary">
                  <a href="#">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
