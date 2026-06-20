/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:      'var(--bg)',
        surface: 'var(--surface)',
        surface2:'var(--surface2)',
        border:  'var(--border)',
        accent:  'var(--accent)',
        accent2: 'var(--accent2)',
        accent3: 'var(--accent3)',
        text:    'var(--text)',
        muted:   'var(--muted)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body:    ['var(--font-body)'],
        mono:    ['var(--font-mono)'],
      },
      animation: {
        blink:    'blink 1s step-end infinite',
        'fade-up':'fadeUp 0.7s ease forwards',
        float:    'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink:   { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        fadeUp:  { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        float:   { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-10px)' } },
      },
    },
  },
  plugins: [],
}
