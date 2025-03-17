import React from 'react';

import { Content } from '../ComponentsDev/Content';

const page = () => {
  return (
    <div className="flex h-full w-screen justify-center">
      <div className="mb-20 w-4/5 sm:w-1/2">
        <Content color="black" />
      </div>
    </div>
  );
};

export default page;
