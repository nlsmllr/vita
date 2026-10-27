'use client';

import React, { useState } from 'react';

import { Terminal } from '../ComponentsDev/Terminal';
import { Window } from '../ComponentsDev/Window';

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
  };
  const handleOpen = () => {
    setIsVisible(true);
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="relative h-[85vh] cursor-auto overflow-hidden scroll-auto bg-paper text-ink sm:h-screen">
      <div className="bg-grid absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        <h1 className="font-wide text-[clamp(3rem,14vw,12rem)] font-black uppercase leading-none tracking-[-0.045em]">
          Oops.
        </h1>
        {!isVisible && (
          <>
            <button
              onClick={handleOpen}
              className="mt-8 border-2 border-ink bg-paper px-6 py-3 font-mono text-sm uppercase shadow-hard-sm transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-accent hover:text-paper hover:shadow-none"
            >
              Hey, come back here!
            </button>
          </>
        )}
      </div>
      {isVisible && (
        <div className="absolute z-20 flex h-full w-full items-start justify-center">
          <Window onClose={handleClose} onMinimize={handleMinimize} isMinimized={isMinimized}>
            <Terminal />
          </Window>
        </div>
      )}
    </div>
  );
}
