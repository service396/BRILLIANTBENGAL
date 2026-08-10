/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brilliant Bengal — the five petals
        orange:  '#F2911D',
        magenta: '#E62B7C',
        purple:  '#5B4BB7',
        blue:    '#3457C4',
        green:   '#16A05E',
        // ground + ink
        ink:     '#231F20',
        muted:   '#6E6A66',
        paper:   '#FAF8F3',
        white:   '#FFFFFF',
        line:    '#E9E5DE',
        // 5% tints for section grounds
        'wash-orange':  '#FDF0DF',
        'wash-magenta': '#FCE4EF',
        'wash-purple':  '#EAE7F8',
        'wash-blue':    '#E4EAF9',
        'wash-green':   '#E0F3EA',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans:    ['Figtree', 'system-ui', 'sans-serif'],
        bengali: ['"Hind Siliguri"', 'system-ui', 'sans-serif'],
        data:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: { card: '20px', pill: '999px', field: '12px' },
      maxWidth: { shell: '1440px' },
      screens: { xs: '420px' },
    },
  },
  plugins: [],
}
