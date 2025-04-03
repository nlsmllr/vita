'use client';

import Image from 'next/image';
import Link from 'next/link';

// import { ContactButton } from './ComponentsPhoto/ContactButton';
import CustomCursor from './ComponentsPhoto/CustomCursor';

export default function Home() {
  return (
    <main className="justify-center bg-[#d9b783]">
      <div className="mx-auto flex h-screen scale-95 cursor-none flex-col items-center justify-evenly">
        <CustomCursor />
        {/* <ContactButton link={'contact'} visible={true} /> */}
        <div className="-mb-16 -ml-40">
          <h1 className="tracking-wid mb-3 text-5xl font-bold uppercase text-[#674529]">Nils Müller</h1>
          <h2 className="tracking-wid text-2xl font-bold uppercase text-[#674529]">dev & photographer</h2>
        </div>
        <div className="relative">
          <Image
            src={'/Nils_actionFigure.png'}
            alt="action figure of Nils Müller. There is a laptop, two degreees and a camera on his left side."
            width={500}
            height={500}
          />
          <Link href={'/dev'} className="group cursor-none">
            <Image
              src={'/Laptop.png'}
              alt="laptop"
              width={179}
              height={179}
              className="absolute right-[280px] top-[79px] transition-all duration-300 hover:scale-[115%] hover:drop-shadow-2xl"
            />
            <span className="absolute right-[550px] top-[122px] text-3xl font-bold uppercase tracking-wide text-[#674529] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Dev
            </span>
          </Link>
          <Link href={'/vitae'} className="group cursor-none">
            <Image
              src={'/degrees.png'}
              alt="laptop"
              width={179}
              height={179}
              className="absolute right-[280px] top-[240px] transition-all duration-300 hover:scale-[115%] hover:drop-shadow-2xl"
            />
            <span className="absolute right-[550px] top-[300px] text-3xl font-bold uppercase tracking-wide text-[#674529] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Vitae
            </span>
          </Link>
          <Link href={'/photo'} className="group cursor-none">
            <Image
              src={'/camera.png'}
              alt="laptop"
              width={142}
              height={179}
              className="absolute right-[308px] top-[426px] transition-all duration-300 hover:scale-[115%] hover:drop-shadow-2xl"
            />
            <span className="absolute right-[550px] top-[470px] text-3xl font-bold uppercase tracking-wide text-[#674529] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Photo
            </span>
          </Link>
          <Link
            href={'/contact'}
            aria-label="Contact Link"
            className="absolute right-[300px] top-[590px] cursor-none text-3xl font-bold uppercase tracking-wide text-[#674529] transition-all duration-300 hover:scale-[115%] hover:drop-shadow-2xl"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
