import Link from 'next/link';

import { ContactButton } from '../ComponentsPhoto/ContactButton';
import CustomCursor from '../ComponentsPhoto/CustomCursor';

export default function Photographer() {
  return (
    <main className="flex min-h-[100svh] cursor-none flex-col bg-paper text-ink">
      <CustomCursor />
      <ContactButton link={'contact'} visible={true} />
      <section className="bg-grid flex flex-1 flex-col justify-end border-b-2 border-ink px-4 pb-4 pt-20">
        <p className="mb-6 font-mono text-xs uppercase">[ Photography ]</p>
        <Link className="cursor-none" href={'/'}>
          <h1 className="font-wide text-[clamp(3.5rem,17.5vw,19rem)] font-black uppercase leading-[0.9] tracking-[-0.045em]">
            Soon.
          </h1>
        </Link>
      </section>
      <Link
        className="cursor-none p-4 font-mono text-sm uppercase transition-colors hover:bg-accent hover:text-paper"
        href={'/'}
      >
        Back home
      </Link>
    </main>
  );
}
