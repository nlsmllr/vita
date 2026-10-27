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

  const windowTitle = `nils.mueller — zsh — ${dimensions}`;

  return (
    <div
      className={`transform cursor-auto transition-all duration-300 ease-in-out ${
        isMinimized ? 'translate-y-[75vh] scale-50' : 'translate-y-0 scale-100'
      } mx-auto w-full max-w-4xl p-5`}
      style={{
        height: isMinimized ? '25vh' : 'auto',
      }}
      onClick={isMinimized ? onMinimize : undefined}
    >
      <div className="overflow-hidden border-2 border-ink bg-ink shadow-hard sm:h-full">
        <div className="topbar sticky top-0 flex items-center overflow-auto border-b-2 border-ink bg-paper px-4 py-2">
          <div className="flex space-x-2 pr-3 sm:pr-0">
            <button
              aria-label="Close window"
              className="h-3.5 w-3.5 cursor-pointer border-2 border-ink bg-accent hover:bg-ink"
              onClick={onClose}
            ></button>
            <button
              aria-label="Minimize window"
              className="h-3.5 w-3.5 cursor-pointer border-2 border-ink bg-paper hover:bg-ink"
              onClick={onMinimize}
            ></button>
            <Link
              href={'/contact'}
              aria-label="Button leading to homepage"
              className="h-3.5 w-3.5 border-2 border-ink bg-ink hover:bg-accent"
            ></Link>
          </div>
          <div className="flex-grow text-center">
            <span className="font-mono text-xs uppercase text-ink">{windowTitle}</span>
          </div>
        </div>
        <div className="scrollbar-hide h-full overflow-auto font-mono text-sm text-paper">{children}</div>
      </div>
    </div>
  );
};
