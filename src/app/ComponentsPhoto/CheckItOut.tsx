'use client';

import { useEffect, useState } from 'react';

export const CheckItOut = ({}) => {
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLabel(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    showLabel && (
      <div className="fadeInOutLabel absolute mt-[415px] flex scale-75 items-end pt-3 uppercase sm:bottom-16 sm:scale-100 sm:pr-12 md:bottom-[10vh]">
        {/* First SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3" className="h-28 w-28 fill-current text-black">
          <path d="M98.1,12.8l169.3,120.8c5.5,9.1-10,30-22.5,28.7-11.9-1.3-65.3-39-80.7-47.5-5.3-3-4.6-9.1-13.1-2.3,117.7,250.2,389.9,400.2,661.9,390.5l9.4,17.9c-10,.1-21.3,8.1-29.2,9.2-122.9,18.2-279.3-27.5-389-88.4-123.1-68.3-224.5-165.7-279.7-297.7-12.5,3.4-3.8,6.5-3.6,12.7,1.3,36.3,2.2,76.7-11,110.4l-12.4-6-17-205.8c.4-7.5,10.3-43.7,17.5-42.3Z" />
        </svg>

        {/* Text "check it out" */}
        <span className="pl-4 pr-2 text-center text-xl font-black tracking-wide text-black">
          Check <br /> it out
        </span>

        {/* Second SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3" className="h-28 w-28 fill-current text-black">
          <path d="M63.8,530.2c159.3-15.8,301.7-74.7,421.9-180.3,82.8-72.8,145.7-162,204.9-254.1,3-9.8-9.2-.3-12.2,1.3-28.4,15-70.6,43.8-98.8,53.3-9.4,3.1-39,4.6-34-9.9,33.1-18.5,61-44.4,92.6-65.1,20.6-13.5,115.6-81.2,134.2-53.6,5.6,8.3-14.5,176.8-18.5,198.6-1.4,8-4,38.6-14.1,20.8l-1.7,14.6-20.8-7.7c2.5-13.5-3.1-26.4-3.6-39.4-.6-16.2,10.4-40.7-4.4-49.8-79.8,123.5-182.9,242.6-314.8,312.9-73.7,39.3-199.9,84.3-284.2,79.2-16.5-1-41.5-1.6-46.7-20.9ZM610,275.4c21.9-17.4,41.9-45.4,53.1-71.1l-53.1,71.1Z" />
        </svg>
      </div>
    )
  );
};
