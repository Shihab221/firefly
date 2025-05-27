import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
      },
      keyframes: {
      slide: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-10px)' },
        },
      },
      animation: {
        slide: 'slide 0.3s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
