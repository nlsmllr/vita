import React from 'react';

import { Content } from '../ComponentsDev/Content';
import CustomCursor from '../ComponentsPhoto/CustomCursor';

const page = () => {
  return (
    <div className="flex h-full w-screen cursor-none justify-center">
      <CustomCursor />
      <div className="w-2/3 cursor-none">
        <Content color="black" />
      </div>
    </div>
  );
};

export default page;
