const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://github.com/tbtuan/useful',
    trailingSlash: false,
  },
  header: {
    title: '/useful',
    githubUrl: 'https://github.com/tbtuan/useful',
    helpUrl: '',
    tweetText: '',
    links: [{ text: '', link: '' }],
  },
  sidebar: {
    forcedNavOrder: [''], // /codeblock
    collapsedNav: [
      '/lang', // add trailing slash if enabled above /codeblock
    ],
    links: [{ text: 'Github', link: 'https://github.com/tbtuan' }],
    frontline: false,
    ignoreIndex: true,
    // title: "<a href='./'>graphql </a><div class='greenCircle'></div><a href='./'>react</a>",
  },
  siteMetadata: {
    title: '/useful',
    description: 'A site with useful things',
    docsLocation: 'https://github.com/tbtuan/useful/tree/master/content',
    favicon: 'https://github.com/favicon.ico',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: '/useful',
      short_name: '/useful',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
