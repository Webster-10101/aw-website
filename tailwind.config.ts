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
        coral: {
          DEFAULT: '#E86A58',
          light: '#F08575',
          dark: '#D55A48',
        },
        teal: {
          DEFAULT: '#4A9B9B',
          light: '#5FB5B5',
        },
        charcoal: {
          DEFAULT: '#2D3436',
          light: '#4A5568',
        },
        cream: {
          DEFAULT: '#FFFBF7',
          dark: '#FFF5ED',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
