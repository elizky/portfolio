/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.mdx'],
  theme: {
    extend: {
      colors: {
        white: '#fafbfb', // black haze
        black: '#1a1b1a', // heavy metal
        primary: '#ee4342', // cinnabar
        accent: '#a1b9d3', // rock blue
      },
      fontFamily: {
        noto: 'var(--font-noto)',
        lora: 'var(--font-lora)',
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/typography')],
};

// burnt siena
// mojo #be443d
