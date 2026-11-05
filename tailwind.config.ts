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
        canvas: 'var(--canvas)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        muted: 'var(--ink-muted)',
        accent: 'var(--accent)',
      },
    },
  },
};
export default config;
