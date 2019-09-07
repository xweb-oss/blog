module.exports = {
  base:'/',
  title: '嗯哼Blog',
  description: 'This is a blog example built by VuePress',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '../img/xxx.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],

  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    nav: [
      {
        text: 'Blog',
        link: '/2019/09/05/posts/',       // 默认走_posts文件夹
        items: [
          // 默认生成右测边栏 
        ],
      },
      {
        text: '前端基础',
        link: '/photography/',   // 走_photography文件夹 ，，自己新建
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
      '/android/': ["","android1"],
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
          text: '生命不息 , 马杀鸡不停',
          link: '',
        },
        {
          text: '人不狠,成不了大事',
          link: '',
        },
      ],
    },
    modifyBlogPluginOptions(blogPluginOptions) { 
      const classify = ['photography','about']
      classify.map(function(item){
       let photographyDirectoryClassifier = {
          id: item,
          dirname: '_'+item,
          path: '/'+item+'/',
          itemPermalink: '/'+item+'/'+':year/:month/:day/:slug',
          pagination: {
            lengthPerPage: 5,
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
  ]
}
