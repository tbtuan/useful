const plugins = [
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
      background_color: "#FFFFFF",
      theme_color: "#FFFFFF",
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
      importWorkboxFrom: `local`,
      cacheId: `gatsby-plugin-offline`,
      // Don't cache-bust JS or CSS files, and anything in the static directory,
      // since these files have unique URLs and their contents will never change
      dontCacheBustURLsMatching: /(\.js$|\.css$|static\/)/,
      runtimeCaching: [
        {
          // Use cacheFirst since these don't need to be revalidated (same RegExp
          // and same reason as above)
          urlPattern: /(\.js$|\.css$|static\/)/,
          handler: `CacheFirst`,
        },
        {
          // page-data.json files are not content hashed
          urlPattern: /^https?:.*\page-data\/.*\/page-data\.json/,
          handler: `NetworkFirst`,
        },
        {
          // Add runtime caching of various other page resources
          urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
          handler: `StaleWhileRevalidate`,
        },
        {
          // Google Fonts CSS (doesn't end in .css so we need to specify it)
          urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
          handler: `StaleWhileRevalidate`,
        },
      ],
      skipWaiting: true,
      clientsClaim: true,
    },
    // options: {
    //   appendScript: require.resolve(`./src/sw.js`),
    // },
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
