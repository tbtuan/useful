import { Global, css } from "@emotion/react";

const style = css`
  /* open-sans-300 - latin */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 300;
    src: url("/fonts/open-sans-v18-latin-300.eot"); /* IE9 Compat Modes */
    src: local(""),
      url("/fonts/open-sans-v18-latin-300.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-IE8 */ url("/fonts/open-sans-v18-latin-300.woff2") format("woff2"),
      /* Super Modern Browsers */ url("/fonts/open-sans-v18-latin-300.woff")
        format("woff"),
      /* Modern Browsers */ url("/fonts/open-sans-v18-latin-300.ttf")
        format("truetype"),
      /* Safari, Android, iOS */
        url("/fonts/open-sans-v18-latin-300.svg#OpenSans") format("svg"); /* Legacy iOS */
  }
  /* open-sans-regular - latin */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/open-sans-v18-latin-regular.eot"); /* IE9 Compat Modes */
    src: local(""),
      url("/fonts/open-sans-v18-latin-regular.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-IE8 */ url("/fonts/open-sans-v18-latin-regular.woff2")
        format("woff2"),
      /* Super Modern Browsers */ url("/fonts/open-sans-v18-latin-regular.woff")
        format("woff"),
      /* Modern Browsers */ url("/fonts/open-sans-v18-latin-regular.ttf")
        format("truetype"),
      /* Safari, Android, iOS */
        url("/fonts/open-sans-v18-latin-regular.svg#OpenSans") format("svg"); /* Legacy iOS */
  }
  /* open-sans-600 - latin */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    src: url("/fonts/open-sans-v18-latin-600.eot"); /* IE9 Compat Modes */
    src: local(""),
      url("/fonts/open-sans-v18-latin-600.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-IE8 */ url("/fonts/open-sans-v18-latin-600.woff2") format("woff2"),
      /* Super Modern Browsers */ url("/fonts/open-sans-v18-latin-600.woff")
        format("woff"),
      /* Modern Browsers */ url("/fonts/open-sans-v18-latin-600.ttf")
        format("truetype"),
      /* Safari, Android, iOS */
        url("/fonts/open-sans-v18-latin-600.svg#OpenSans") format("svg"); /* Legacy iOS */
  }
  /* open-sans-700 - latin */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    src: url("/fonts/open-sans-v18-latin-700.eot"); /* IE9 Compat Modes */
    src: local(""),
      url("/fonts/open-sans-v18-latin-700.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-IE8 */ url("/fonts/open-sans-v18-latin-700.woff2") format("woff2"),
      /* Super Modern Browsers */ url("/fonts/open-sans-v18-latin-700.woff")
        format("woff"),
      /* Modern Browsers */ url("/fonts/open-sans-v18-latin-700.ttf")
        format("truetype"),
      /* Safari, Android, iOS */
        url("/fonts/open-sans-v18-latin-700.svg#OpenSans") format("svg"); /* Legacy iOS */
  }
  /* open-sans-800 - latin */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 800;
    src: url("/fonts/open-sans-v18-latin-800.eot"); /* IE9 Compat Modes */
    src: local(""),
      url("/fonts/open-sans-v18-latin-800.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-IE8 */ url("/fonts/open-sans-v18-latin-800.woff2") format("woff2"),
      /* Super Modern Browsers */ url("/fonts/open-sans-v18-latin-800.woff")
        format("woff"),
      /* Modern Browsers */ url("/fonts/open-sans-v18-latin-800.ttf")
        format("truetype"),
      /* Safari, Android, iOS */
        url("/fonts/open-sans-v18-latin-800.svg#OpenSans") format("svg"); /* Legacy iOS */
  }

  * {
    box-sizing: inherit;
  }

  html {
    font: 100%/1.45 "Open Sans", sans-serif;
    box-sizing: border-box;
    overflow-y: scroll;
    word-wrap: break-word;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
  }
`;

export const GlobalStyle = () => {
  return <Global styles={style} />;
};