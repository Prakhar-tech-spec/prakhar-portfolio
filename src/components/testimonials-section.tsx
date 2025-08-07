"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote: "Corelk transformed our online presence. Their design sense is impeccable, and the results speak for themselves. Highly recommended!",
    name: "Jane Doe",
    designation: "CEO, Tech Solutions Inc.",
    src: "https://placehold.co/500x500.png",
    aiHint: "woman portrait"
  },
  {
    quote: "Working with this team was a pleasure. They are true professionals who understand user needs and deliver outstanding web experiences.",
    name: "John Smith",
    designation: "Marketing Director, Creative Co.",
    src: "https://placehold.co/500x500.png",
    aiHint: "man portrait"
  },
  {
    quote: "The new branding and website have received amazing feedback. Our user engagement has skyrocketed since the launch.",
    name: "Emily White",
    designation: "Founder, Health & Wellness Hub",
    src: "https://placehold.co/500x500.png",
    aiHint: "woman smiling"
  },
  {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://placehold.co/500x500.png",
      aiHint: "man portrait smiling"
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://placehold.co/500x500.png",
      aiHint: "woman portrait professional"
    },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are proud to have worked with some amazing clients. Here's what they think of us.
          </p>
        </div>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
}
