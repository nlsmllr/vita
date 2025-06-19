'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

import BackgroundFrame from './BackgroundFrame';
import Navigation from './Navigation';

interface RouteWrapperProps {
  children: React.ReactNode;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({ children }) => {
  const segment = useSelectedLayoutSegment();
  const isInvert = segment === 'contact';

  return (
    <BackgroundFrame invert={isInvert}>
      <Navigation invert={isInvert} />
      <div className="absolute left-0 top-0 z-10 h-full w-full overflow-y-auto">{children}</div>
    </BackgroundFrame>
  );
};

export default RouteWrapper;
