'use client';

import Link from 'next/link';

import { ContactButton } from './ComponentsPhoto/ContactButton';
import CustomCursor from './ComponentsPhoto/CustomCursor';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#efe3ca] px-5 py-10 text-[#2e2e2e] sm:px-10 sm:py-14">
      <CustomCursor />
      <ContactButton link="contact" visible={true} />

      <header className="geometric-header">
        <Link className="cursor-none" href="/" aria-label="Nils Müller home">
          @nils.muller
        </Link>
        <div className="geometric-header__icons" aria-label="Favorites and bookmarks">
          <span aria-hidden="true">♡</span>
          <span aria-hidden="true">♧</span>
        </div>
      </header>

      <section className="geometric-layout">
        <div className="geometric-band geometric-band--beige">
          <p>Vitae</p>
          <span>ABOUT / 04</span>
        </div>
        <nav aria-label="Portfolio sections" className="geometric-band geometric-band--lavender">
          <Link className="geometric-band__link cursor-none" href="/dev">
            Developer
          </Link>
          <span>HEX #92A9E1</span>
          <Link className="geometric-band__link cursor-none" href="/photo">
            Photographer
          </Link>
        </nav>
        <div className="geometric-band geometric-band--graphite">
          <Link className="geometric-band__link cursor-none" href="/minis">
            Minis
          </Link>
          <span>SELECTED WORK / 03</span>
        </div>
        <div className="geometric-mark" aria-hidden="true">
          ↗
        </div>
      </section>

      <footer className="geometric-footer">
        <span>Calm / Curious / Modern / Human</span>
        <span>Scroll to explore</span>
      </footer>
    </main>
  );
}
