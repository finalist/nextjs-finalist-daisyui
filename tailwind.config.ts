import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        finalist: {
          primary: '#ff9100',
          secondary: '#162020',
          accent: '#e500fe',
          neutral: '#faefe7',
          'base-100': '#ffffff',
          'base-200': '#dfe5e5',
          'base-300': '#c1cece',
        },
      },
    ],
  },
}
export default config
