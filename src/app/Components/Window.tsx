import React from 'react';

interface WindowProps {
  children: React.ReactNode;
  title?: string;
}

export const Window = ({
  children,
  title = 'nils.mueller — nils.mueller@Nils-MBP- - - -zsh — 124x32',
}: WindowProps) => {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="overflow-hidden rounded-t-lg bg-gray-800 shadow-lg">
        <div className="flex items-center bg-gray-900 px-4 py-2">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-grow text-center">
            <span className="text-sm text-gray-400">{title}</span>
          </div>
        </div>
        <div className="p-4 font-mono text-sm text-gray-300">{children}</div>
      </div>
    </div>
  );
};
