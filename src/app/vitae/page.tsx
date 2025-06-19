import React from 'react';

import { Content } from '../Components/ComponentsDev/Content';
import CustomCursor from '../Components/ComponentsPhoto/CustomCursor';

const page = () => {
  return (
    <div className="flex h-full w-screen cursor-none justify-center">
      <CustomCursor />
      <div className="mb-20 w-4/5 cursor-none sm:w-1/2">
        <Content color="black" />
      </div>
    </div>
  );
};

export default page;
