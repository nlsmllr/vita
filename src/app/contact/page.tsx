import Link from 'next/link';

import CustomCursor from '../ComponentsPhoto/CustomCursor';

export default function Photographer() {
  return (
    <main className="mx-auto mt-72 flex h-auto cursor-none flex-col items-center justify-center uppercase text-black sm:mt-0 sm:h-screen sm:justify-evenly">
      <CustomCursor />
      <Link href={'/'} className="cursor-none">
        <div className="fixed right-5 top-5 h-10 w-10 animate-pulse rounded-full bg-red-500 md:h-5 md:w-5" />
      </Link>
      <Link className="cursor-none" href={'/'}>
        <h1 className="text-center text-5xl font-black tracking-wide sm:text-9xl">Nils Müller</h1>
      </Link>
      <div className="my-7 flex cursor-none flex-col text-center text-3xl font-bold tracking-wide sm:my-0 sm:flex-row sm:space-x-[30px] sm:text-4xl">
        <Link href="mailto:info@nils-mueller.com" className="link cursor-none">
          info@nils-mueller.com
        </Link>
        <Link href="tel:+4915115776494" className="link cursor-none">
          +49 151 15776494
        </Link>
      </div>
    </main>
  );
}
