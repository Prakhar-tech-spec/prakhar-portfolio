"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Corelk transformed our online presence. Their design sense is impeccable, and the results speak for themselves. Highly recommended!",
    name: "Jane Doe",
    title: "CEO, Tech Solutions Inc.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "woman portrait"
  },
  {
    quote: "Working with this team was a pleasure. They are true professionals who understand user needs and deliver outstanding web experiences.",
    name: "John Smith",
    title: "Marketing Director, Creative Co.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "man portrait"
  },
  {
    quote: "The new branding and website have received amazing feedback. Our user engagement has skyrocketed since the launch.",
    name: "Emily White",
    title: "Founder, Health & Wellness Hub",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "woman smiling"
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
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1">
                  <Card className="h-full bg-background">
                    <CardContent className="flex flex-col items-center text-center justify-center p-8 gap-6 h-full">
                      <blockquote className="text-lg italic flex-1">"{testimonial.quote}"</blockquote>
                      <div className="flex flex-col items-center gap-2 mt-auto">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                           data-ai-hint={testimonial.aiHint}
                        />
                         <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
