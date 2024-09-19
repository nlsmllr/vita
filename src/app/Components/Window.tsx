import React from 'react';

interface WindowProps {
  children: React.ReactNode;
  title?: string;
  onClose: () => void; // Function to close the window
}

export const Window = ({
  children,
  title = 'nils.mueller — nils.mueller@Nils-MBP- - - -zsh — 124x32',
  onClose,
}: WindowProps) => {
  return (
    <div className="mx-auto max-w-5xl p-5">
      <div className="h-[95vh] overflow-hidden rounded-xl shadow-xl">
        <div className="flex items-center bg-zinc-800 px-4 py-2">
          <div className="flex space-x-2">
            <div className="h-3 w-3 cursor-pointer rounded-full bg-red-500 hover:bg-red-600" onClick={onClose}></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-grow text-center">
            <span className="text-sm text-zinc-400">{title}</span>
          </div>
        </div>
        <div className="h-full overflow-auto font-mono text-sm text-gray-300">{children}</div>
      </div>
    </div>
  );
};
