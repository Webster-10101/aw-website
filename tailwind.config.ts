import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          light: '#F3F0FA',
          DEFAULT: '#E8E4F3',
          deep: '#DDD7F0',
        },
        brand: {
          blue: '#3A5A7F',
          'blue-light': '#4A6B8A',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        serif: ['Charter', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;

