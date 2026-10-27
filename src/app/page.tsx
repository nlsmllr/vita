'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { ContactButton } from './ComponentsPhoto/ContactButton';
import CustomCursor from './ComponentsPhoto/CustomCursor';

const sections = [
  { href: '/dev', label: 'Developer' },
  { href: '/photo', label: 'Photographer' },
];

export default function Home() {
  const [colorChange, setColorChange] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!colorChange) {
        setColorChange(true);
        setTimeout(() => {
          setColorChange(false);
        }, 500);
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, [colorChange]);

  return (
    <main className="flex min-h-[100svh] cursor-none flex-col bg-paper text-ink">
      <CustomCursor />
      <ContactButton link={'contact'} visible={true} />

      <section className="bg-grid flex flex-1 flex-col justify-end overflow-hidden border-b-2 border-ink px-4 pb-4 pt-20">
        <Link className="cursor-none" href={'/'}>
          <h1 className="font-wide text-[clamp(3.5rem,17.5vw,19rem)] font-black uppercase leading-none tracking-[-0.045em]">
            Nils
            <br />
            Müller
          </h1>
        </Link>
      </section>

      <nav className="grid grid-cols-1 sm:grid-cols-2">
        {sections.map((section, index) => (
          <Link
            key={section.href}
            href={section.href}
            className={`group flex cursor-none flex-col justify-between gap-10 border-ink p-4 transition-colors duration-150 hover:bg-accent hover:text-paper ${
              index === 0 ? 'border-b-2 sm:border-b-0 sm:border-r-2' : ''
            }`}
          >
            <span className="font-mono text-xs uppercase">[0{index + 1}]</span>
            <div className="flex items-end justify-between">
              <span
                className={`font-wide inline-block text-3xl font-black uppercase tracking-tight transition-transform duration-100 group-hover:text-paper sm:text-[4vw] xl:text-6xl ${
                  colorChange ? '-skew-x-12 text-accent' : ''
                }`}
              >
                {section.label}
              </span>
            </div>
          </Link>
        ))}
      </nav>
    </main>
  );
}
