/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tis: {
          crimson: {
            DEFAULT: '#B90124',
            50: '#FDF2F4',
            100: '#FBE4E8',
            500: '#B90124',
            600: '#9E001E',
            700: '#820018',
            800: '#640013',
            900: '#43000D',
          },
          navy: {
            DEFAULT: '#0B2545',
            50: '#F0F4F8',
            100: '#D9E2EC',
            500: '#133E87',
            800: '#0B2545',
            900: '#071629',
            950: '#040E1B',
          },
          gold: {
            DEFAULT: '#C09D59',
            light: '#D4AF37',
            pale: '#F4ECD8',
            dark: '#9A7B39',
          },
          teal: {
            DEFAULT: '#60BAB1',
            light: '#BEE2E4',
            dark: '#007A83',
            soft: '#EAF6F5',
          },
          cream: {
            DEFAULT: '#F8F5F0',
            light: '#FCFAF7',
            dark: '#EBE5DA',
          },
          dark: {
            bg: '#0A0F1D',
            card: '#111827',
            cardHover: '#1A2338',
            border: '#1F293D',
            muted: '#94A3B8'
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glow-crimson': '0 0 25px -5px rgba(185, 1, 36, 0.4)',
        'glow-gold': '0 0 25px -5px rgba(192, 157, 89, 0.4)',
        'glow-teal': '0 0 25px -5px rgba(96, 186, 177, 0.4)',
        'card-soft': '0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 5px 15px -5px rgba(0, 0, 0, 0.025)',
        'card-hover': '0 20px 40px -10px rgba(0, 0, 0, 0.12), 0 10px 20px -5px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
