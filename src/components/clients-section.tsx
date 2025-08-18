"use client";

import { AnimatedCarousel } from "./ui/logo-carousel";

const stats = [
  { value: "50M+", label: "Video Views" },
  { value: "50K+", label: "Social Followers Gained" },
  { value: "20K+", label: "YouTube Subscribers" },
  { value: "2K+", label: "Organic Leads Generated" },
];

const partnerLogos = [
    "https://www.vectorlogo.zone/logos/canva/canva-icon.svg",
    "https://www.vectorlogo.zone/logos/notion/notion-icon.svg",
    "https://www.vectorlogo.zone/logos/github/github-icon.svg",
    "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
    "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    "https://uploads-ssl.webflow.com/62382103347513524953e344/62534552b7194178a935515c_lovable-logo-color.svg",
    "https://www.vectorlogo.zone/logos/cursor/cursor-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/1a/DaVinci_Resolve_17_logo.svg",
    "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
    "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
    "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
    "https://uploads-ssl.webflow.com/624af7b00344d3202684803d/624af7b00344d31405848074_Artlogo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg"
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
          logos={partnerLogos}
          logoContainerHeight="h-10"
          padding="py-10"
        />
      </div>
    </section>
  );
}
