import { defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { defaultTheme } from 'vuepress'
export default defineUserConfig({
    base: '/image-processing/',
    publicPath: '/image-processing/',
    port: 3001,
    lang: 'zh-CN',
    title: 'image-processing',
    description: '文档。',
    head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
    plugins: [
        backToTopPlugin(),
    ],
    markdown: {
        headers: {
            level: [2, 3, 4, 5],
        },
    },
    theme: defaultTheme({
        // 导航栏
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: 'Github',
                link: 'https://github.com/Sugarscat/',
            },
        ],
    }),
})
