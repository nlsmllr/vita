'use client';

import ButtonHigh from './Components/ButtonHigh';
// import ButtonLow from './Components/ButtonLow';
import FrameHigh from './Components/FrameHigh';
import { ContactButton } from './ComponentsPhoto/ContactButton';

export default function Home() {
  return (
    <main className="">
      <div className="flex h-screen items-center justify-center bg-primaryBackground">
        <ContactButton link={'contact'} visible={true} />
        <FrameHigh className="mx-auto flex h-[80vh] w-[60vw] flex-col items-center justify-evenly uppercase text-black">
          <ButtonHigh className="h-[2.5em] w-[35vw] sm:h-[13vh] sm:w-[25vw]">
            <h1 className="text-center text-xl font-light uppercase tracking-wide sm:text-2xl md:text-3xl lg:text-5xl">
              Nils Müller
            </h1>
          </ButtonHigh>
          <div className="flex flex-col gap-4 md:flex-row md:gap-4 lg:gap-16">
            <ButtonHigh href={'/dev'} className="h-[2.5em]">
              <h1 className="w-48 text-center">Developer</h1>
            </ButtonHigh>
            <ButtonHigh href={'/photo'} className="h-[2.5em]">
              <h1 className="w-48 text-center">Photographer</h1>
            </ButtonHigh>
          </div>
        </FrameHigh>
      </div>
    </main>
  );
}
