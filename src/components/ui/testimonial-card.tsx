
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
    <blockquote className="flex flex-col justify-center h-full">
      <p className="text-sm md:text-base font-medium text-foreground">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-4 text-sm font-bold text-foreground">- {name}</footer>
    </blockquote>
  );

  const imageContent = (
    <div className="flex-shrink-0">
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
    </div>
  );

  if (name === "Emeka" || name === "Shweena" || name === "Jonty krishnani") {
    return (
      <div
        className={cn(
          "grid grid-cols-2 items-center gap-4 p-4 rounded-2xl h-full",
          bgColor,
          className
        )}
      >
        {name === 'Shweena' ? (
          <>
            {imageContent}
            {cardContent}
          </>
        ) : (
          <>
            {cardContent}
            {imageContent}
          </>
        )}
      </div>
    );
  }

  return (
    <div className={cn("p-6 rounded-2xl h-full", bgColor, className)}>
      {cardContent}
    </div>
  );
}
