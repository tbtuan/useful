import React from "react";
import { MDXProvider } from "@mdx-js/react";
import mdxComponents from "components/mdxComponents";
import Sidebar from "../sidebar";
import Header from "../header";
import ThemeProvider from "providers/themeProvider";
import {
  Content,
  ContentWrapper,
  ViewDiv,
  Wrapper
} from "./style"

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
