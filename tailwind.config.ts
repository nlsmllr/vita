import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'custom-bg': {
          light: '#DEDBD2',
          dark: '#A8A076',
        },
        primaryBackground: '#e8eaed',
        secondaryBackground: '#c5c7c9',
      },
      fontFamily: {
        lato: ['var(--font-lato)'],
      },
    },
  },
};
export default config;
