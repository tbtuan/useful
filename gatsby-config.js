require("dotenv").config();
const config = require("./config");
const plugins = [
  {
    resolve: `gatsby-plugin-csp`,
    options: {
      directives: {
        "style-src": `'self' 'unsafe-inline' fonts.googleapis.com`,
      },
    },
  },
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
      component: require.resolve("./src/templates/index.js"),
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
];
// check and add pwa functionality
if (config.pwa && config.pwa.enabled && config.pwa.manifest) {
  plugins.push({
    resolve: `gatsby-plugin-manifest`,
    options: { ...config.pwa.manifest },
  });
  plugins.push({
    resolve: "gatsby-plugin-offline",
    options: {
      appendScript: require.resolve(`./src/custom-sw-code.js`),
    },
  });
} else {
  plugins.push("gatsby-plugin-remove-serviceworker");
}

// check and remove trailing slash
if (config.gatsby && !config.gatsby.trailingSlash) {
  plugins.push("gatsby-plugin-remove-trailing-slashes");
}

module.exports = {
  pathPrefix: config.gatsby.pathPrefix,
  siteMetadata: {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
    docsLocation: config.siteMetadata.docsLocation,
    headerTitle: config.header.title,
    githubUrl: config.header.githubUrl,
    headerLinks: config.header.links,
    siteUrl: config.gatsby.siteUrl,
  },
  plugins: plugins,
};
