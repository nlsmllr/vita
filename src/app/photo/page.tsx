import Image from 'next/image';

import { imageFilenames } from '../Components/Constants/photos';

export const dynamic = 'force-dynamic';

export default function Photo() {
  return (
    <div className="relative h-auto w-full cursor-none">
      <section className="relative z-20 mt-[80px] cursor-none pb-[0px] sm:mx-40">
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
