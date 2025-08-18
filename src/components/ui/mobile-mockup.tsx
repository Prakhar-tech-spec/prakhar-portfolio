"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface MobileMockupProps {
  imgSrc: string;
  alt: string;
  aiHint?: string;
  className?: string;
}

export function MobileMockup({ imgSrc, alt, aiHint, className }: MobileMockupProps) {
  return (
    <div className={cn("relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-[2.5rem] h-[480px] w-[270px] shadow-xl group-hover:-translate-y-2 transition-transform duration-300", className)}>
        <div className="w-[130px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        <div className="h-[40px] w-[3px] bg-gray-800 absolute -left-[13px] top-[70px] rounded-l-lg"></div>
        <div className="h-[40px] w-[3px] bg-gray-800 absolute -left-[13px] top-[120px] rounded-l-lg"></div>
        <div className="h-[60px] w-[3px] bg-gray-800 absolute -right-[13px] top-[140px] rounded-r-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-full h-full bg-background">
            <Image 
                src={imgSrc}
                className="w-full h-full object-cover" 
                width={270}
                height={480}
                alt={alt}
                data-ai-hint={aiHint}
            />
        </div>
    </div>
  );
}
