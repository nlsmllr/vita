import Link from 'next/link';

export default function Photographer() {
  return (
    <main className="mx-auto flex h-full w-full cursor-none flex-col items-center justify-center uppercase text-black invert">
      <div className="flex cursor-none flex-col text-center text-3xl font-extralight tracking-wide sm:flex-row sm:space-x-[30px] sm:text-4xl">
        <Link href="mailto:info@nils-mueller.com" className="link cursor-none md:duration-300 md:hover:blur-sm">
          info@nils-mueller.com
        </Link>
        <Link href="tel:+4915115776494" className="link cursor-none md:duration-300 md:hover:blur-sm">
          +49 151 15776494
        </Link>
        <Link href="/vitae" className="link cursor-none md:duration-300 md:hover:blur-sm">
          Vitae
        </Link>
      </div>
    </main>
  );
}
