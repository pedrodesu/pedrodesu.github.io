import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        'DEFAULT': '3rem',
        'lg': '10rem',
        'xl': '12rem',
        '2xl': '16rem',
      },
    },
    fontFamily: {
      base: 'Metropolis',
    },
    extend: {
      colors: {
        dark: 'rgb(var(--color-dark))',
        darker: 'rgb(var(--color-darker))',
      },
    },
  },
  plugins: [],
} satisfies Config
