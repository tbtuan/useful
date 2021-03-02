import Layout from "components/layout";

import SiteProvider from "providers/siteContext";
import ThemeProvider from "providers/themeContext";
import { MDXProvider } from "@mdx-js/react";
import mdxComponents from "components/mdxComponents";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <MDXProvider components={mdxComponents}>
      <SiteProvider>{element}</SiteProvider>
    </MDXProvider>
  </ThemeProvider>
);
