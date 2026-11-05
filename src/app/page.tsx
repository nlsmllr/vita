'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { ContactButton } from './ComponentsPhoto/ContactButton';
import CustomCursor from './ComponentsPhoto/CustomCursor';

export default function Home() {
  const [nudge, setNudge] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!nudge) {
        setNudge(true);
        setTimeout(() => setNudge(false), 500);
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, [nudge]);

  return (
    <main className="flex min-h-screen cursor-none flex-col items-center justify-center gap-14 px-4">
      <CustomCursor />
      <ContactButton link={'contact'} visible={true} />
      <Link className="cursor-none" href={'/'}>
        <h1 className="display text-center">Nils Müller</h1>
      </Link>
      <div className="flex flex-col items-center gap-5 sm:flex-row">
        <Link
          className={`btn btn-primary min-w-[220px] cursor-none ${nudge ? 'btn-glow md:animate-bounce' : ''}`}
          href={'/dev'}
        >
          Developer
        </Link>
        <Link className={`btn min-w-[220px] cursor-none ${nudge ? 'btn-glow md:animate-bounce' : ''}`} href={'/photo'}>
          Photographer
        </Link>
      </div>
    </main>
  );
}
