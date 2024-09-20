import React from 'react';

interface WindowProps {
  children: React.ReactNode;
  title?: string;
  onClose: () => void;
  onMinimize: () => void;
  isMinimized: boolean;
}

export const Window = ({
  children,
  title = 'nils.mueller — nils.mueller@Nils-MBP- - - -zsh — 124x32',
  onClose,
  onMinimize,
  isMinimized,
}: WindowProps) => {
  return (
    <div
      className={`transform transition-all duration-300 ease-in-out ${
        isMinimized ? 'translate-y-[70vh] scale-50' : 'translate-y-0 scale-100'
      } mx-auto p-5`}
      onClick={isMinimized ? onMinimize : undefined}
    >
      {/* Set fixed width and height for both desktop and mobile */}
      <div className="h-[80vh] overflow-hidden rounded-xl shadow-xl sm:h-[95vh] sm:w-[70vw]">
        <div className="flex items-center bg-zinc-800 px-4 py-2">
          <div className="flex space-x-2 pr-3 sm:pr-0">
            <div className="h-3 w-3 cursor-pointer rounded-full bg-red-500 hover:bg-red-600" onClick={onClose}></div>
            <div
              className="h-3 w-3 cursor-pointer rounded-full bg-yellow-500 hover:bg-yellow-600"
              onClick={onMinimize}
            ></div>
            <div className="h-3 w-3 rounded-full bg-green-500 hover:bg-green-600"></div>
          </div>
          <div className="flex-grow text-center">
            <span className="text-sm text-zinc-400">{title}</span>
          </div>
        </div>
        <div className="h-full overflow-auto font-mono text-sm text-gray-300">
          {children} {/* Render Content */}
        </div>
      </div>
    </div>
  );
};
