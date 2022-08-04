import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { navbar } from './confings/navbar'
import { sidebar } from './confings/sidebar'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '前端知识仓库',
  description: '我自己的前端知识仓库及速查手册',
  theme: defaultTheme({
    navbar,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    tip: '提示',
    warning: '注意',
    danger: '警告',
    // 404 page
    notFound: ['这里什么都没有', '我们怎么到这来了？', '这是一个 404 页面', '看起来我们进入了错误的链接'],
    backToHome: '返回首页',
    // a11y
    openInNewWindow: '在新窗口打开',
    toggleColorMode: '切换颜色模式',
    toggleSidebar: '切换侧边栏'
  })
})
