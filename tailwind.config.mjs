// tailwind.config.js (ESM)
import tailwindScrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // outros caminhos
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindScrollbar({ nocompatible: true }), // Permite usar cores arbitrárias, ex: scrollbar-track-[#2a2a2a]
  ],
};
