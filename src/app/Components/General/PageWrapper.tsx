'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

import BackgroundFrame from './BackgroundFrame';
import Navigation from './Navigation';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const pathname = usePathname();
  const isPhotoPage = pathname === '/dev';

  return (
    <BackgroundFrame inverted={isPhotoPage}>
      <Navigation inverted={isPhotoPage} />
      <div className="flex-1">{children}</div>
    </BackgroundFrame>
  );
};

export default PageWrapper;
