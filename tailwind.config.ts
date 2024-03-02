import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      gray: {
        100: '#dfe5e5',
        200: '#c1cece',
        300: '#a3b3b3',
        400: '#899898',
        500: '#707e7e',
        600: '#576464',
        700: '#404c4c',
        800: '#2b3535',
        900: '#162020',
      },
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontSize: '1rem',
            maxWidth: '100%',
            h1: {
              fontSize: '8rem',
              fontWeight: '600',
              lineHeight: 1,
              letterSpacing: '-1px',
            },
            h2: {
              fontSize: '6rem',
              fontWeight: '600',
              lineHeight: 1,
              letterSpacing: '-0.5px',
            },
            h3: {
              fontSize: '4rem',
              fontWeight: '600',
              lineHeight: 1.1,
              letterSpacing: '-1px',
            },
            h4: {
              fontSize: '2.5rem',
              fontWeight: '600',
              lineHeight: 1.1,
              letterSpacing: '-1px',
            },
            h5: {
              fontSize: '2rem',
              fontWeight: '600',
              lineHeight: 1.2,
              letterSpacing: '-1px',
            },
            h6: {
              fontSize: '1.5rem',
              fontWeight: '600',
              lineHeight: 1.2,
              letterSpacing: '-0.05px',
            },
            p: {
              fontSize: '1rem',
              lineHeight: '26px',
            },
          },
        },
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: [
      {
        finalist: {
          primary: '#ff9100',
          'primary-content': '#000',
          secondary: '#faefe7',
          'secondary-content': '#000',
          accent: '#c0c0ff',
          'accent-content': '#000',
          neutral: '#162020',
          'neutral-content': '#fff',
          'base-100': '#ffffff',
          'base-100-content': '#000',
          'base-200': '#dfe5e5',
          'base-200-content': '#000',
          'base-300': '#c1cece',
          'base-300-content': '#fff',
        },
      },
    ],
  },
}
export default config
