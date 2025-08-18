
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
    <div className="flex flex-col justify-center h-full p-6 rounded-2xl bg-background/20">
      <blockquote className="flex flex-col justify-center h-full">
        <p className="text-sm md:text-base font-medium">
          &ldquo;{quote}&rdquo;
        </p>
        <footer className="mt-4 text-sm font-bold">- {name}</footer>
      </blockquote>
    </div>
  );

  const imageContent = (
    <div className="relative w-full h-full aspect-square rounded-2xl overflow-hidden">
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
          "grid grid-cols-2 items-center gap-4 p-4 rounded-2xl h-full",
          bgColor,
          className
          )}
      >
        {imageContent}
        {cardContent}
      </div>
  );
}
