import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "UnrealStudio-wiki",
  description: "Some experience",
  base: '/UnrealStudio-Wiki/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '新人指引', link: '/guide/' },
      { text: '项目文档', link: '/projects/' },
      { text: '学习资源', link: '/resources/' },
      { text: '往届存档', link: '/archive/' },
    ],

        sidebar: {
            '/guide/': [
                {
                    text: '新人指引',
                    items: [
                        { text: '概览', link: '/guide/' },
                        { text: '入职流程', link: '/guide/onboarding' },
                        { text: '常用工具', link: '/guide/tools' },
                    ]
                }
            ],
            '/projects/': [
                {
                    text: '项目文档',
                    items: [
                        { text: '概览', link: '/projects/' },
                        { text: '项目模板', link: '/projects/project-template' },
                    ]
                }
            ],
        },

        // 启用本地全文搜索（完全免费）
        search: {
            provider: 'local'
        },

        // 右上角 GitHub 链接
        socialLinks: [
            { icon: 'github', link: 'https://github.com/yuyixiaolan/UnrealStudio-Wiki' }
        ],

        // 显示最后更新时间
        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'short'
            }
        },

        // 编辑按钮（点击跳转到 GitHub 对应文件）
        editLink: {
            pattern: 'https://github.com/yuyixiaolan/UnrealStudio-Wiki',
            text: '在 GitHub 上编辑此页'
        }
    }
})
