module.exports = {
  base: '/',
  title: '前端之路',
  description: '技术越好,脾气越小。人丑事多',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '../img/xxx.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ["link", { rel: "manifest", href: "/manifest.json" }],
    // 更多配置可以参考 https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/.vuepress/config.js
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],

  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    nav: [
      // {
      //   text:'HOME',
      //   link:'/'
      // },
      {
        text: 'Blog',
        link: '/2019/09/03/posts/',       // 默认走_posts文件夹
        items: [
          // 默认生成右测边栏 
        ],
      },
      {
        text: 'Main',
        link: '/photography/',   // 走_photography文件夹 ，，自己新建
        items: [
          // 默认生成右测边栏 
        ],
      },
      {
        text: '关于',
        link: '/about/2019/09/04/about/',   // 走about文件夹 ，，自己新建
      },
      {
        text: 'Github',
        link: 'https://github.com/xweb-oss',
      },
      {
        text: 'Gitee',
        link: 'https://gitee.com/wangchengzhu/dashboard',
      }
    ],
    sidebar: {
      '/android/': ["", "android1"],
    },
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/xweb-oss',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/_ulivz',
        },
      ],
      copyright: [
        {
          text: '经不住流年似水，逃不过此间少年',
        },
      ],
    },
    modifyBlogPluginOptions(blogPluginOptions) {
      const classify = ['photography', 'about','posts']
      classify.map(function (item) {
        let photographyDirectoryClassifier = {
          id: item,
          dirname: '_' + item,
          path: '/' + item + '/',
          itemPermalink: '/' + item + '/' + ':year/:month/:day/:slug',
          pagination: {
            lengthPerPage: 5,
          },
        }
        blogPluginOptions.directories.push(photographyDirectoryClassifier)
      })
      return blogPluginOptions;
    },
    pwa: {
      iconPaths: {
        favicon32: './favicon.ico',
        favicon16: './favicon.ico',
        appleTouchIcon: './favicon.ico',
        maskIcon: './favicon.ico',
        msTileImage: './favicon.ico'
      }
    }
  },
  plugins: [
    '@vuepress/pwa',{

    },
    '@vuepress/back-to-top',           // 顶部插件
    ['vuepress-plugin-smooth-scroll'],
    ['vuepress-plugin-reading-progress'],
  ],
}
