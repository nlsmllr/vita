'use client';

import React, { useState } from 'react';

import { Imprint } from '../Components/Imprint';
import { Window } from '../Components/Window';

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
    <div className="relative h-screen">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center font-bold text-zinc-800">
        <h1 className="text-5xl">Oops!</h1>
        {!isVisible && (
          <button onClick={handleOpen} className="mt-5 rounded-lg bg-zinc-200 p-3 px-5 text-xl hover:shadow-lg">
            Hey, come back here!
          </button>
        )}
      </div>
      {isVisible && (
        <div className="absolute z-20 flex h-full w-full items-start justify-center">
          <Window onClose={handleClose} onMinimize={handleMinimize} isMinimized={isMinimized}>
            <Imprint />
          </Window>
        </div>
      )}
    </div>
  );
}
