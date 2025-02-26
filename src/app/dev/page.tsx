'use client';

import React, { useState } from 'react';

import { Terminal } from '../ComponentsDev/Terminal';
import { Window } from '../ComponentsDev/Window';

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleClose = () => setIsVisible(false);
  const handleOpen = () => setIsVisible(true);
  const handleMinimize = () => setIsMinimized(!isMinimized);

  return (
    <div className="relative h-screen w-screen cursor-auto overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-right-top bg-no-repeat"
        style={{ backgroundImage: "url('/images/Finland_04.jpg')" }}
      ></div>

      {!isVisible && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center font-bold text-zinc-800">
          <h1 className="text-5xl">Oops!</h1>
          <button onClick={handleOpen} className="mt-5 rounded-lg bg-zinc-200 p-3 px-5 text-xl hover:shadow-lg">
            Hey, come back here!
          </button>
        </div>
      )}

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
