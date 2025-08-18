"use client";

import { cn } from "@/lib/utils";
import { TextRoll } from "./text-roll";

export const AnimatedCarousel = ({
  title = "Trusted by thousands of businesses worldwide",
  items = [],
  containerClassName = "",
  titleClassName = "",
  itemClassName = "",
  itemsPerViewMobile = 4,
  itemsPerViewDesktop = 6,
  spacing = "gap-10",
  padding = "py-20 lg:py-40",
}) => {

  return (
    <div className={`w-full ${padding} ${containerClassName}`}>
      <div className="container mx-auto">
        <div className={`flex flex-col ${spacing}`}>
          <h2 className={`text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left ml-2 text-foreground ${titleClassName}`}>
            <TextRoll>{title}</TextRoll>
          </h2>
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start gap-16 animate-infinite-scroll">
              {items.map((item, index) => (
                <li key={index} className={cn("flex-shrink-0", itemClassName)}>
                  {typeof item === 'string' ? <span>{item}</span> : item}
                </li>
              ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start gap-16 animate-infinite-scroll" aria-hidden="true">
              {items.map((item, index) => (
                <li key={index} className={cn("flex-shrink-0", itemClassName)}>
                  {typeof item === 'string' ? <span>{item}</span> : item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
