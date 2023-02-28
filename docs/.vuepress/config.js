import { defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import Theme from './theme.config'
import langConfig from "./lang.config";
export default defineUserConfig({
    base: '/image-processing/',
    publicPath: '/image-processing/',
    port: 3001,
    lang: 'zh-CN.js',
    title: 'image-processing',
    description: '文档。',
    head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
    plugins: [
        backToTopPlugin(),
    ],
    theme:Theme,
    locales:langConfig,
})
