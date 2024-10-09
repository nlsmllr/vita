'use client';

// import fs from 'fs';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { imageFilenames } from '../Constants/photos';

export default function Photo() {
  // const imageFolder = './images/';

  // fs.readdir(imageFolder, (err, files) => {
  //   files.forEach(file => {
  //     console.log(file);
  //   });
  // });

  const cursorRef = useRef<HTMLDivElement>(null);
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!isCursorVisible) {
        setIsCursorVisible(true);
      }

      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX - 20}px`;
        cursorRef.current.style.top = `${event.clientY - 20}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isCursorVisible]);

  return (
    <div className="relative h-auto bg-white text-black">
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed z-50 h-10 w-10 rounded-full mix-blend-difference transition-opacity ${
          isCursorVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'white',
          mixBlendMode: 'difference',
        }}
      />

      <section className="fixed inset-0 z-10 flex h-screen items-center justify-center">
        <Link
          className="mx-auto flex h-full cursor-none flex-col items-center justify-center uppercase text-black"
          href={'/'}
        >
          <h1 className="text-center text-5xl font-black tracking-wide sm:text-9xl">Nils Müller</h1>
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
                width={500}
                height={500}
                className="w-full object-cover"
              />
              <span className="absolute -right-8 top-0 text-xl text-red-500">{String(index + 1).padStart(2, '0')}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
