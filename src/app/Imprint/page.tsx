import Link from 'next/link';

export default function Imprint() {
  return (
    <main className="flex min-h-screen cursor-auto items-center justify-center px-4 py-12">
      <section className="clay-stack w-full max-w-lg p-8 sm:p-10">
        <h1 className="text-4xl font-semibold tracking-tight">Imprint</h1>
        <address className="mt-6 flex flex-col gap-1.5 text-lg not-italic text-zinc-700">
          <span>Nils Müller</span>
          <span>Pastorenstraße 18, 20459 Hamburg</span>
          <a href="mailto:info@nils-mueller.com" className="link-soft self-start">
            info@nils-mueller.com
          </a>
          <a href="tel:+4915115776494" className="link-soft self-start">
            +49 151 15776494
          </a>
        </address>
        <Link href="/" className="btn btn-sm mt-8">
          Back
        </Link>
      </section>
    </main>
  );
}
