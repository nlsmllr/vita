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

  const linkClass = (path: string) =>
    `landing-link cursor-none md:transition-all md:duration-300 ${
      colorChange ? 'is-changing md:animate-bounce' : ''
    }`;

  return (
    <main className="landing-page flex min-h-screen justify-center overflow-hidden">
      <div className="landing-shape landing-shape-light" aria-hidden="true" />
      <div className="landing-shape landing-shape-mid" aria-hidden="true" />
      <div className="landing-shape landing-shape-dark" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl cursor-none flex-col items-center justify-center px-6 py-32 uppercase text-[var(--lavender-ink)] sm:justify-evenly sm:px-10 sm:py-16">
        <CustomCursor />
        <ContactButton link={'contact'} visible={true} />
        <div className="landing-intro">
          <p className="landing-kicker">A collection of work</p>
          <Link className="cursor-none" href={'/'}>
            <h1 className="landing-title text-center font-black tracking-[-0.06em]">Nils Müller</h1>
          </Link>
        </div>
        <nav aria-label="Explore portfolio" className="landing-nav flex cursor-none flex-col items-center gap-4 text-center sm:flex-row sm:gap-10">
          <Link className={linkClass('/dev')} href={'/dev'}>
            Developer
          </Link>
          <Link className={linkClass('/photo')} href={'/photo'}>
            Photographer
          </Link>
          <Link className={linkClass('/minis')} href={'/minis'}>
            Minis
          </Link>
        </nav>
        <p className="landing-note">Designing, documenting, and making things with intent.</p>
      </div>
    </main>
  );
}
