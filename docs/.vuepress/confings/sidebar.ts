import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/cheatSheet/arrayFn/': [
    {
      text: '数组方法',
      children: ['/cheatSheet/arrayFn/cancat.md', '/cheatSheet/arrayFn/forEach.md']
    }
  ]
}
