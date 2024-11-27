'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!isCursorVisible) {
        setIsCursorVisible(true);
      }

      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX}px`;
        cursorRef.current.style.top = `${event.clientY}px`;
      }
    };

    const handleMouseEnterLink = () => setIsHoveringLink(true);
    const handleMouseLeaveLink = () => setIsHoveringLink(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnterLink);
      link.addEventListener('mouseleave', handleMouseLeaveLink);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a').forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnterLink);
        link.removeEventListener('mouseleave', handleMouseLeaveLink);
      });
    };
  }, [isCursorVisible]);

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed z-50 rounded-full mix-blend-difference transition-[width,height] duration-500 ease-in-out ${
        isCursorVisible ? 'opacity-100' : 'opacity-0'
      } ${isHoveringLink ? 'h-16 w-16' : 'h-10 w-10'}`}
      style={{
        transform: 'translate(-50%, -50%)',
        background: 'white',
        mixBlendMode: 'difference',
      }}
    />
  );
}
