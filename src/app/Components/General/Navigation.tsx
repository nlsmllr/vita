// Navigation.tsx
import Link from 'next/link';
import React from 'react';

const Navigation = ({ invert = false }: { invert?: boolean }) => {
  return (
    <div className={`${invert ? 'invert' : ''}`}>
      <Link href="/">
        <h1 className={`text-6xl font-thin tracking-wide ${invert ? 'invert' : ''}`}>Nils Müller</h1>
      </Link>
      <p className={`text-xs font-thin ${invert ? 'invert' : ''}`}>Dev & Photo</p>
      <div className={`mt-16 flex w-fit flex-col gap-3 text-xs font-light ${invert ? 'invert' : ''}`}>
        <Link className="h-7" href="/dev">
          dev
        </Link>
        <Link className="h-7" href="/photo">
          Photo
        </Link>
        <Link className="h-7" href="/contact">
          contact
        </Link>
        <Link className="h-7" href="/imprint">
          imprint
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
