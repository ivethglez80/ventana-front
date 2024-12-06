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
    screens: {
      xs: '360px', // mobile small
      sm: '640px', // mobile large
      md: '768px', // Tablets
      lg: '1024px', // Desktops small
      xl: '1280px', // Desktops medium
      '2xl': '1536px', // Desktops large
      '3xl': '1920px', // Big screens
    },
    extend: {
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
      fontSize: {
        'responsive-sm': 'clamp(0.75rem, 2vw, 0.875rem)',
        'responsive-base': 'clamp(0.875rem, 3vw, 1rem)',
        'responsive-lg': 'clamp(1rem, 4vw, 1.25rem)',
        'responsive-xl': 'clamp(1.25rem, 5vw, 1.5rem)',
      },
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
