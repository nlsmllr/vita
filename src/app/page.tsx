'use client';

import React, { useState } from 'react';

import { Content } from './Components/Content';
import { Window } from './Components/Window';

export default function Home() {
  const [isVisible, setIsVisible] = useState(true); // State to manage the visibility of the Window

  const handleClose = () => {
    setIsVisible(false); // Function to handle closing the Window
  };
  const handleOpen = () => {
    setIsVisible(true); // Function to handle opening the Window
  };

  return (
    <div className="relative flex h-screen flex-col items-center justify-center">
      <div className="absolute z-10 text-center font-bold text-zinc-700">
        <h1 className="text-5xl">Hello World!</h1>
        <button onClick={handleOpen} className="mt-5 rounded-xl bg-green-200 p-3 text-xl hover:shadow-lg">
          Wanna bring me back?
        </button>
      </div>
      {isVisible && (
        <div className="z-20">
          <Window onClose={handleClose}>
            <Content /> {/* Render the Content component inside the Window */}
          </Window>
        </div>
      )}
    </div>
  );
}
