import Link from 'next/link';

export default function Developer() {
  return (
    <main className="mx-auto flex h-screen flex-col items-center justify-evenly uppercase text-black">
      <Link href={'/'}>
        <h1 className="text-center text-5xl font-black tracking-wide sm:text-9xl">Nils Müller</h1>
      </Link>
      <div className="flex flex-col space-x-20 text-3xl font-bold tracking-wide sm:flex-row sm:text-4xl">
        <Link className="md:hover:blur-sm" href={'/dev'}>
          Developer
        </Link>
        <Link className="md:hover:blur-sm" href={'/photo'}>
          Photographer
        </Link>
      </div>
    </main>
  );
}
