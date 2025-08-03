import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ABDN Freshmen Handbook",
  description: "阿伯丁数据科学与人工智能学院新生手册指南",

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "ABDN 新生手册",
      description: "阿伯丁数据科学与人工智能学院新生手册指南",
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '新生指南', link: '/guide/' },
          { text: '学习资源', link: '/guide/study/' },
          { text: '生活指南', link: '/guide/life/' },
          { text: '关于项目', link: '/README' },
        ],
        
        sidebar: {
          '/guide/': [
            {
              text: '🎓 新生必读',
              collapsed: false,
              items: [
                { text: '入学指南总览', link: '/guide/' },
                { text: '入学前准备', link: '/guide/preparation' },
                { text: '注册报到流程', link: '/guide/registration' },
                { text: '校园导览', link: '/guide/campus-tour' }
              ]
            },
            {
              text: '📚 学习生活',
              collapsed: false,
              items: [
                { text: '专业介绍', link: '/guide/study/' },
                { text: '课程规划', link: '/guide/study/curriculum' },
                { text: '学习资源', link: '/guide/study/resources' },
                { text: '考试指南', link: '/guide/study/exams' },
                { text: '毕业论文', link: '/guide/study/thesis' }
              ]
            },
            {
              text: '🏠 校园生活',
              collapsed: false,
              items: [
                { text: '生活概览', link: '/guide/life/' },
                { text: '住宿指南', link: '/guide/life/accommodation' },
                { text: '美食推荐', link: '/guide/life/food' },
                { text: '娱乐休闲', link: '/guide/life/entertainment' },
                { text: '周边购物', link: '/guide/life/shopping' }
              ]
            },
            {
              text: '🛠️ 实用工具',
              collapsed: false,
              items: [
                { text: '常用软件', link: '/guide/tools/software' },
                { text: '学习插件', link: '/guide/tools/plugins' },
                { text: '作业参考', link: '/guide/tools/assignments' },
                { text: '在线工具', link: '/guide/tools/online' }
              ]
            },
            {
              text: '❓ 常见问题',
              collapsed: false,
              items: [
                { text: 'FAQ', link: '/guide/faq' },
                { text: '联系方式', link: '/guide/contact' }
              ]
            }
          ]
        },
        footer: {
          message: '根据 知识共享署名 4.0 国际许可协议 进行许可',
          copyright: 'Copyright © 2025 AptS:1547'
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        outline: {
          label: '页面导航'
        },
        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
      }
    },
    // en: {
    //   label: 'English',
    //   lang: 'en-US',
    //   title: "ABDN Freshmen Handbook",
    //   description: "Aberdeen Institude of Data Science and Artificial Intelligence Freshman Handbook Guide",
    //   themeConfig: {
    //     nav: [
    //       { text: 'Home', link: '/en/' },
    //       { text: 'Guide', link: '/en/guide/' },
    //       { text: 'Study', link: '/en/guide/study/' },
    //       { text: 'Life', link: '/en/guide/life/' },
    //       { text: 'About', link: '/en/README' },
    //     ],
        
    //     sidebar: {
    //       '/en/guide/': [
    //         {
    //           text: '🎓 Essential for Freshmen',
    //           collapsed: false,
    //           items: [
    //             { text: 'Guide Overview', link: '/en/guide/' },
    //             { text: 'Pre-arrival Preparation', link: '/en/guide/preparation' },
    //             { text: 'Registration Process', link: '/en/guide/registration' },
    //             { text: 'Campus Tour', link: '/en/guide/campus-tour' }
    //           ]
    //         },
    //         {
    //           text: '📚 Academic Life',
    //           collapsed: false,
    //           items: [
    //             { text: 'Course Introduction', link: '/en/guide/study/' },
    //             { text: 'Curriculum Planning', link: '/en/guide/study/curriculum' },
    //             { text: 'Study Resources', link: '/en/guide/study/resources' },
    //             { text: 'Exam Guide', link: '/en/guide/study/exams' },
    //             { text: 'Thesis Guide', link: '/en/guide/study/thesis' }
    //           ]
    //         },
    //         {
    //           text: '🏠 Campus Life',
    //           collapsed: false,
    //           items: [
    //             { text: 'Life Overview', link: '/en/guide/life/' },
    //             { text: 'Accommodation', link: '/en/guide/life/accommodation' },
    //             { text: 'Food Guide', link: '/en/guide/life/food' },
    //             { text: 'Entertainment', link: '/en/guide/life/entertainment' },
    //             { text: 'Shopping', link: '/en/guide/life/shopping' }
    //           ]
    //         },
    //         {
    //           text: '🛠️ Useful Tools',
    //           collapsed: false,
    //           items: [
    //             { text: 'Software', link: '/en/guide/tools/software' },
    //             { text: 'Study Plugins', link: '/en/guide/tools/plugins' },
    //             { text: 'Assignment Reference', link: '/en/guide/tools/assignments' },
    //             { text: 'Online Tools', link: '/en/guide/tools/online' }
    //           ]
    //         },
    //         {
    //           text: '❓ FAQ',
    //           collapsed: false,
    //           items: [
    //             { text: 'Frequently Asked Questions', link: '/en/guide/faq' },
    //             { text: 'Contact', link: '/en/guide/contact' }
    //           ]
    //         }
    //       ]
    //     },
    //     footer: {
    //       message: 'Licensed under the Creative Commons Attribution 4.0 International License',
    //       copyright: 'Copyright © 2025 AptS:1547'
    //     },
    //     docFooter: {
    //       prev: 'Previous page',
    //       next: 'Next page'
    //     },
    //     outline: {
    //       label: 'On this page'
    //     },
    //     lastUpdated: {
    //       text: 'Last updated',
    //       formatOptions: {
    //         dateStyle: 'short',
    //         timeStyle: 'medium'
    //       }
    //     }
    //   }
    // }
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh_CN' }],
    ['meta', { name: 'og:title', content: 'ABDN Freshmen Handbook' }],
    ['meta', { name: 'og:site_name', content: 'ABDN Freshmen Handbook' }],
    ['meta', { name: 'og:url', content: 'https://abdn-freshmen-handbook.docs.esap.cc/' }],
  ],

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AptS-1547/ABDN-Handbook' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search Documentation',
                buttonAriaLabel: 'Search Documentation'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear search',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Navigate'
                }
              }
            }
          }
        }
      }
    },

    editLink: {
      pattern: 'https://github.com/AptS-1547/ABDN-Handbook/edit/master/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  },

  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    }
  }
})
