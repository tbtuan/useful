import React from 'react';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';

import ThemeProvider from './theme/themeProvider';
import mdxComponents from './mdxComponents';
import Sidebar from './sidebar';
import Header from './Header';
import TableOfContents from './tableOfContents';

const Wrapper = styled('div')`
  background: ${({ theme }) => theme.colors.background};
  height: auto;
  top: 4rem;
  position: relative;

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

const Layout = ({ children, location }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      {/* <Header location={location} /> */}
      <Wrapper>
        <Sidebar location={location} />
        <ContentWrapper>
          <TableOfContents location={location} />
          <Content>{children}</Content>
        </ContentWrapper>
      </Wrapper>
    </MDXProvider>
  </ThemeProvider>
);

export default Layout;
