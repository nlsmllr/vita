import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface WindowProps {
  children: React.ReactNode;
  onClose: () => void;
  onMinimize: () => void;
  isMinimized?: boolean;
}

const dot = 'h-3.5 w-3.5 cursor-pointer rounded-full transition hover:scale-110';
const dotShadow = { boxShadow: 'inset 0 1px 0 rgba(255,255,255,.5), inset 0 -2px 3px rgba(0,0,0,.15)' };

export const Window = ({ children, onClose, onMinimize, isMinimized = false }: WindowProps) => {
  const [dimensions, setDimensions] = useState('');

  useEffect(() => {
    const updateDimensions = () => setDimensions(`${window.innerWidth}x${window.innerHeight}`);
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const windowTitle = `nils.mueller — zsh — ${dimensions}`;

  return (
    <div
      className={`transform cursor-auto transition-all duration-300 ease-in-out ${
        isMinimized ? 'translate-y-[75vh] scale-50' : 'translate-y-0 scale-100'
      } mx-auto w-full max-w-4xl p-4 sm:p-8`}
      style={{ height: isMinimized ? '25vh' : '100vh' }}
      onClick={isMinimized ? onMinimize : undefined}
    >
      <div className="clay-stack flex flex-col p-3 sm:h-full">
        <div className="flex items-center px-3 pb-3 pt-1">
          <div className="flex space-x-2 pr-3 sm:pr-0">
            <button aria-label="Close" className={`${dot} bg-red-500`} style={dotShadow} onClick={onClose} />
            <button aria-label="Minimize" className={`${dot} bg-yellow-500`} style={dotShadow} onClick={onMinimize} />
            <Link href={'/contact'} aria-label="Go to contact" className={`${dot} bg-green-500`} style={dotShadow} />
          </div>
          <div className="flex-grow truncate text-center text-sm font-medium text-muted">{windowTitle}</div>
        </div>
        <div
          className="scrollbar-hide min-h-0 flex-1 overflow-auto rounded-[1.5rem] bg-zinc-950 font-mono text-sm text-gray-300"
          style={{ boxShadow: 'inset 0 3px 10px rgba(0,0,0,.6)' }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
