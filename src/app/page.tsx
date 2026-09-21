'use client';

import Link from 'next/link';

import { ContactButton } from './ComponentsPhoto/ContactButton';
import CustomCursor from './ComponentsPhoto/CustomCursor';

const destinations = [
  { label: 'Developer', href: '/dev', className: 'portfolio-card--lavender' },
  { label: 'Photographer', href: '/photo', className: 'portfolio-card--lavender' },
  { label: 'Minis', href: '/minis', className: 'portfolio-card--graphite' },
  { label: 'Vitae', href: '/vitae', className: 'portfolio-card--graphite' },
];

const tags = ['Calm', 'Curious', 'Modern', 'Human'];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#efe3ca] px-5 py-10 text-[#2e2e2e] sm:px-10 sm:py-14">
      <CustomCursor />
      <ContactButton link="contact" visible={true} />

      <header className="mx-auto flex max-w-4xl items-center justify-between text-sm tracking-[-0.03em] sm:text-base">
        <Link className="cursor-none font-medium" href="/" aria-label="Nils Müller home">
          @nils.muller
        </Link>
        <div className="flex items-center gap-4 text-2xl leading-none" aria-label="Favorites and bookmarks">
          <span aria-hidden="true">♡</span>
          <span aria-hidden="true">♧</span>
        </div>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-4xl flex-col justify-center gap-7 py-10 sm:gap-9">
        <div className="portfolio-hero portfolio-hero--lavender">
          <span className="portfolio-arrow" aria-hidden="true">
            ↗
          </span>
          <h1>
            Developer <span className="portfolio-slash">/</span> Photographer
          </h1>
          <span className="portfolio-code">HEX #92A9E1</span>
        </div>

        <div className="portfolio-hero portfolio-hero--graphite">
          <span className="portfolio-arrow portfolio-arrow--left" aria-hidden="true">
            ↙
          </span>
          <h2>
            Minis <span className="portfolio-slash">/</span> Vitae
          </h2>
          <span className="portfolio-code">SELECTED WORK</span>
        </div>

        <nav aria-label="Portfolio sections" className="portfolio-links">
          {destinations.map((destination, index) => (
            <Link key={destination.label} href={destination.href} className="portfolio-link cursor-none">
              {destination.label}
              <span>0{index + 1}</span>
            </Link>
          ))}
        </nav>

        <div className="portfolio-tags" aria-label="Design qualities">
          {tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <p className="portfolio-best-for">
          <strong>Best for:</strong> <span>●</span> people with ideas <span>●</span> curious collaborators{' '}
          <span>●</span> good work
        </p>
      </section>
    </main>
  );
}
