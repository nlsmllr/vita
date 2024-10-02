import Link from 'next/link';

export default function Photographer() {
  return (
    <main className="mx-auto flex h-screen flex-col items-center justify-evenly uppercase text-black">
      <Link href={'/'}>
        <h1 className="text-center text-5xl font-black tracking-wide sm:text-9xl">Nils Müller</h1>
      </Link>
      <div className="flex flex-col space-x-20 text-4xl font-bold tracking-wide sm:flex-row">
        <Link className="md:hover:blur-sm" href={'/'}>
          Coming soon 💦
        </Link>
      </div>
    </main>
  );
}
