const plugins = [
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
      component: require.resolve("./src/index.js"),
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
      workboxConfig: {
        runtimeCaching: [
          {
            urlPattern: /(\.js$|\.css$|static\/)/,
            handler: `CacheFirst`,
          },
          {
            urlPattern: /^https?:.*\/page-data\/.*\/(page-data|app-data)\.json$/,
            handler: `NetworkFirst`,
            options: {
              networkTimeoutSeconds: 3,
            },
          },
          {
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `StaleWhileRevalidate`,
          },
          {
            urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
            handler: `StaleWhileRevalidate`,
          },
          {
            urlPattern: /\/$/,
            handler: `NetworkFirst`,
            options: {
              networkTimeoutSeconds: 3,
            },
          },
        ],
      },
    },
  },
  "gatsby-plugin-remove-trailing-slashes",
];

module.exports = {
  siteMetadata: {
    title: "/useful",
    description: "A site with useful things",
    docsLocation: "https://github.com/tbtuan/useful/tree/master/content",
    headerTitle: "/useful",
    siteUrl: "https://github.com/tbtuan/useful",
  },
  plugins: plugins,
};
