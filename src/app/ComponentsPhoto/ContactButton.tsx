'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ContactButtonProps {
  link: string;
  visible: boolean;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ link, visible }) => {
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    if (visible) {
      setShowLabel(true);
      const timer = setTimeout(() => setShowLabel(false), 3500);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <div className="fixed -right-[120px] -top-[120px] z-30">
      <Link href={`/${link}`} aria-label="Contact Button, come and say hi" className="block h-60 w-60 cursor-none">
        <div className="relative flex h-full w-full items-center justify-center">
          <div className="dotPulse relative h-20 w-20 transition duration-200 sm:hover:scale-110" />
        </div>
      </Link>
      {showLabel && (
        <span className="fade-out-label chip chip-accent rise absolute right-[150px] top-[178px] whitespace-nowrap">
          Get in touch ↗
        </span>
      )}
    </div>
  );
};
