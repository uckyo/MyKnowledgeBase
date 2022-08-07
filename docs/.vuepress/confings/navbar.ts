import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
  {
    text: '速查手册',
    children: [
      {
        text: 'javascript',
        children: [{ text: '数组方法', link: '/cheatSheet/arrayFn/cancat.md' }]
      }
    ]
  }
]
