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
          DEFAULT: '#1E2328',
          light: '#4A5568',
          muted: '#718096',
        },
        cream: {
          DEFAULT: '#FEFDFB',
          warm: '#FAF8F5',
          dark: '#F5F2ED',
        },
        terracotta: {
          DEFAULT: '#c4754b',
          soft: '#d4956b',
        },
        sage: {
          DEFAULT: '#7a9a7e',
          soft: '#a3c4a7',
        },
        ochre: {
          DEFAULT: '#c9a84c',
          soft: '#ddc477',
        },
        terminal: {
          bg: '#1a1d21',
          text: '#e2e8f0',
          green: '#4ade80',
          muted: '#64748b',
          border: '#2d3139',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in': 'slideInRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'terminal-blink': 'blink 1.2s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
