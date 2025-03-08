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
    <div className="relative min-h-screen w-screen cursor-auto overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {!isVisible && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
          <button
            onClick={handleOpen}
            className="rounded-[51px] bg-[#e8eaed] px-8 py-4 text-gray-600 shadow-[5px_5px_13px_#c7cdd4,-5px_-5px_13px_#ffffff] transition-all duration-300 hover:shadow-[inset_5px_5px_13px_#c7cdd4,inset_-5px_-5px_13px_#ffffff]"
          >
            Open Window
          </button>
        </div>
      )}

      {isVisible && (
        <div className="absolute z-20 flex h-full w-full items-center justify-center">
          <Window onClose={handleClose} onMinimize={handleMinimize} isMinimized={isMinimized}>
            <Terminal />
          </Window>
        </div>
      )}
    </div>
  );
}
