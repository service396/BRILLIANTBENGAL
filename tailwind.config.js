/** @type {import('tailwindcss').Config} */
// Tokens are read directly from the WBIS 2027 Figma file
// (C2afjL5C6o45JM4NjXiOEY, canvas "02 · Site — all screens").
// Values below are the literal hexes and metrics the design specifies —
// do not "tidy" them towards the old pitch-deck palette.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // The five petals
        orange:  '#F5931F',
        magenta: '#E62B7C',
        purple:  '#6B4FB8',
        blue:    '#3457C4',
        green:   '#16A05E',
        // Ground + ink
        ink:     '#16181C',
        muted:   '#5B6068',
        paper:   '#FAF8F3',
        line:    '#E8E5DF',
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
      borderRadius: { card: '20px', pill: '100px', field: '12px' },
      maxWidth: { shell: '1440px' },
      spacing: { shell: '60px' },
      screens: { xs: '420px' },
    },
  },
  plugins: [],
}
