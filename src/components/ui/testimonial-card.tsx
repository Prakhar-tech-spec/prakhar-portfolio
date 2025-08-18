
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
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-center gap-4 p-6 rounded-2xl h-full",
        bgColor,
        className
      )}
    >
      <div className="md:w-1/3 flex-shrink-0">
        <div className="relative w-32 h-32 md:w-full md:h-40 aspect-square rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={aiHint}
            className="rounded-2xl"
          />
        </div>
      </div>
      <blockquote className="flex flex-col justify-center h-full md:w-2/3">
        <p className="text-sm md:text-base font-medium text-foreground">
          &ldquo;{quote}&rdquo;
        </p>
        <footer className="mt-4 text-sm font-bold text-foreground">- {name}</footer>
      </blockquote>
    </div>
  );
}
