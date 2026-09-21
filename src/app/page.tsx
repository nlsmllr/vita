'use client';

import Link from 'next/link';

import { ContactButton } from './ComponentsPhoto/ContactButton';
import CustomCursor from './ComponentsPhoto/CustomCursor';

const destinations = [
  { label: 'Developer', href: '/dev', className: 'portfolio-card--paper' },
  { label: 'Photographer', href: '/photo', className: 'portfolio-card--stone' },
  { label: 'Minis', href: '/minis', className: 'portfolio-card--coral' },
  { label: 'Vitae', href: '/vitae', className: 'portfolio-card--black' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f6f2] px-5 py-10 text-black sm:px-10 sm:py-14">
      <CustomCursor />
      <ContactButton link="contact" visible={true} />

      <header className="mx-auto flex max-w-7xl items-center justify-between text-[11px] font-bold uppercase tracking-[0.22em] sm:text-xs">
        <Link className="cursor-none" href="/" aria-label="Nils Müller home">
          N/M
        </Link>
        <span>Portfolio / 2024</span>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col items-center justify-center gap-12 sm:min-h-[calc(100vh-9rem)] sm:gap-16">
        <div className="text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-black/50">Selected work</p>
          <h1 className="text-5xl font-black tracking-[-0.07em] sm:text-8xl md:text-9xl">Nils Müller</h1>
        </div>

        <nav aria-label="Portfolio sections" className="portfolio-cards w-full max-w-2xl">
          {destinations.map((destination, index) => (
            <Link
              key={destination.label}
              href={destination.href}
              className={`portfolio-card ${destination.className} portfolio-card--${index + 1} cursor-none`}
            >
              <span className="text-3xl font-medium tracking-[-0.06em] sm:text-5xl">{destination.label}</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] opacity-70">
                0{index + 1} / Explore
              </span>
            </Link>
          ))}
        </nav>

        <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-black/60">
          Ideas, images, and interfaces
        </p>
      </section>
    </main>
  );
}
