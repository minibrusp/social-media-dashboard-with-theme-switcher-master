/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          limegreen: 'hsl(163, 72%, 41%)',
          brightred: 'hsl(356, 69%, 56%)',
          facebook: 'hsl(208, 92%, 53%)',
          instagram: {
            from: 'hsl(37, 97%, 70%)',
            to: 'hsl(329, 70%, 58%)'
          },
          twitter: 'hsl(203, 89%, 53%)',
          youtube: 'hsl(348, 97%, 39%)'

        },
        neutral: {
          light: {
            white: 'hsl(0, 0%, 100%)',
            verypaleblue: 'hsl(225, 100%, 98%)',
            grayishblue: {
              light: 'hsl(227, 47%, 96%)',
              dark: 'hsl(228, 12%, 44%)', 
            },
            verydarkblue: 'hsl(230, 17%, 14%)',
          },
          dark: {
            verydarkblue: {
              bg: 'hsl(230, 17%, 14%)',
              topbg: 'hsl(232, 19%, 15%)'
            },
            desaturatedblue: {
              normal: 'hsl(228, 34%, 66%)',
              dark: 'hsl(228, 28%, 20%)',
              lighter: 'hsl(228, 26%, 27%)'
            },
            white: 'hsl(0, 0%, 100%)'
          }
        },
        toggle: {
          dark: {
            from: 'hsl(210, 78%, 56%)',
            to: 'hsl(146, 68%, 55%)'
          },
          light: 'hsl(230, 22%, 74%)'
        }

        // end of colors 
      },
      fontFamily: {
        body: ['Inter']
      }
    },
  },
  plugins: [],
}
