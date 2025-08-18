
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";
import { TestimonialCard } from "./ui/testimonial-card";
import { UnderlinedText } from "./ui/underlined-text";

const testimonials = [
  {
    quote: "They have helped me achieve a consistent 50% MOM growth for my Personal brand. They handle everything from content ideation to uploading, requiring just an hour of my time each week.",
    name: "Emeka",
    image: "https://placehold.co/150x150.png",
    aiHint: "man portrait",
    bgColor: "bg-green-500",
  },
  {
    quote: "I Grew from 0-10k in just 30 Days, It was possible only because of the Amazing team at Visualview Media",
    name: "Shweena",
    image: "https://placehold.co/150x150.png",
    aiHint: "woman smiling",
    bgColor: "bg-pink-500",
  },
  {
    quote: "Visualview Media is helping me leverage my YouTube channel to sell courses, and I've seen a 10x increase in revenue using their strategy and management services. Their personal branding and content strategies are top-notch.",
    name: "The AI Dude",
    image: "https://placehold.co/150x150.png",
    aiHint: "man with glasses",
    bgColor: "bg-blue-500",
  },
  {
    quote: "Monetised my Yt channel with just 4 videos, Visualview Media Team never disappoints",
    name: "Jonty krishnani",
    image: "https://placehold.co/150x150.png",
    aiHint: "man with microphone",
    bgColor: "bg-yellow-500",
  },
  {
    quote: "Visualview Media's content strategy is unmatched. I went from 0-15k+ subscribers on YouTube in just 4 months using their strategy.",
    name: "Visualview Follower",
    image: "https://placehold.co/150x150.png",
    aiHint: "person smiling",
    bgColor: "bg-purple-500",
  },
  {
    quote: "Working with them was a breeze. They understood my vision and executed it flawlessly. The results speak for themselves.",
    name: "Alex Johnson",
    image: "https://placehold.co/150x150.png",
    aiHint: "smiling person",
    bgColor: "bg-teal-500",
  },
  {
    quote: "The best in the business! Their creative approach and attention to detail are second to none. Highly recommended!",
    name: "Samantha Lee",
    image: "https://placehold.co/150x150.png",
    aiHint: "woman portrait",
    bgColor: "bg-orange-500",
  }
];


const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    image: string;
    aiHint: string;
    bgColor: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  
  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[400px] max-w-full relative rounded-2xl border-b-0 flex-shrink-0 md:w-[550px]"
            key={item.name + idx}
          >
            <TestimonialCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};


export function TestimonialsSection() {
  const testimonialsRowOne = testimonials.slice(0, 4);
  const testimonialsRowTwo = testimonials.slice(3);

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Our <UnderlinedText>Clients</UnderlinedText>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are proud to have worked with some amazing clients. Here's what they think of us.
          </p>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center gap-8 mt-12 overflow-hidden">
        <InfiniteMovingCards
          items={testimonialsRowOne}
          direction="right"
          speed="normal"
          pauseOnHover={false}
        />
        <InfiniteMovingCards
          items={testimonialsRowTwo}
          direction="left"
          speed="normal"
          pauseOnHover={false}
        />
      </div>
    </section>
  );
}
