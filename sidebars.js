/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'About',
    {
      type: 'category',
      label: 'JavaScript',
      link: {
        type: 'doc',
        id: 'javascript/basic',
      },
      items: [
        'javascript/数组',
      ],
    },
    {
      type: 'category',
      label: 'Typescript',
      items: [
        {
          type: 'doc',
          id: 'typescript/config',
          label: 'tsconfig.json'
        }
      ]
    },
    {
      type: 'category',
      label: 'React',
      items: [
        {
          type: 'doc',
          id: 'react/nextjs',
          label: 'next.js'
        }
      ]
    },
    {
      type: 'category',
      label: 'Life',
      items: [
        {
          type: 'doc',
          id: 'life/basic',
        }
      ]
    },
    {
      type:'category',
      label:'算法',
      items:[
        {
          type:'doc',
          id:'algorithm/写在前面'
        },
        {
          type:'doc',
          id:'algorithm/数组二分法查找'
        },
        {
          type:'doc',
          id:'algorithm/合并数组区间'
        },
        {
          type:'doc',
          id:'algorithm/排序算法'
        }
        
      ]
    },
    {
      type:'category',
      label:'canvas',
      items:[
        {
          type:'doc',
          id:'canvas/readme'
        }
      ]
    },
    {
      type:'category',
      label:'work',
      items:[
        {
          type:'doc',
          id:'workHard/readme'
        }
      ]
    },
    'npm',
    'netLify',
    '性能优化',
    '奇思妙想',
  ]
};

module.exports = sidebars;
