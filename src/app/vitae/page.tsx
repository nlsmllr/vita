import React from 'react';

import { Content } from '../ComponentsDev/Content';
import CustomCursor from '../ComponentsPhoto/CustomCursor';

const page = () => {
  return (
    <div className="min-h-screen w-screen cursor-none bg-paper text-ink">
      <CustomCursor />
      <section className="bg-grid border-b-2 border-ink px-4 pb-4 pt-20">
        <p className="mb-6 font-mono text-xs uppercase">[ Curriculum Vitae ]</p>
        <h1 className="font-wide text-[clamp(3.5rem,17.5vw,19rem)] font-black uppercase leading-[0.9] tracking-[-0.045em]">
          Vitae
        </h1>
      </section>
      <div className="mx-auto mb-20 w-full max-w-3xl cursor-none px-4">
        <Content color="black" />
      </div>
    </div>
  );
};

export default page;
