import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface WindowProps {
  children: React.ReactNode;
  onClose: () => void;
  onMinimize: () => void;
  isMinimized?: boolean;
}

export const Window = ({ children, onMinimize, isMinimized = false }: WindowProps) => {
  const [dimensions, setDimensions] = useState('');

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions(`${window.innerWidth}x${window.innerHeight}`);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const windowTitle = `nils.mueller — nils.mueller@Nils-MBP- - - -zsh — ${dimensions}`;

  return (
    <div
      className={`transform cursor-none transition-all duration-300 ease-in-out ${
        isMinimized ? 'translate-y-[75vh] scale-50' : 'translate-y-0 scale-100'
      } mx-auto w-full max-w-4xl p-5`}
      style={{
        height: isMinimized ? '25vh' : '70vh',
      }}
      onClick={isMinimized ? onMinimize : undefined}
    >
      <div className="cursor-none overflow-hidden rounded-md border border-gray-300 bg-zinc-950 bg-opacity-50 shadow-xl sm:h-full">
        <div className="topbar sticky top-0 flex cursor-none items-center overflow-auto rounded-t-md border-b bg-zinc-800 bg-opacity-50 px-4 py-2">
          <div className="flex cursor-none space-x-2 pr-3 sm:pr-0">
            <button
              className="h-3 w-3 cursor-none rounded-full border border-gray-300 bg-red-500 hover:bg-red-600"
              // onClick={onClose}
            ></button>
            <button
              className="h-3 w-3 cursor-none rounded-full border border-gray-300 bg-yellow-500 hover:bg-yellow-600"
              // onClick={onMinimize}
            ></button>
            <Link
              href={'/contact'}
              aria-label="Button leading to homepage"
              className="h-3 w-3 cursor-none rounded-full border border-gray-300 bg-green-500 hover:bg-green-600"
            ></Link>
          </div>
          <div className="flex-grow cursor-none text-center">
            <span className="cursor-none text-sm text-zinc-400">{windowTitle}</span>
          </div>
        </div>
        <div className="scrollbar-hide h-full cursor-none overflow-auto rounded-b-md font-mono text-sm text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
};
