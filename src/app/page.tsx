'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Developer() {
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
    <main className="mx-auto mt-72 flex h-auto cursor-none flex-col items-center justify-center uppercase text-black sm:mt-0 sm:h-screen sm:justify-evenly">
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed z-50 h-10 w-10 rounded-full border border-black mix-blend-difference transition-opacity ${
          isCursorVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'white',
          mixBlendMode: 'difference',
        }}
      />
      <Link className="cursor-none" href={'/'}>
        <h1 className="text-center text-5xl font-black tracking-wide sm:text-9xl">Nils Müller</h1>
      </Link>
      <div className="my-7 flex cursor-none flex-col space-x-[69px] text-3xl font-bold tracking-wide sm:my-0 sm:flex-row sm:text-4xl">
        <Link className="cursor-none md:blur-sm md:transition-all md:duration-300 md:hover:blur-0" href={'/dev'}>
          Developer
        </Link>
        <Link className="cursor-none md:blur-sm md:transition-all md:duration-300 md:hover:blur-0" href={'/photo'}>
          Photographer
        </Link>
      </div>
    </main>
  );
}
