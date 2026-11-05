import Link from 'next/link';

import { ContactButton } from '../ComponentsPhoto/ContactButton';
import CustomCursor from '../ComponentsPhoto/CustomCursor';

export default function Contact() {
  return (
    <main className="flex min-h-screen cursor-none flex-col items-center justify-center gap-14 px-4">
      <CustomCursor />
      <ContactButton link={''} visible={false} />
      <Link className="cursor-none" href={'/'}>
        <h1 className="display text-center">Nils Müller</h1>
      </Link>
      <div className="flex flex-col items-center gap-5 sm:flex-row">
        <Link href="mailto:info@nils-mueller.com" className="btn btn-primary cursor-none">
          info@nils-mueller.com
        </Link>
        <Link href="tel:+4915115776494" className="btn cursor-none">
          +49 151 15776494
        </Link>
        <Link href="/vitae" className="btn cursor-none">
          Vitae
        </Link>
      </div>
    </main>
  );
}
