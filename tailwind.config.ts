import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#3B82F6',
          green: '#10B981',
          'blue-dark': '#1E40AF',
          'green-dark': '#059669',
        },
        dark: {
          bg: '#0A0E1A',
          card: '#111827',
          border: '#1F2937',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)',
      },
    },
  },
  plugins: [],
}
export default config
