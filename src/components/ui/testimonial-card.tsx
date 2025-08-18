
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
    <div className={cn(
        "flex flex-col justify-center h-full p-6 rounded-2xl",
        (name === 'Emeka' || name === 'Shweena' || name === 'Jonty krishnani') ? 'bg-transparent text-foreground' : bgColor
    )}>
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
                <div className={cn("h-full rounded-2xl", bgColor === "bg-pink-200/10" && "bg-pink-200/20")}>
                    {cardContent}
                </div>
            </>
            ) : (
            <>
                <div className={cn("h-full rounded-2xl", bgColor === "bg-green-200/10" && "bg-green-200/20", bgColor === "bg-yellow-200/10" && "bg-yellow-200/20")}>
                    {cardContent}
                </div>
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
