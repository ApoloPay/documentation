import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'ApoloPay Docs',
  tagline: 'Payment Button Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.apolopay.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ApoloPay', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi-docs
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "gateway", // Multi-instance support
        docsPluginId: "classic", // Default docs plugin
        config: {
          gateway: {
            specPath: "swagger-gateway.json",
            outputDir: "docs/gateway",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          }
        }
      },
    ]
  ],

  themes: ["docusaurus-theme-openapi-docs"],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ApoloPay Docs',
      logo: {
        alt: 'ApoloPay Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'SDK',
        },
        {
          to: '/docs/gateway/apolopay-gateway-payment-button',
          label: 'Gateway API',
          position: 'left',
        },
        {
          href: 'https://api.micro.apolopay.app/swagger',
          label: 'Microservice API',
          position: 'left',
        },
        {
          href: 'https://github.com/facebook/docusaurus', // Placeholder, maybe remove or point to ApoloPay repo
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'SDK',
              to: '/docs/intro',
            },
            {
              label: 'Gateway API',
              to: '/docs/gateway/apolopay-gateway-payment-button',
            },
          ],
        },
        {
          title: 'ApoloPay',
          items: [
            {
              label: 'Website',
              href: 'https://apolopay.app',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ApoloPay. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
