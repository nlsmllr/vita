import Image from 'next/image';
import Link from 'next/link';

import { ContactButton } from '../ComponentsPhoto/ContactButton';
import CustomCursor from '../ComponentsPhoto/CustomCursor';
import { imageFilenames } from '../Constants/photos';

export const dynamic = 'force-dynamic';

export default function Photo() {
  return (
    <div className="relative h-auto cursor-none bg-white text-black">
      <CustomCursor />
      <ContactButton link={'contact'} />
      <section className="fixed inset-0 z-10 flex h-screen items-center justify-center">
        <Link
          className="mx-auto flex h-full cursor-none flex-col items-center justify-center uppercase text-black"
          href={'/'}
        >
          <h1 className="-mt-10 text-center text-5xl font-black tracking-wide sm:text-9xl">Nils Müller</h1>
        </Link>
      </section>

      <section className="relative z-20 mt-[1000px] cursor-none sm:mx-40">
        <div className="grid grid-cols-1 gap-4 px-12 sm:p-4 md:grid-cols-4">
          {imageFilenames.map((filename, index) => (
            <div
              key={index}
              className="relative col-span-2"
              style={{
                marginTop:
                  index % 2 === 0 ? `max(20px, ${Math.random() * 200}px)` : `max(50px, ${Math.random() * 200 + 50}px)`,
                marginLeft: '-10%',
                zIndex: imageFilenames.length - index,
              }}
            >
              <Image
                src={`/images/${filename}`}
                alt={`Image ${index + 1}`}
                width={2500}
                height={2500}
                className="w-full object-cover transition md:duration-200"
              />
              <span className="absolute -right-8 top-0 text-xl text-red-500">{String(index + 1).padStart(2, '0')}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
