import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const colors = {
  palleteBlack: '#0d0b09',
  palleteGold: '#e7bb6a',
  goldDark: '#ccb25e',
  goldLight: '#f2dc82',
  palleteAccent: '#e5e7eb',
  palleteTitle: '#ffff',
  palleteAnexo: '#333333',
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        rubik: ['var(--font-rubik)', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'pallete-black': colors.palleteBlack,
        'pallete-gold': colors.palleteGold,
        'gold-dark': colors.goldDark,
        'gold-light': colors.goldLight,
        'pallete-accent': colors.palleteAccent,
        'pallete-title': colors.palleteTitle,
        'pallete-anexo': colors.palleteAnexo,
      },
      keyframes: {
        rotate180: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        rotate0: {
          '0%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        rotate180: 'rotate180 0.5s ease-in-out forwards',
        rotate0: 'rotate0 0.5s ease-in-out forwards',
      },
    },
  },
  darkMode: ['class'],
  plugins: [nextui()],
};
export default config;
