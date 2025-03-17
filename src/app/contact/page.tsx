import Link from 'next/link';

import { ContactButton } from '../ComponentsPhoto/ContactButton';

export default function Photographer() {
  return (
    <main className="mx-auto mt-72 flex h-auto w-screen flex-col items-center justify-center uppercase text-black sm:mt-0 sm:h-screen sm:justify-evenly">
      <ContactButton link={''} visible={false} />
      <Link className=" " href={'/'}>
        <h1 className="text-center text-5xl font-black tracking-wide sm:text-9xl">Nils Müller</h1>
      </Link>
      <div className="my-7 flex flex-col text-center text-3xl font-bold tracking-wide sm:my-0 sm:flex-row sm:space-x-[30px] sm:text-4xl">
        <Link href="mailto:info@nils-mueller.com" className="link md:duration-300 md:hover:blur-sm">
          info@nils-mueller.com
        </Link>
        <Link href="tel:+4915115776494" className="link md:duration-300 md:hover:blur-sm">
          +49 151 15776494
        </Link>
        <Link href="/vitae" className="link md:duration-300 md:hover:blur-sm">
          Vitae
        </Link>
      </div>
    </main>
  );
}
