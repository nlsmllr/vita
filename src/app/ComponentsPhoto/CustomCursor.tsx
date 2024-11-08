// CustomCursor.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!isCursorVisible) {
        setIsCursorVisible(true);
      }

      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX - 20}px`;
        cursorRef.current.style.top = `${event.clientY - 20}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isCursorVisible]);

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed z-50 h-10 w-10 cursor-none rounded-full mix-blend-difference transition-opacity ${
        isCursorVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background: 'white',
        mixBlendMode: 'difference',
      }}
    />
  );
}
