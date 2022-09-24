module.exports = {
  base: '/uu-console/',
  lang: 'zh-CN',
  title: 'uu-console',
  description: 'Just uu-console',

  head: [
    ['link', { rel: 'icon', href: '/uu-console/favicon.ico' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  markdown: {
    headers: {
      level: [0, 0]
    }
  },

  themeConfig: {
    nav: [
      { text: '快速开始', link: '/guide/introduction', activeMatch: '/guide/' },
      { text: '文档', link: '/api/core', activeMatch: '/api/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '快速开始',
          items: [
            { text: '简介', link: '/guide/introduction' },
            { text: '安装', link: '/guide/start' }
          ]
        }
      ],
      '/api/': [
        {
          text: '文档',
          items: [
            { text: '输出', link: '/api/core' },
            { text: '主题', link: '/api/theme' },
            { text: '尺寸', link: '/api/size' },
            { text: '其他', link: '/api/other' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lennokiki/uu-console' }
    ],

    footer: {
      message: 'MIT License | Copyright © 2022-present lennokiki',
      copyright: 'ICP:京ICP备15058397号-2',
    }
  },
}
