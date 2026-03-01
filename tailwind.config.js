/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0f172a',
          card: '#1e293b',
          border: '#334155',
        },
        accent: {
          DEFAULT: '#22d3ee',
          hover: '#67e8f9',
        },
        workspace: {
          bg: '#f0f1f3',
          bar: '#fafbfc',
          card: '#ffffff',
          border: '#e2e4e8',
          fg: '#1d1d1f',
          muted: '#6e6e73',
          hover: '#e8e8ed',
          handle: '#8e8e93',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
    },
  },
  plugins: [],
}
