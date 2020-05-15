module.exports = {
  base: '/',
  title: '埃尔维雅之快乐生活',
  description: '忍',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '../img/xxx.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ["link", { rel: "manifest", href: "/manifest.json" }],
    // 更多配置可以参考 https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/.vuepress/config.js
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],

  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    nav: [
      {
        text: 'Blog',
        link: '/2019/09/03/posts/',       // 默认走_posts文件夹
      },
      {
        text: 'Main',
        link: '/photography/',   // 走_photography文件夹 ，，自己新建
      },
      {
        text: 'React',
        link: '/react/',   // 走about文件夹 ，，自己新建
      },
      {
        text: 'JavaScript',
        link: '/javaScript/',   // 走about文件夹 ，，自己新建
      },
      {
        text: 'Vue',
        link: '/vue/',   // 走about文件夹 ，，自己新建
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
      const classify = ['photography','vue','posts','javaScript','react']
      classify.map(function (item) {
        let photographyDirectoryClassifier = {
          id: item,
          dirname: '_' + item,
          path: '/' + item + '/',
          itemPermalink: '/' + item + '/' + ':year/:month/:day/:slug',
          pagination: {
            lengthPerPage: 10,
          },
        }
        blogPluginOptions.directories.push(photographyDirectoryClassifier)
      })
      return blogPluginOptions;
    },
  },
  plugins: [
    '@vuepress/back-to-top',           // 顶部插件
    ['vuepress-plugin-smooth-scroll'],
    ['vuepress-plugin-reading-progress'],
  ],
}
