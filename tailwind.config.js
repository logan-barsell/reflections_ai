import containerQueries from '@tailwindcss/container-queries';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,css}'],

  theme: {
    extend: {
      containers: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        background: '#F9FAFB',
        primary: '#A0C4FF',
        accent: '#C2F5D4',
        text: '#1F2937',
        muted: '#6B7280',
        border: '#E5E7EB',
        errorPrimary: '#DC2626',
        errorSecondary: '#FEE2E2',
      },
      fontFamily: {
        sans: ['Manrope'],
      },
      fontSize: {
        h1: ['32px', { fontWeight: '700' }],
        h2: ['24px', { fontWeight: '300' }],
        h2Bold: ['24px', { fontWeight: '600' }],
        h2Light: ['24px', { fontWeight: '300' }],
        h3: ['20px', { fontWeight: '600' }],
        time: ['64px', { fontWeight: '700' }],
        timeSm: ['45px', { fontWeight: '700' }],
        bodyBold: ['16px', { fontWeight: '700' }],
        bodySemi: ['16px', { fontWeight: '600' }],
        bodyMed: ['16px', { fontWeight: '500' }],
        bodyReg: ['16px', { fontWeight: '400' }],
        bodyLight: ['16px', { fontWeight: '300' }],
        smallLight: ['12px', { fontWeight: '300' }],
        smallBold: ['12px', { fontWeight: '700' }],
        label: ['14px', { fontWeight: '500' }],
        labelSemiBold: ['14px', { fontWeight: '600' }],
        labelBold: ['14px', { fontWeight: '700' }],
        labelMed: ['14px', { fontWeight: '500' }],
        labelReg: ['14px', { fontWeight: '400' }],
        labelLight: ['14px', { fontWeight: '300' }],
        subheader: ['20px', { fontWeight: '300' }],
      },
      spacing: {
        insightsCard: '675px',
        summaryCard: '500px',

        reflectionCard: '480px',

        streakTop: '150px',
        reflectionPageTop: '120px',
        barLabel: '100px',
        reflectionPageBottom: '96px',
        cardGap: '80px',
        cardTop: '66px',
        buttonTop: '45px',
        dividerGap: '40px',
        moodTagOffset: '32px',
        reflectionLabelOffset: '28px',
        barHeight: '27px',
        reflectionPadding: '25px',
        reflectionCardy: '50px',
        aiCardTop: '15px',
        spacer: '12px',
        reflectionPaddingTop: '5px',
      },
      maxWidth: {
        divider: '770px',
        insights: '675px',
        textAreaLg: '560px',
        summary: '500px',
        reflection: '480px',
        textAreaSm: '356px',
      },
    },
  },
  plugins: [containerQueries],
};
