/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primaryBlue: '#1C3F67',
        vomitGreen: '#4EE287',
        paleGreen: '#C0FFD8',
        grayLight: '#EBEBEB',
        inkBlue: '#232E69',
        circleBorder4: 'rgba(254, 188, 19, 0.20)',
        circleBorder3: 'rgba(254, 188, 19, 0.30)',
        circleBorder2: 'rgba(254, 188, 19, 0.65)',
        circleBorder1: 'rgba(254, 188, 19, 0.40)'
      },
    },
  },
  plugins: [],
}
