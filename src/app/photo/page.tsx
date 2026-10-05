'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { ContactButton } from '../ComponentsPhoto/ContactButton';
import CustomCursor from '../ComponentsPhoto/CustomCursor';
import { imageFilenames } from '../Constants/photos';

export default function Photo() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // State to hold our randomized margins so they only calculate ONCE
  const [randomMargins, setRandomMargins] = useState<string[]>([]);

  // 1. Generate random margins on mount
  useEffect(() => {
    const generatedMargins = imageFilenames.map((_, index) =>
      index % 2 === 0 ? `max(20px, ${Math.random() * 200}px)` : `max(50px, ${Math.random() * 200 + 50}px)`,
    );
    setRandomMargins(generatedMargins);
  }, []);

  // 2. Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxImage) return;

      const currentIndex = imageFilenames.indexOf(lightboxImage);
      if (currentIndex === -1) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        setLightboxImage(null);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % imageFilenames.length;
        setLightboxImage(imageFilenames[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + imageFilenames.length) % imageFilenames.length;
        setLightboxImage(imageFilenames[prevIndex]);
      }
    };

    if (lightboxImage) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxImage]);

  // 3. Handle mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || !lightboxImage) return;

    const touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = touchStartX - touchEndX;
    const currentIndex = imageFilenames.indexOf(lightboxImage);

    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        const nextIndex = (currentIndex + 1) % imageFilenames.length;
        setLightboxImage(imageFilenames[nextIndex]);
      } else {
        const prevIndex = (currentIndex - 1 + imageFilenames.length) % imageFilenames.length;
        setLightboxImage(imageFilenames[prevIndex]);
      }
    }

    setTouchStartX(null);
  };

  return (
    <div className="relative h-auto w-screen cursor-none bg-white pb-10 text-black">
      <CustomCursor />

      <ContactButton link={'contact'} visible={false} />

      {/* --- Lightbox Overlay --- */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] flex touch-none items-center justify-center bg-black/85 p-4 sm:p-10"
          onClick={() => setLightboxImage(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Added flex centering here so the images sit perfectly in the middle */}
          <div className="relative flex h-full w-full cursor-none items-center justify-center">
            {imageFilenames.map(filename => {
              const isActive = lightboxImage === filename;
              return (
                <div
                  key={filename}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
                    isActive ? 'z-10 opacity-100' : 'pointer-events-none z-0 opacity-0'
                  }`}
                  // We do NOT stop propagation here, so clicking the empty space bubbles up to close it!
                >
                  <Image
                    src={`/images/${filename}`}
                    alt="Lightbox View"
                    // Switched back to fixed sizes so the image's invisible hit-box hugs the photo
                    width={2500}
                    height={2500}
                    priority={isActive}
                    className="max-h-full max-w-full select-none object-contain"
                    draggable={false}
                    // Only clicking the actual photo pixels prevents it from closing
                    onClick={e => e.stopPropagation()}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
      {/* ------------------------ */}

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
              className="relative col-span-2 cursor-none"
              onClick={() => setLightboxImage(filename)}
              style={{
                marginTop: randomMargins[index] || (index % 2 === 0 ? '20px' : '50px'),
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
                onKeyDown={e => {
                  if (e.key === 'Enter') setLightboxImage(filename);
                }}
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
