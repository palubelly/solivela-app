
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2F3C42',
        secondary: '#E5DEAF',
        accent: '#53B399',
        dark: '#242F40',
        'gray-800': '#2F3C42',
        'gray-700': '#3A4750',
        'gray-600': '#4A5568',
        'gray-500': '#718096',
        'gray-400': '#A0AEC0',
        'gray-300': '#CBD5E0',
        'gray-200': '#E2E8F0',
        'gray-100': '#F7FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      screens: {
        'mobile': '375px',
      },
    },
  },
  plugins: [],
}
