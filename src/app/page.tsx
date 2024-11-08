'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { ContactButton } from './ComponentsPhoto/ContactButton';
import CustomCursor from './ComponentsPhoto/CustomCursor';

export default function Home() {
  const [colorChange, setColorChange] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (!colorChange) {
        setColorChange(true);
        setTimeout(() => {
          setColorChange(false);
        }, 500);
      }

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {}, 100);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchmove', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, [colorChange]);

  return (
    <main className="mx-auto mt-72 flex h-auto w-screen cursor-none flex-col items-center justify-center uppercase text-black sm:mt-0 sm:h-screen sm:justify-evenly">
      <CustomCursor />
      <ContactButton link={'contact'} visible={true} />
      <Link className="cursor-none" href={'/'}>
        <h1 className="text-center text-5xl font-black tracking-wide sm:text-9xl">Nils Müller</h1>
      </Link>
      <div className="my-7 flex cursor-none flex-col space-x-[69px] text-3xl font-bold tracking-wide sm:my-0 sm:flex-row sm:text-4xl">
        <Link
          className={`cursor-none md:blur-sm md:transition-all md:duration-300 md:hover:blur-0 ${
            colorChange ? 'text-[#ff0080] duration-100 md:blur-0' : 'text-black duration-100 md:blur-sm'
          }`}
          href={'/dev'}
        >
          Developer
        </Link>
        <Link
          className={`cursor-none md:blur-sm md:transition-all md:duration-300 md:hover:blur-0 ${
            colorChange ? 'text-[#ff0080] duration-100 md:blur-0' : 'text-black duration-100 md:blur-sm'
          }`}
          href={'/photo'}
        >
          Photographer
        </Link>
      </div>
    </main>
  );
}
