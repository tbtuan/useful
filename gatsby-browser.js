import "normalize.css";
import "theme/global.css";

import Layout from "components/layout";

import SiteProvider from "providers/siteContext";
import ThemeProvider from "providers/themeContext";
import { MDXProvider } from "@mdx-js/react";
import mdxComponents from "components/mdxComponents";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <MDXProvider components={mdxComponents}>
      <SiteProvider>{element}</SiteProvider>
    </MDXProvider>
  </ThemeProvider>
);

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const onServiceWorkerUpdateReady = () => {
  window.location.reload();
};

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location && location.hash) {
    const anchorLink = document.querySelector(location.hash);
    anchorLink &&
      window.scrollTo({
        top: anchorLink.offsetTop,
      });
    return false;
  }
  return true;
};

export const onClientEntry = (
  _,
  { filename = "searchIndex.json", fetchOptions = {} }
) => {
  globalThis.__FUSE__ = globalThis.__FUSE__ || {};
  globalThis.__FUSE__.__loaded = fetch(
    `${__PATH_PREFIX__}/${filename}`,
    fetchOptions
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (fullIndex) {
      globalThis.__FUSE__ = fullIndex;
      return globalThis.__FUSE__;
    })
    .catch((e) => {
      console.log("Failed fetch search index");
      throw e;
    });
};
