import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';
import mdxComponents from './mdxComponents';
import Sidebar from './sidebar';
import Header from './Header';
import TableOfContents from './tableOfContents';

import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';

import { lightTheme, darkTheme } from './theme';
import { baseStyles } from './styles/GlobalStyles';

const Wrapper = styled('div')`
  background: ${({ theme }) => theme.colors.background};
  height: 100vh;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Content = styled('main')`
  width: 100%;
`;

const ContentWrapper = styled('div')`
  display: flex;
  margin-left: 18rem;
  padding-left: 3rem;
  position: relative;
  padding-top: calc(4rem);

  background: ${({ theme }) => theme.colors.background};

  table tr {
    background: ${({ theme }) => theme.colors.background};
  }

  @media only screen and (max-width: 1023px) {
    padding-left: 0;
    margin: 0 10px;
    padding-top: 3rem;
  }
  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`;

const Layout = props => {
  const [isDarkThemeActive, setDarkThemeActive] = useState(false);

  useEffect(() => {
    setDarkThemeActive(
      JSON.parse(window.localStorage.getItem('isDarkThemeActive')) === true ? true : false
    );
  });

  const toggleActiveTheme = () => {
    setDarkThemeActive(prevState => !prevState);

    window.localStorage.setItem('isDarkThemeActive', JSON.stringify(!isDarkThemeActive));
  };

  const { children, location } = props;

  return (
    <EmotionThemeProvider theme={isDarkThemeActive ? darkTheme : lightTheme}>
      <Global styles={baseStyles} />
      <MDXProvider components={mdxComponents}>
        <Wrapper>
          <Sidebar
            location={location}
            isDarkThemeActive={isDarkThemeActive}
            toggleActiveTheme={toggleActiveTheme}
          />
          <ContentWrapper>
            <TableOfContents location={location} />
            <Content>{children}</Content>
          </ContentWrapper>
        </Wrapper>
      </MDXProvider>
      {/* {children} */}
    </EmotionThemeProvider>
  );
};

// const Layout = ({ children, location }) => (
//   <ThemeProvider location={location}>
//     <MDXProvider components={mdxComponents}>
//       {/* <Header location={location} /> */}
//       <Wrapper>
//         <Sidebar location={location} />
//         <ContentWrapper>
//           <TableOfContents location={location} />
//           <Content>{children}</Content>
//         </ContentWrapper>
//       </Wrapper>
//     </MDXProvider>
//   </ThemeProvider>
// );

export default Layout;
