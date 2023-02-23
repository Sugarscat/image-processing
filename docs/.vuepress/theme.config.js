import {defaultTheme} from 'vuepress';

export default defaultTheme({
    // 语言
    locales: {
        '/': {
            selectLanguageName: '简体中文',
            home: '/',
            // 导航栏
            navbar: [
                {
                    text: '首页',
                    link: '/',
                },
                {
                    text: '文档',
                    link: '/docs.html',
                },
                {
                    text: '贡献指南',
                    link: '/CONTRIBUTING.html',
                },
                {
                    text: 'Github',
                    link: 'https://github.com/Sugarscat/image-processing',
                },
            ],
            // 侧边栏对象
            sidebar: {
                '/': [],
                '/docs.html': [
                    {
                        text: 'Reference',
                        children: [],
                    },
                ],
                '/CONTRIBUTING.html': [
                    {
                        text: 'Reference',
                        children: [],
                    },
                ]
            },
        },
        '/en/': {
            selectLanguageName: 'English',
            home: '/en/',
            // 导航栏
            navbar: [
                {
                    text: 'Home',
                    link: '/en/',
                },
                // {
                //     text: '文档',
                //     link: '/docs.html',
                // },
                // {
                //     text: '贡献指南',
                //     link: '/CONTRIBUTING.html',
                // },
                {
                    text: 'Github',
                    link: 'https://github.com/Sugarscat/image-processing',
                },
            ],
            // 侧边栏对象
            sidebar: {
                '/': [],
                // '/docs.html': [
                //     {
                //         text: 'Reference',
                //         children: [],
                //     },
                // ],
                // '/CONTRIBUTING.html': [
                //     {
                //         text: 'Reference',
                //         children: [],
                //     },
                // ]
            },
        }
    },
});