/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        base: 'rgb(var(--color-base) / <alpha-value>)',
        panel: 'rgb(var(--color-panel) / <alpha-value>)',
        panel2: 'rgb(var(--color-panel2) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        accent2: 'rgb(var(--color-accent2) / <alpha-value>)',
        azure: 'rgb(var(--color-azure) / <alpha-value>)'
      },
      boxShadow: {
        glow: '0 20px 80px -25px rgb(var(--shadow-glow) / 0.55)'
      },
      backgroundImage: {
        grid: 'radial-gradient(rgb(var(--grid-dot) / 0.32) 1px, transparent 1px)'
      }
    }
  },
  plugins: [],
};
