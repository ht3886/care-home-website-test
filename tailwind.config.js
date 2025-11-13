/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'teal': {
          50: '#E6F9F7',
          100: '#CCF3EE',
          200: '#99E7DD',
          300: '#66DBCC',
          400: '#33CFBB',
          500: '#17B7A5',
          600: '#129284',
          700: '#0E6E63',
          800: '#094942',
          900: '#052521',
        },
        'cream': {
          50: '#FDFCFB',
          100: '#F8F6F3',
          200: '#F3F0EB',
          300: '#EEE9E3',
          400: '#E9E3DB',
        },
        'charcoal': {
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#B0B0B0',
          300: '#808080',
          400: '#505050',
          500: '#2D2D2D',
          600: '#232323',
          700: '#1A1A1A',
          800: '#121212',
          900: '#0A0A0A',
        },
      },
    },
  },
  plugins: [],
};
