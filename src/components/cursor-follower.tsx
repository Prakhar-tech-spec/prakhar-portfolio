"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function CursorFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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
        opacity: isMounted ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out, top 0.05s ease-out, left 0.05s ease-out',
      }}
    />
  );
}
