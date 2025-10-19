/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-brown': '#8B7355',
        'brand-cream': '#F5F5DC',
      },
    },
  },
  plugins: [],
}
