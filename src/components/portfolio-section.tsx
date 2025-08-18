"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { MobileMockup } from "./ui/mobile-mockup";

const portfolioItems = [
  {
    title: "E-commerce Platform Redesign",
    category: "Web & App",
    image: "https://placehold.co/375x812.png",
    aiHint: "website screenshot"
  },
  {
    title: "SaaS Dashboard Development",
    category: "Web & App",
    image: "https://placehold.co/375x812.png",
    aiHint: "dashboard analytics"
  },
  {
    title: "Promotional Video for New Product",
    category: "Video Editing",
    image: "https://placehold.co/375x812.png",
    aiHint: "product video"
  },
  {
    title: "Social Media Campaign Visuals",
    category: "Social Media",
    image: "https://placehold.co/375x812.png",
    aiHint: "social media post"
  },
  {
    title: "YouTube Channel Thumbnail Pack",
    category: "Graphics & Thumbnails",
    image: "https://placehold.co/375x812.png",
    aiHint: "youtube thumbnail"
  },
  {
    title: "AI Chatbot for Customer Service",
    category: "AI Agents",
    image: "https://placehold.co/375x812.png",
    aiHint: "chatbot interface"
  },
  {
    title: "Google Ads Campaign Management",
    category: "Paid Ads",
    image: "https://placehold.co/375x812.png",
    aiHint: "advertising dashboard"
  },
  {
    title: "Instagram Content Creation",
    category: "Social Media",
    image: "https://placehold.co/375x812.png",
    aiHint: "instagram post"
  },
];

const filterCategories = [
  "All Work",
  "Video Editing",
  "Graphics & Thumbnails",
  "Web & App",
  "Paid Ads",
  "Social Media",
  "AI Agents"
];

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All Work");

  const filteredItems = activeFilter === "All Work"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Work That <span className="text-primary font-cursive">Speaks</span></h2>
        </div>

        <div className="flex justify-center mt-12 mb-8">
            <div className="flex flex-wrap justify-center items-center gap-2 bg-secondary p-2 rounded-2xl">
                {filterCategories.map((filter) => (
                    <Button
                        key={filter}
                        variant="ghost"
                        onClick={() => setActiveFilter(filter)}
                        className={cn(
                            "rounded-full px-4 py-2 text-sm transition-colors",
                            activeFilter === filter ? 'bg-background text-foreground hover:bg-background/90 hover:text-foreground' : 'text-muted-foreground hover:text-foreground'
                        )}
                    >
                        {filter}
                    </Button>
                ))}
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 mt-24">
          {filteredItems.map((item) => (
            <div key={item.title} className="group flex flex-col items-center text-center">
              <MobileMockup imgSrc={item.image} alt={item.title} aiHint={item.aiHint} />
              <div className="mt-6">
                <Badge variant="secondary">{item.category}</Badge>
                <h3 className="mt-4 font-headline text-xl font-semibold">{item.title}</h3>
                <div className="mt-4">
                  <Button variant="link" asChild className="p-0 h-auto text-primary">
                    <a href="#">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
