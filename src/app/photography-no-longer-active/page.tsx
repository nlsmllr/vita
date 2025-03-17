import Link from 'next/link';

import { ContactButton } from '../ComponentsPhoto/ContactButton';

export default function Photographer() {
  return (
    <main className="mx-auto mt-72 flex h-auto flex-col items-center justify-center uppercase text-black sm:mt-0 sm:h-screen sm:justify-evenly">
      <ContactButton link={'contact'} visible={true} />
      <Link className=" " href={'/'}>
        <h1 className="text-center text-5xl font-black tracking-wide sm:text-9xl">Nils Müller</h1>
      </Link>
      <div className="my-7 flex flex-col space-x-[70px] text-3xl font-bold tracking-wide sm:my-0 sm:flex-row sm:text-4xl">
        <Link className="md:blur-sm md:transition-all md:duration-300 md:hover:blur-0" href={'/'}>
          Coming soon 💦
        </Link>
      </div>
    </main>
  );
}
