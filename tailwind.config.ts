import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: 'rgb(var(--paper) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'custom-bg': {
          light: '#DEDBD2',
          dark: '#A8A076',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Arial Black', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        hard: '8px 8px 0 0 rgb(var(--ink))',
        'hard-sm': '4px 4px 0 0 rgb(var(--ink))',
      },
    },
  },
};
export default config;
