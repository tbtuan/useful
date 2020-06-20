import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';
import mdxComponents from './mdxComponents';
import Sidebar from './Sidebar';
import Header from './Header';
import TableOfContents from './tableOfContents';

import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';

import { lightTheme, darkTheme } from './theme';

const Wrapper = styled('div')`
  background: ${({ theme }) => theme.colors.background};
  height: 100vh;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Content = styled('main')`
  min-width: 0;
  width: 100%;
  padding: 3rem;
`;

const ContentWrapper = styled('div')`
  display: flex;
  margin-left: 18rem;
  position: relative;
  padding-top: calc(4rem);

  background: ${({ theme }) => theme.colors.background};

  table tr {
    background: ${({ theme }) => theme.colors.background};
  }

  @media only screen and (max-width: 1023px) {
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
    </EmotionThemeProvider>
  );
};

export default Layout;
