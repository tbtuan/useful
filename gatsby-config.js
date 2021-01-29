const plugins = [
  "gatsby-plugin-react-helmet",
  {
    resolve: "gatsby-plugin-emotion",
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "docs",
      path: `${__dirname}/content/`,
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: `${__dirname}/static/images/`,
    },
  },
  {
    resolve: "gatsby-plugin-mdx",
    options: {
      extensions: [".mdx", ".md"],
    },
  },
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "/useful",
      short_name: "/useful",
      start_url: "/",
      background_color: "#FFFFFF",
      theme_color: "#FFFFFF",
      display: "standalone",
      crossOrigin: "use-credentials",
      icon: `static/images/icon-512.png`,
      icons: [
        {
          src: "static/images/icon-512.png",
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
];

module.exports = {
  siteMetadata: {
    docsLocation: "https://github.com/tbtuan/useful/tree/master/content/",
    githubUrl: "https://github.com/tbtuan/useful",
  },
  plugins: plugins,
};
