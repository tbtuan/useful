const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#fff',
    heading: '#000',
    text: '#3B454E',
    preFormattedText: '#1E1E1E',
    link: '#F78A42',
    sidebar: '#FBFAF9',
    navbarLink: '',
    //link: '#4299e1',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#292D3E',
    heading: '#fff',
    text: '#AABBC6',
    preFormattedText: '#1E1E1E',
    link: '#1ED3C6',
    sidebar: '#FBFAF9',
    // #4299e1
  },
};

export { lightTheme, darkTheme };
