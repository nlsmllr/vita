// BackgroundFrame.tsx
import React from 'react';

import Silk from './Silk';

interface BackgroundFrameProps {
  children: React.ReactNode;
  invert?: boolean;
}

const BackgroundFrame: React.FC<BackgroundFrameProps> = ({ children, invert = false }) => {
  return (
    <main className={`h-screen w-screen cursor-none bg-black p-5 uppercase sm:p-8 ${invert ? 'invert' : ''}`}>
      <div className={`relative h-full w-full border-[0.25px] border-gray-300`}>
        <div className="absolute left-0 top-0 h-full w-full mix-blend-normal">
          <Silk speed={2} scale={0.7} color="#787878" noiseIntensity={5} rotation={5.7} />
        </div>
        <div className="absolute left-0 top-0 h-full w-full mix-blend-darken">
          <Silk speed={3} scale={0.4} color="#ffffff" noiseIntensity={30} rotation={0.5} />
        </div>
        <div className="relative z-10 h-full w-full pl-8 pt-7">
          <div className="flex h-full flex-col justify-between">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default BackgroundFrame;
