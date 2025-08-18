
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  image: string;
  aiHint?: string;
  bgColor?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  image,
  aiHint,
  bgColor = "bg-secondary",
  className,
}: TestimonialCardProps) {
  const cardContent = (
    <div className={cn("flex flex-col justify-start p-6 rounded-2xl h-full", bgColor)}>
      <blockquote className="flex flex-col justify-start h-full">
        <p className="text-sm md:text-base font-medium text-primary-foreground">
          &ldquo;{quote}&rdquo;
        </p>
        <footer className="mt-4 text-sm font-bold text-primary-foreground/80">- {name}</footer>
      </blockquote>
    </div>
  );

  const imageContent = (
    <div className="hidden md:block relative w-full h-full rounded-2xl overflow-hidden">
        <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={aiHint}
            className="rounded-2xl"
        />
    </div>
  );
  
  return (
      <div
          className={cn(
          "grid md:grid-cols-[1fr_2fr] items-center gap-4 p-4 rounded-2xl h-full bg-secondary border border-transparent md:border-foreground/20",
          className
          )}
      >
        {imageContent}
        <div className="md:col-span-1">
          {cardContent}
        </div>
      </div>
  );
}
