import Link from 'next/link';
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
      className={`transform cursor-auto transition-all duration-300 ease-in-out ${
        isMinimized ? 'translate-y-[75vh] scale-50' : 'translate-y-0 scale-100'
      } mx-auto w-full max-w-4xl p-5`}
      style={{
        height: isMinimized ? '25vh' : 'auto',
      }}
      onClick={isMinimized ? onMinimize : undefined}
    >
      <div className="mt-32 flex flex-col items-center justify-center space-y-12 rounded-[51px] bg-[#e8eaed] p-8 shadow-[inset_5px_5px_13px_#c7cdd4,inset_-5px_-5px_13px_#ffffff] md:mt-0">
        {/* Top Bar */}
        <div className="mb-4 flex w-full items-center justify-between">
          <div className="flex space-x-2">
            <div
              className="h-3 w-3 cursor-pointer rounded-full bg-red-400 shadow-sm hover:bg-red-500"
              onClick={onClose}
            ></div>
            <div
              className="h-3 w-3 cursor-pointer rounded-full bg-yellow-400 shadow-sm hover:bg-yellow-500"
              onClick={onMinimize}
            ></div>
            <Link href={'/contact'}>
              <div className="h-3 w-3 rounded-full bg-green-400 shadow-sm hover:bg-green-500"></div>
            </Link>
          </div>
          <div className="flex-grow text-center">
            <span className="text-xs text-zinc-500">{title}</span>
          </div>
        </div>
        <div className="h-full w-full rounded-3xl bg-[#e8eaed] p-5 font-mono text-sm text-gray-600">{children}</div>
      </div>
    </div>
  );
};
