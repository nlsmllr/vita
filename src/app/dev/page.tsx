'use client';

import React, { useState } from 'react';

import { Terminal } from '../Components/ComponentsDev/Terminal';
import { Window } from '../Components/ComponentsDev/Window';

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="relative mt-[150px] h-[70vh] cursor-none overflow-hidden scroll-auto normal-case">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center font-bold text-zinc-800"></div>
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
