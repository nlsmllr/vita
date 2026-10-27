'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setIsCursorVisible(true);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    // Delegated, so links rendered after mount (e.g. lightbox, terminal output) are picked up too
    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as Element | null;
      setIsHoveringLink(Boolean(target?.closest('a, button, img')));
    };

    const handleMouseLeave = () => setIsCursorVisible(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed left-0 top-0 z-[999] mix-blend-difference transition-opacity duration-200 ${
        isCursorVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`h-6 w-6 bg-white transition-transform duration-300 ease-out ${
          isHoveringLink ? 'rotate-45 scale-[2.4]' : 'rotate-0 scale-100'
        }`}
      />
    </div>
  );
}
