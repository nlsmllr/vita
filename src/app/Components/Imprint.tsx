import Link from 'next/link';

export const Imprint = () => {
  return (
    <div className="text-s h-full bg-zinc-950 p-6 font-mono leading-5 text-white">
      <nav className="items-center pb-12 text-center font-mono md:flex md:w-[900px] md:flex-row md:justify-between">
        <h1 className="font-thin">
          <Link href="/" className="link">
            NILS MÜLLER(1)
          </Link>
        </h1>
        <h1 className="font-thin">IMPRINT</h1>
        <h1 className="font-thin">
          <Link href="/" className="link">
            NILS MÜLLER(1)
          </Link>
        </h1>
      </nav>
      <main className="font-mono md:w-[900px]">
        <section>
          <h2 className="bullet_point font-bold tracking-wider">CONTACT</h2>
          <p className="ml-[50px]">
            Name: Nils Müller
            <br />
            Address: Pastorenstraße 18, 20459 Hamburg
            <br />
            E-mail:{' '}
            <a href="mailto:info@nils-mueller.com" className="link">
              info@nils-mueller.com
            </a>
            <br />
            Mobile:{' '}
            <a href="tel:+4915115776494" className="link">
              +49 151 15776494
            </a>
          </p>
        </section>
      </main>
      <footer>
        <h2 className="bullet_point font-bold tracking-wider">
          <Link href="/" className="link">
            BACK
          </Link>
        </h2>
      </footer>
    </div>
  );
};
