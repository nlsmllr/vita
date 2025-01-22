import React from 'react';

import { Content } from '../ComponentsDev/Content';
import CustomCursor from '../ComponentsPhoto/CustomCursor';

const page = () => {
  return (
    <div className="flex h-full w-screen cursor-none justify-center">
      <CustomCursor />
      <div className="mb-20 w-1/2 cursor-none">
        <Content color="black" />
      </div>
    </div>
  );
};

export default page;
