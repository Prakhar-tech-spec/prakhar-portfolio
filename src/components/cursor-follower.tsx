"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function CursorFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    // Initial check in case cursor is already inside
    const initialCheck = setTimeout(() => {
        if(document.querySelector(":hover")) {
            setIsVisible(true);
        }
    }, 100);


    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(initialCheck);
    };
  }, []);

  return (
    <div
      className={cn(
        'hidden md:block',
        'pointer-events-none',
        'fixed top-0 left-0 z-50',
        'h-3 w-3 rounded-full bg-primary',
        'transform -translate-x-1/2 -translate-y-1/2'
      )}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out, top 0.05s ease-out, left 0.05s ease-out',
      }}
    />
  );
}
