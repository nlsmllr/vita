import React from 'react';

import { Vitae } from '../ComponentsDev/Vitae';
import CustomCursor from '../ComponentsPhoto/CustomCursor';

const page = () => {
  return (
    <main className="flex min-h-screen w-full cursor-none justify-center px-4 py-12 sm:py-20">
      <CustomCursor />
      <div className="w-full max-w-3xl">
        <Vitae />
      </div>
    </main>
  );
};

export default page;
