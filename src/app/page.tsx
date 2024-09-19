'use client';

import React, { useState } from 'react';

import { Content } from './Components/Content';
import { Window } from './Components/Window';

export default function Home() {
  const [isVisible, setIsVisible] = useState(true); // State to manage the visibility of the Window
  const [isMinimized, setIsMinimized] = useState(false); // State to manage whether the Window is minimized

  const handleClose = () => {
    setIsVisible(false); // Function to handle closing the Window
  };
  const handleOpen = () => {
    setIsVisible(true); // Function to handle closing the Window
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized); // Toggle the minimized state
  };

  return (
    <div className="relative flex h-screen flex-col items-center justify-center">
      <div className="absolute z-10 text-center font-bold text-zinc-800">
        <h1 className="text-5xl">Hello World!</h1>
        {!isVisible && (
          <button onClick={handleOpen} className="mt-5 rounded-lg bg-green-300 p-3 px-5 text-xl hover:shadow-lg">
            Wanna bring me back?
          </button>
        )}
      </div>
      {isVisible && (
        <div className="z-20">
          <Window
            onClose={handleClose}
            onMinimize={handleMinimize}
            isMinimized={isMinimized} // Pass the minimized state to Window
          >
            <Content />
          </Window>
        </div>
      )}
    </div>
  );
}
