module.exports = {
  purge: [
    './src/**/*.svelte',
  ],
  theme: {
    extend: {
      borderWidth: {
        3: '3px',
      },
      colors: {
        white: 'var(--white)',
        black: 'var(--black)',
        textOnPrimary: 'var(--textOnPrimary)',
        indigo: {
          900: 'var(--primary-900)',
          800: 'var(--primary-800)',
          700: 'var(--primary-700)',
          600: 'var(--primary-600)',
          500: 'var(--primary-500)',
          400: 'var(--primary-400)',
          300: 'var(--primary-300)',
          200: 'var(--primary-200)',
          100: 'var(--primary-100)',
          50: 'var(--primary-50)',
        },
        gray: {
          50: 'var(--gray-50)',
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)',
          600: 'var(--gray-600)',
          700: 'var(--gray-700)',
          800: 'var(--gray-800)',
          900: 'var(--gray-900)',
          950: 'var(--gray-950)',
        },
      },
      boxShadow: {
        xs: 'var(--boxShadow-xs)',
        sm: 'var(--boxShadow-sm)',
        default: 'var(--boxShadow-default)',
        md: 'var(--boxShadow-md)',
        lg: 'var(--boxShadow-lg)',
        xl: 'var(--boxShadow-xl)',
        '2xl':'var(--boxShadow-2xl)',
        inner: 'var(--boxShadow-inner)',
        outline: 'var(--boxShadow-outline)',
        none: 'none',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/typography'),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
