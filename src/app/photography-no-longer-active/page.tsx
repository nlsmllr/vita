import Link from 'next/link';

import { ContactButton } from '../ComponentsPhoto/ContactButton';
import CustomCursor from '../ComponentsPhoto/CustomCursor';

export default function Photographer() {
  return (
    <main className="flex min-h-screen cursor-none flex-col items-center justify-center gap-14 px-4">
      <CustomCursor />
      <ContactButton link={'contact'} visible={true} />
      <Link className="cursor-none" href={'/'}>
        <h1 className="display text-center">Nils Müller</h1>
      </Link>
      <span className="btn btn-disabled" aria-disabled="true">
        Coming soon
      </span>
    </main>
  );
}
