/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#ffffff',
        border: 'rgba(255, 255, 255, 0.1)',
        sidebar: '#0a0a0a',
        surface: '#111111',
        primary: {
          DEFAULT: '#ffffff',
          foreground: '#000000',
        },
        accent: {
          green: '#D9F99D', // Acid Green
          yellow: '#FDE047', // Signal Yellow
          red: '#FDA4AF',    // Warning Red
        },
        muted: {
          DEFAULT: '#888888',
          foreground: '#666666',
        }
      },
      borderRadius: {
        'sharp': '2px',
      }
    },
  },
  plugins: [],
}
