import Link from 'next/link';

import { ContactButton } from '../ComponentsPhoto/ContactButton';
import CustomCursor from '../ComponentsPhoto/CustomCursor';

const channels = [
  { label: 'E-Mail', value: 'info@nils-mueller.com', href: 'mailto:info@nils-mueller.com' },
  { label: 'Phone', value: '+49 151 15776494', href: 'tel:+4915115776494' },
  { label: 'LinkedIn', value: 'Nils Müller', href: 'https://www.linkedin.com/in/nils-m%C3%BCller-5ab765220/' },
  { label: 'GitHub', value: '@nlsmllr', href: 'https://github.com/nlsmllr/' },
  { label: 'Vitae', value: 'Read my CV', href: '/vitae' },
];

export default function Contact() {
  return (
    <main className="flex min-h-[100svh] w-screen cursor-none flex-col bg-paper text-ink">
      <CustomCursor />
      <ContactButton link={''} visible={false} />

      <section className="bg-grid border-b-2 border-ink px-4 pb-4 pt-20">
        <p className="mb-6 font-mono text-xs uppercase">[ Contact ]</p>
        <h1 className="font-wide text-[clamp(3.5rem,17.5vw,19rem)] font-black uppercase leading-[0.9] tracking-[-0.045em]">
          Say hi.
        </h1>
      </section>

      <ul>
        {channels.map((channel, index) => (
          <li key={channel.label} className="border-b-2 border-ink">
            <Link
              href={channel.href}
              className="grid cursor-none grid-cols-1 items-baseline gap-x-4 gap-y-2 p-4 transition-colors duration-150 hover:bg-ink hover:text-paper sm:grid-cols-[10rem_1fr]"
            >
              <span className="font-mono text-xs uppercase">
                [0{index + 1}] {channel.label}
              </span>
              <span className="break-all text-2xl font-black uppercase tracking-tight sm:text-5xl">
                {channel.value}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <footer className="mt-auto flex justify-between p-4 font-mono text-xs uppercase">
        <Link href="/Imprint" className="link cursor-none">
          Imprint
        </Link>
        <span>Hamburg, DE</span>
      </footer>
    </main>
  );
}
