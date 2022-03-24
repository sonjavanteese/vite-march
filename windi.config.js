import {defineConfig} from 'windicss/helpers'
import colors from 'windicss/colors'
import plugin from 'windicss/plugin'
const {transform} = require('windicss/helpers')

export default defineConfig({
    content: [
        './src/**/*.svelte',
        './src/**/*.html',
        './src/**/*.js',
        // './node_modules/flowbite-svelte/**/*.svelte',
        // './node_modules/flowbite-svelte/**/*.html',
        // './node_modules/flowbite-svelte/**/*.js',
    ],
    darkMode: 'class', // or 'media'
    safelist: [
        'w-64',
        'w-1/2',
        'rounded-l-lg',
        'rounded-r-lg',
        'bg-gray-200',
        'grid-cols-4',
        'grid-cols-7',
        'h-6',
        'leading-6',
        'h-9',
        'leading-9',
        'shadow-lg'
      ],
    theme: {
        extend: {
            screens: {
              'sm': '640px',
              'md': '768px',
              'lg': '1024px',
              'xl': '1280px',
              '2xl': '1536px',
            },
            colors: {
              // col,
              primary: {
                light: '#3896d3',
                DEFAULT: '#2980b9',
                dark: '#226998',
              },
              parker: {
                50: '#579086',
                100: '#4d867c',
                200: '#437c72',
                300: '#397268',
                400: '#2f685e',
                500: '#255e54',
                600: '#1b544a',
                700: '#114a40',
                800: '#074036',
                900: '#00362c'
              },
            },
            fontFamily: {
              sans: ['Graphik', 'sans-serif'],
              serif: ['Merriweather', 'serif'],
            },
            extend: {
              spacing: {
                128: '32rem',
                144: '36rem',
              },
              borderRadius: {
                '4xl': '2rem',
              },
            },
          },
    },
    shortcuts: {
      'nwp-btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',  
      'nwp-btn-green': 'text-white bg-green-500 hover:bg-green-700',
      'nwp-btn-blue': 'text-white bg-blue-500 hover:bg-blue-700',
      'nav-btn': ' font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150',
      'nav-btn-blue': 'bg-blue-500 text-white active:bg-blue-700',
      'nav-btn-default': 'bg-transparent text-gray-800 active:text-blue-700',
    },
    plugins: [
       // transform('flowbite/plugin'),
       plugin(function ({
        addUtilities
      }) {
        const newUtilities = {
          '.safe-top': {
            paddingTop: '0.25rem'
          },
          '.safe-left': {
            paddingLeft: '0.25rem'
          },
          '.safe-right': {
            paddingRight: '0.25rem'
          },
          '.safe-bottom': {
            paddingBottom: '0.25rem'
          }
        }
  
        addUtilities(newUtilities);
      }),
      plugin(({
        addComponents
      }) => {
        const buttons = {
          '.btn': {
            padding: '.5rem 1rem',
            marginRight: '.25rem',
            borderRadius: '.25rem',
            fontWeight: '600',
          },
          '.btn-link': {
            padding: '.5rem 1rem',
            marginRight: '.25rem',
            borderRadius: '.25rem',
            fontWeight: '600',
            textAlign: 'center',
          },
          '.btn-blue': {
            'backgroundColor': '#3490dc',
            'color': '#fff',
            '&:hover': {
              backgroundColor: '#2779bd',
            },
            '&.active': {
              backgroundColor: '#075985',
            },
            '&[disabled]': {
              backgroundColor: '#d4d4d8',
            },
          },
          '.btn-red': {
            'backgroundColor': '#e3342f',
            'color': '#fff',
            '&:hover': {
              backgroundColor: '#cc1f1a',
            },
          },
        }
        addComponents(buttons)
      }),
      plugin(({
        addDynamic,
        variants
      }) => {
        addDynamic('skew', ({
          Utility,
          Style
        }) => {
          return Utility.handler
            .handleStatic(Style('skew'))
            .handleNumber(0, 360, 'int', number => `skewY(-${number}deg)`)
            .createProperty('transform')
        }, variants('skew'))
      }),
      require('@windicss/plugin-animations')({
        settings: {
          animatedSpeed: 500,
          heartBeatSpeed: 1000,
          hingeSpeed: 2000,
          bounceInSpeed: 750,
          bounceOutSpeed: 750,
          animationDelaySpeed: 1000,
        },
      }),
      require('windicss/plugin/filters'),
      require('windicss/plugin/forms'),
      require('windicss/plugin/aspect-ratio'),
      require('windicss/plugin/line-clamp'),
      require('windicss/plugin/typography')({
        modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
      }),
    ],
  })