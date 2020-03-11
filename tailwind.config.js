/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        'josa-blue': {
            default: '#3897c0',
            'dark': '#1a485b',
            'veryDark' : '#163e4e',
          },
          'josa-warm-grey': {
            'light': '#f7f6f5',
            default: '#efedec',
            'dark': '#aea79f',
          },
          'josa-black': '#2e3436',
        }
      }
    },
  variants: {},
  plugins: []
}
