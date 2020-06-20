// typography.js

import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  googleFonts: [{ name: 'Open Sans', styles: [300, 400, 500, 700] }],
  headerFontFamily: ['Open Sans', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
});

export default typography;
