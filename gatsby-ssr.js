import Layout from "components/layout";

import ThemeProvider from "contexts/themeContext";
import { MDXProvider } from "@mdx-js/react";
import mdxComponents from "components/mdxComponents";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <MDXProvider components={mdxComponents}>{element}</MDXProvider>
  </ThemeProvider>
);
