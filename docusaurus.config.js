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
  // If you aren't using GitHub。pages, you don't need these.
  organizationName: 'ysh199882', // Usually your GitHub org/user name.
  projectName: 'yongbi', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'zh-Hans',
  //   locales: ['zh-Hans','en'],
  //   localeConfigs: {
  //     en: {
  //       htmlLang: 'en-GB',
  //     },
  //   },
  // },

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
        backgroundColor: 'white',
        textColor: 'black',
        isCloseable: true,
      }, 
      navbar: {
        title: 'Coraline_',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/头像.jpg',
        // },
        hideOnScroll: true,
        items: [
          {to: 'docs/About', label: '正文', position: 'right'},
          {to: 'blog', label: 'Blog', position: 'right'},
          {
            type: "localeDropdown",
            position: "right",
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
