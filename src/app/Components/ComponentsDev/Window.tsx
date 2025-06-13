import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface WindowProps {
  children: React.ReactNode;
  onClose: () => void;
  onMinimize: () => void;
  isMinimized?: boolean;
}

export const Window = ({ children, onClose, onMinimize, isMinimized = false }: WindowProps) => {
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
      className={`transform cursor-auto transition-all duration-300 ease-in-out ${
        isMinimized ? 'translate-y-[75vh] scale-50' : 'translate-y-0 scale-100'
      } mx-auto w-full max-w-4xl p-5`}
      style={{
        height: isMinimized ? '25vh' : '100vh',
      }}
      onClick={isMinimized ? onMinimize : undefined}
    >
      <div className="overflow-hidden rounded-lg bg-zinc-950 shadow-xl sm:h-full">
        <div className="topbar sticky top-0 flex items-center overflow-auto rounded-t-lg bg-zinc-800 px-4 py-2">
          <div className="flex space-x-2 pr-3 sm:pr-0">
            <button
              className="h-3 w-3 cursor-pointer rounded-full bg-red-500 hover:bg-red-600"
              onClick={onClose}
            ></button>
            <button
              className="h-3 w-3 cursor-pointer rounded-full bg-yellow-500 hover:bg-yellow-600"
              onClick={onMinimize}
            ></button>
            <Link
              href={'/contact'}
              aria-label="Button leading to homepage"
              className="h-3 w-3 rounded-full bg-green-500 hover:bg-green-600"
            ></Link>
          </div>
          <div className="flex-grow text-center">
            <span className="text-sm text-zinc-400">{windowTitle}</span>
          </div>
        </div>
        <div className="scrollbar-hide h-full overflow-auto rounded-b-lg font-mono text-sm text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
};
