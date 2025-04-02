import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F9FAFB',
        primary: '#A0C4FF',
        accent: '#C2F5D4',
        text: '#1F2937',
        muted: '#6B7280',
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        h1: ['32px', { fontWeight: '700' }],
        h2: ['24px', { fontWeight: '300' }],
        h3: ['20px', { fontWeight: '600' }],
        time: ['64px', { fontWeight: '700' }],
        bodyBold: ['16px', { fontWeight: '700' }],
        bodyLine: [
          '16px',
          { fontWeight: '700', textDecorationLine: 'line-through' },
        ],
        bodySemi: ['16px', { fontWeight: '600' }],
        bodyMed: ['16px', { fontWeight: '500' }],
        bodyLight: ['12px', { fontWeight: '300' }],
        label: ['14px', { fontWeight: '500' }],
        subheader: ['20px', { fontWeight: '300' }],
      },
    },
  },
  plugins: [],
};
