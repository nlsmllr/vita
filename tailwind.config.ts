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
      },
    },
  },
};
export default config;
