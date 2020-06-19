import { injectGlobal } from 'emotion';

export const baseStyles = injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body {
    font-size: 16px;
  }

  body {
    font-family: 'Open Sans';
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  
  pre {
    border: 0 !important;
    background-color: rgb(245, 247, 249); /* !important; */
  }


  /* Header section ends here */

  .paragraph {
    margin: 16px 0px 32px;
    line-height: 1.625;
  }

  .pre {
    font-size: 14px;
    margin: 0px;
    padding: 16px;
    overflow: auto;
  }

`;
