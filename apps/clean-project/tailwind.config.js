const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const plugin = require('tailwindcss');
const svgToDataUri = require('mini-svg-data-uri')
const { default: flattenColorPalette } = require(
  'tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  theme: {
    extend: {
      colors: {
        code: {
          highlight: 'rgb(125 211 252 / 0.1)'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`
          })
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
      matchUtilities(
        {
          highlight: (value) => ({ boxShadow: `inset 0 1px 0 0 ${value}` })
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
    }
  ]
};
