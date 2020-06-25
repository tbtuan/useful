import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { MDXProvider } from "@mdx-js/react";
import mdxComponents from "./mdxComponents";
import Sidebar from "./sidebar";
import Header from "./header";
import TableOfContents from "./tableOfContents";

import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

import { lightTheme, darkTheme } from "./theme";

const Wrapper = styled("div")`
  background: ${({ theme }) => theme.colors.background};
  height: 100vh;
`;

const Content = styled("main")`
  min-width: 0;
  width: 100%;
  padding: 3rem;
  padding-left: 4rem;
`;

const ContentWrapper = styled("div")`
  display: flex;
  margin-left: 18rem;
  position: relative;
  top: 6rem;

  background: ${({ theme }) => theme.colors.background};

  table tr {
    background: ${({ theme }) => theme.colors.background};
  }

  @media only screen and (max-width: 1023px) {
    margin-left: 4rem;
  }
`;

const ViewDiv = styled("div")`
  width: 18rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 4px 4px 18px ${({ theme }) => theme.colors.sidebarShadow};
  background: transparent;
  z-index: 2;
  pointer-events: none;

  @media only screen and (max-width: 1023px) {
    width: 4rem;
  }
`;

const Layout = ({ children, location, data }) => {
  const { allMdx, mdx, site } = data;

  const [isDarkThemeActive, setDarkThemeActive] = useState(false);

  useEffect(() => {
    setDarkThemeActive(
      JSON.parse(window.localStorage.getItem("isDarkThemeActive")) === true
        ? true
        : false
    );
  });

  const toggleActiveTheme = () => {
    setDarkThemeActive((prevState) => !prevState);

    window.localStorage.setItem(
      "isDarkThemeActive",
      JSON.stringify(!isDarkThemeActive)
    );
  };

  return (
    <EmotionThemeProvider theme={isDarkThemeActive ? darkTheme : lightTheme}>
      <MDXProvider components={mdxComponents}>
        <Wrapper>
          <ViewDiv />
          <Header
            title={site.siteMetadata.title}
            docsLocation={
              site.siteMetadata.docsLocation + "/" + mdx.parent.relativePath
            }
            isDarkThemeActive={isDarkThemeActive}
            toggleActiveTheme={toggleActiveTheme}
          />
          <Sidebar location={location} />
          <ContentWrapper>
            <Content>{children}</Content>
          </ContentWrapper>
        </Wrapper>
      </MDXProvider>
    </EmotionThemeProvider>
  );
};

export default Layout;
