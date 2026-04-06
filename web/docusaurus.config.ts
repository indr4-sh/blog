import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Elias',
  tagline: 'DevOps, observabilidad, automatización y troubleshooting',
  favicon: 'img/logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'eliasgodoy', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'DevOps',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      },
      items: [
        //{to: '/', label: 'Inicio', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/docs', label: 'Notas', position: 'left'},
        //{to: '/projects', label: 'Proyectos', position: 'left'},
        //{to: '/about', label: 'Sobre mí', position: 'left'},
        //{to: '/contact', label: 'Contacto', position: 'right'},
        {
          href: 'https://github.com/indr4-sh',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
footer: {
      style: 'dark',
      links: [
        {
          title: 'Contenido',
          items: [
            {label: 'Blog', to: '/blog'},
            {label: 'Notas', to: '/docs'},
            //{label: 'Proyectos', to: '/projects'},
          ],
        },
        {
          title: 'Redes',
          items: [
            {label: 'GitHub', href: 'https://github.com/indr4-sh'},
            {label: 'YouTube', href: 'https://www.youtube.com/@Zwei-ni'},
            {label: 'LinkedIn', href: 'https://www.linkedin.com/in/elias-godoy-indr4/'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Elias Godoy.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
