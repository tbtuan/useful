import React from "react";
import styled from "@emotion/styled";
import { MDXProvider } from "@mdx-js/react";
import mdxComponents from "./mdxComponents";
import Sidebar from "./sidebar";
import Header from "./header";
import ThemeProvider from "../providers/themeProvider";

const Wrapper = styled("div")`
  background: ${({ theme }) => theme.colors.background};
  height: 100vh;
`;

const Content = styled("main")`
  min-width: 0;
  width: 100%;
  padding: 3rem;
  padding-left: 4rem;

  @media only screen and (max-width: 576px) {
    padding: 2rem;
  }
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
  if (typeof window === "undefined") {
    return null;
  }
  const { mdx } = data;

  return (
    <ThemeProvider>
      <MDXProvider components={mdxComponents}>
        <Wrapper>
          <ViewDiv />
          <Header
            docsLocation={
              "https://github.com/tbtuan/useful/tree/master/content/" +
              mdx.parent.relativePath
            }
          />
          <Sidebar location={location} />
          <ContentWrapper>
            <Content>{children}</Content>
          </ContentWrapper>
        </Wrapper>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default Layout;
