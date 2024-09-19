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
    <div className="relative flex flex-col items-center justify-center">
      <div className="absolute z-10 text-center font-bold text-zinc-800">
        <h1 className="text-5xl">Hello World!</h1>
        {!isVisible && (
          <button onClick={handleOpen} className="mt-5 rounded-lg bg-zinc-200 p-3 px-5 text-xl hover:shadow-lg">
            Wanna bring me back?
          </button>
        )}
      </div>
      {isVisible && (
        <div className="z-20">
          <Window onClose={handleClose} onMinimize={handleMinimize} isMinimized={isMinimized}>
            <Imprint />
          </Window>
        </div>
      )}
    </div>
  );
}
