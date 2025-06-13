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
  const isDev = segment === 'dev';

  return (
    <BackgroundFrame invert={isDev}>
      <Navigation invert={isDev} />
      {children}
    </BackgroundFrame>
  );
};

export default RouteWrapper;
