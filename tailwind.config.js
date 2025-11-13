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
        'slate': {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
    },
  },
  plugins: [],
};
