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
    const timer = setTimeout(() => setShowLabel(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed -right-10 -top-10 z-30 cursor-none text-center uppercase">
      <Link href={`/${link}`} className="cursor-none">
        <div className="dotPulse relative flex h-20 w-20 items-center justify-center transition duration-100 sm:hover:blur-sm" />
      </Link>
      {showLabel && visible && (
        <div className="fadeInLabel absolute right-7 top-28 flex -translate-y-1/2 scale-75 transform items-center sm:right-16 sm:top-32 sm:scale-100">
          <span className="-mr-5 pt-16 text-xl font-black tracking-wide text-black sm:-mr-4">Get in Touch</span>
          <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3" width="200" height="150">
            <g data-name="Layer_1">
              <path
                d="M600.6,219c-.8.2-1.2.1-1.4.3-1.5,1.3-3.1,2.5-4.6,3.9-61.7,54.1-129.1,99.7-202.2,136.9-69.9,35.6-143,62.7-219.2,81-43.1,10.4-86.7,17.7-130.7,22.3-2.8.3-4.7,0-4.8-3.2-.5-13.9-.9-27.9-1.3-41.8,0-3.5,1.5-5.1,5.4-5.5,46.1-4.5,91.6-12.4,136.6-23.6,141.7-35.5,269.7-98.7,383.8-190.1,5.8-4.6,11.5-9.4,18-14.8-3.1-.3-5-.5-7-.7-44.8-3-89.7-6-134.5-8.9-2.9-.2-4.5-1.3-4.5-4.1-.3-14.1-.5-28.2-.7-42.3,0-3.5,1.9-4.2,5.2-3.9,12.4,1.1,24.9,1.7,37.3,2.5,56.8,3.8,113.6,7.6,170.4,11.2,4.6.3,6.6,2,6.6,6.6.2,11.6.9,23.3.7,34.9,0,3.9-1.3,8.3-3.3,11.6-37.1,60-74.3,119.9-111.5,179.8-3,4.9-6.1,9.7-10,15.8-.8-4.2-1.6-6.9-1.7-9.6-.4-10.6-1-21.3-.7-31.9,0-4.1,1.3-8.7,3.4-12.1,15.6-25.7,31.6-51.2,47.5-76.8,7.7-12.4,15.4-24.8,23.4-37.5h0ZM620.4,186.9c-5.9-.4-10.8-.8-16.1-1.2-.1,9-.3,17.6-.5,27.9,5.9-9.4,11-17.7,16.6-26.7h0Z"
                fill="black"
              />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
};
