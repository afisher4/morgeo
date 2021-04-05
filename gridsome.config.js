module.exports = {
  siteName: 'Liquid Crystal Membrane',
  siteDescription: 'Scientific research on liquid crystal membranes and other related topics.',
  siteUrl: 'https://liquidcrystalmembrane.com',
  plugins: [
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     path: 'articles/**/*.md',
    //     typeName: 'Article',
    //     resolveAbsolutePaths: true,
    //     remark: {
    //       externalLinksTarget: '_blank',
    //       externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
    //     },
    //   },
    // },
    {
      use: '@gridsome/vue-remark',
      options: {
        baseDir: './articles',
        typeName: 'Article',
        template: './src/templates/Article.vue',
        pathPrefix: '/articles',
        resolveAbsolutePaths: true
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'G-FN4CZTSZ7G'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080
  }
}