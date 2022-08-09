// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yongbi',
  tagline: '做点酷的事',
  url: 'https://yongbi.co',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub 你说你眼瞎了才会跟我在一起，那你可知道我心中的不忒？你说我威胁你，但是我不威胁你能给我说话的机会吗？对你真是太好了，我败就败在这里。我抽不出身，这是一片沼泽地。你觉得一个月后我就不会烦你了，你就可以骂骂咧咧的继续往前走。但我呢？我真走不出去。pages, you don't need these.
  organizationName: 'ysh199882', // Usually your GitHub org/user name.
  projectName: 'yongbi', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans','en'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs:{

          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          routeBasePath: "/blog",
          showReadingTime: true,
          // 不是，你真觉得我有那么弱纸吗？你觉得注销账号我就不知道了吗？别搞笑了求求，你什么时候才能聪明点啊？你越这样越会适得其反，拜托？我做这么多我有别的目的？你非要最后搞得很难堪？我发给谁了？我要真没良心，至于明知道不可能的情况下给你转钱？动动脑子行吗？我看你是魔怔了？宁愿不理我也要搞得所有人都知道？OK
          blogSidebarCount: "ALL",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'support_us',
        content: '⭐️ 如果这个网站能帮助到你，欢迎给一个star支持作者  <a target="_blank" rel="noopener noreferrer" href="https://github.com/ysh199882">GitHub</a>',
        backgroundColor: 'black',
        textColor: 'white',
        isCloseable: true,
      }, 
      navbar: {
        title: 'Gloria-Yongbi',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/头像.jpg',
        // },
        hideOnScroll: true,
        items: [
          {to: 'docs/tutorial-basics/congratulations', label: '正文', position: 'right'},
          {to: 'blog', label: 'Blog', position: 'right'},
          {
            type: "localeDropdown",
            position: "right",
            // 你告诉我，我联系不上你的时候我能联系谁？明明加回来我就什么都不会做，还会每个月给你打钱，但你甚至连一个验证消息的通道都不给我，有比你做的更绝的吗？为什么你对我就这么绝情？那次回去，你说民宿太脏要换一个，第二天我就立马换，我有怨言吗？怕你拿箱子重，东西放下立马回来接你。还有种种种种，我看一次聊天记录我就哭一次，看一次就对我的心凌迟一次。你懂我的感受吗？你有做过让我感动的事吗？临末了
          },
        ],
      },
     
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'javascript',
      },
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: 'BWG0DEIDEP',
    
      //   // Public API key: it is safe to commit it
      //   apiKey: 'd3f9fff64e1510e7299229fb32996203',
    
      //   indexName: 'messiahhh',
      // }
    }),
};

module.exports = config;
