import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dadu 知识库",
  description: "A VitePress Site",
  srcDir: './src',
  cleanUrls:true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '学习笔记',
        items: [
          { text: 'React', link: '/Notes/React/Start'},
          { text: 'Typescript', link: '/Notes/Typescript/one' },
          { text: 'Electron', link: '/Notes/Electron/one' },
          { text: '设计模式', link: '/Notes/DesignPatterns/原型模式'}
        ]
      },
      {
        text: '面试题',
        link: '/Interview/HTTP',
      },
      {
        text: '代码片段',
        link: '/Snippets/one',
      }
    ],
    outline: {
      level: [1,2],
      label: '页面导航'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    sidebar: {
      "/Notes/": [
        {
          text: '设计模式',
          collapsed: true,
          items: [
            { text: '原型模式', link: '/Notes/DesignPatterns/原型模式'},
            { text: '单例模式', link: '/Notes/DesignPatterns/单例模式'}
          ]
        },
        {
          text: 'React',
          collapsed: true,
          items: [
            { text: 'Start', link: '/Notes/React/Start'},
            { text: 'JSX', link: '/Notes/React/JSX'},
            { text: 'Component', link: '/Notes/React/Component'},
            { text: 'Hooks', link: '/Notes/React/Hooks'},
            { text: 'Redux', link: '/Notes/React/Redux'},
            { text: 'React-Redux', link: '/Notes/React/React-Redux'},
          ]
        },
        {
          text: 'Typescript',
          collapsed: true,
          items: [
            { text: 'one', link: '/Notes/Typescript/one' },
            { text: 'two', link: '/Notes/Typescript/two'}
          ]
        },
        {
          text: 'Electron',
          collapsed: true,
          items: [
            { text: 'one', link: '/Notes/Electron/one' },
            { text: 'two', link: '/Notes/Electron/two' }
          ]
        }
      ],
      "/Snippets/": [
            {
            text: 'one',
            link: '/Snippets/one'
            },
            {
            text: 'two',
            link: '/Snippets/two'
            }
        ],
      "/Interview/": [
        {
          text: 'HTTP',
          link: '/Interview/HTTP'
        },
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/uckyo/uckyo.github.io' }
    ]
  }
})
