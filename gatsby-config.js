require("dotenv").config();
const plugins = [
  {
    resolve: `gatsby-plugin-csp`,
    options: {
      mergeScriptHashes: false,
      mergeStyleHashes: false,
      directives: {
        "script-src": `'self' 'unsafe-inline' 'unsafe-eval'`,
        "style-src": `'self' 'unsafe-inline'`,
        "style-src": `'self' 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com`,
        "font-src": `'self' data: fonts.gstatic.com`,
      },
    },
  },
  {
    resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
    options: {
      analyzerMode: `server`,
      analyzerPort: `8888`,
    },
  },
  "gatsby-disable-404",
  "gatsby-plugin-react-helmet",
  {
    resolve: `gatsby-plugin-emotion`,
  },
  {
    resolve: "gatsby-plugin-typography",
    options: {
      pathToConfigModule: "./src/utils/typography",
    },
  },
  "gatsby-plugin-sitemap",
  {
    resolve: "gatsby-plugin-layout",
    options: {
      component: require.resolve("./src/components/index.js"),
    },
  },
  "gatsby-plugin-catch-links",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "docs",
      path: `${__dirname}/content/`,
    },
  },
  "gatsby-plugin-catch-links",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: `${__dirname}/images/`,
    },
  },
  {
    resolve: "gatsby-plugin-mdx",
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: "gatsby-remark-copy-linked-files",
        },
      ],
      extensions: [".mdx", ".md"],
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "/useful",
      short_name: "/useful",
      start_url: "/",
      background_color: "#6b37bf",
      theme_color: "#6b37bf",
      display: "standalone",
      crossOrigin: "use-credentials",
      icon: `images/icon-512.png`,
      icons: [
        {
          src: "images/icon-512.png",
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
  {
    resolve: "gatsby-plugin-offline",
    options: {
      appendScript: require.resolve(`./src/custom-sw-code.js`),
    },
  },
  "gatsby-plugin-remove-trailing-slashes",
];

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: "/useful",
    description: "A site with useful things",
    docsLocation: "https://github.com/tbtuan/useful/tree/master/content",
    headerTitle: "/useful",
    githubUrl: "https://github.com/tbtuan/useful",
    siteUrl: "https://github.com/tbtuan/useful",
  },
  plugins: plugins,
};
