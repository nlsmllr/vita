import Image from 'next/image';
import Link from 'next/link';

import { ContactButton } from '../Components/ComponentsPhoto/ContactButton';
import CustomCursor from '../Components/ComponentsPhoto/CustomCursor';
import { imageFilenames } from '../Components/Constants/photos';

export const dynamic = 'force-dynamic';

export default function Photo() {
  return (
    <div className="relative h-auto w-screen cursor-none bg-white pb-10 text-black">
      <CustomCursor />
      <ContactButton link={'contact'} visible={false} />
      <div className="flex h-[75vh] w-screen items-end justify-center">
        <div className="text-md z-10 font-light uppercase tracking-widest text-zinc-950">scroll down</div>
      </div>
      <div
        className="fixed left-0 top-0 z-10 h-[74vh] w-full"
        style={{
          backgroundImage: 'linear-gradient(to bottom, white, white 74%, transparent 100%)',
        }}
      ></div>
      <section className="fixed inset-0 z-10 flex h-screen items-center justify-center">
        <Link className="mx-auto flex cursor-none flex-col items-center justify-center uppercase text-black" href={'/'}>
          <h1 className="-mt-10 text-center text-5xl font-black tracking-wide sm:text-9xl">Nils Müller</h1>
        </Link>
      </section>
      <section className="relative z-20 mt-[700px] cursor-none pb-[0px] sm:mx-40">
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
                aria-label={`Photography work ${index + 1}`}
                tabIndex={0}
              />
              <p className="absolute -right-8 top-0 text-xl text-[#ff0080] contrast-more:text-[#883860]">
                {String(index + 1).padStart(2, '0')}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
