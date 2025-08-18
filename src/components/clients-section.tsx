"use client";

import { AnimatedCarousel } from "./ui/logo-carousel";

const stats = [
  { value: "50M+", label: "Video Views" },
  { value: "50K+", label: "Social Followers Gained" },
  { value: "20K+", label: "YouTube Subscribers" },
  { value: "2K+", label: "Organic Leads Generated" },
];

const partnerNames = [
    "Canva",
    "Notion",
    "Github",
    "Framer",
    "Figma",
    "Lovable",
    "Cursor",
    "Da Vinci Resolve",
    "Supabase",
    "Firebase",
    "Vercel",
    "Netlify",
    "Loveart",
    "After Effects",
    "Adobe Premiere Pro"
];

export function ClientsSection() {
  return (
    <section id="clients" className="py-12 bg-secondary">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-shrink-0 text-center md:text-left">
            <h3 className="font-headline text-xl font-semibold">Numbers Don’t Lie</h3>
            <p className="text-muted-foreground">Here are some of the results we've delivered.</p>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground bg-primary px-2 rounded-md inline-block">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <AnimatedCarousel
          title="Meet Our Partners"
          items={partnerNames}
          itemClassName="text-2xl font-semibold"
          padding="py-10"
        />
      </div>
    </section>
  );
}
