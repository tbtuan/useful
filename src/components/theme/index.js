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
    seperator: '#e6ecf1',
    switch: '#f78a48',
    switchbg: '#e0d9d1',
    textbox: '#eae4dd',
    navbarLink: '#cec6be',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#292D3E',
    heading: '#fff',
    text: '#dbddde',
    preFormattedText: '#1E1E1E',
    link: '#3DD8E0',
    sidebar: '#222533',
    seperator: '#1F2230',
    switch: '#3DD8E0',
    switchbg: '#1f212b',
    textbox: '#20232f',
    navbarLink: '#151619',
  },
};

export { lightTheme, darkTheme };
