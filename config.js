const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://github.com/tbtuan/useful',
    trailingSlash: false,
  },
  header: {
    title: '/useful',
    githubUrl: 'https://github.com/tbtuan/useful',
    links: [{ text: '', link: '' }],
  },
  sidebar: {
    navigation: [
      { text: 'Commands', link: '/command' },
      { text: 'Languages', link: '/lang' },
      { text: 'Learning', link: '/learning' },
      { text: 'References', link: '/reference' },
      { text: 'Setups', link: '/setup' },
      { text: 'Shortcuts', link: '/shurtcut' },
      { text: 'Tools', link: '/tools' },
    ],
    links: [{ text: 'Github', link: 'https://github.com/tbtuan' }],
    ignoreIndex: true,
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
