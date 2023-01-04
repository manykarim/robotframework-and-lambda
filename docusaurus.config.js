// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Robot Framework And Lambda',
  tagline: 'How to run your tests or tasks in Robot Framework with AWS Lambda',
  url: 'https://manykarim.github.io',
  baseUrl: '/robotframework-and-lambda/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'manykarim', // Usually your GitHub org/user name.
  projectName: 'robotframework-and-lambda', // Usually your repo name.
  trailingSlash: true,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://manykarim.github.io/robotframework-and-lambda',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Robot Framework And Lambda',
        logo: {
          alt: 'Robot Framework Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo.svg'
        },
        items: [
          {
            href: 'https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html',
            label: 'RF User Guide',
            position: 'right',
          },

          {
            href: 'https://slack.robotframework.org/',
            label: 'Robot Framework Slack',
            position: 'right',
          },
          {
            href: 'https://github.com/manykarim/robotframework-and-lambda',
            label: 'GitLab',
            position: 'right',
          },
          {
            href: 'https://github.com/manykarim/robotframework-and-lambda/issues/new',
            label: 'Did I miss a topic?',
            position: 'right'
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
                label: 'Robot Framework on AWS Lambda',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
            href: 'https://slack.robotframework.org/',
            label: 'Robot Framework Slack',
            position: 'right',
          },

            ],
          },
          {
            title: 'More',
            items: [
              {
            href: 'https://github.com/manykarim/robotframework-and-lambda',
            label: 'GitLab'
          },
          {
            href: 'https://github.com/manykarim/robotframework-and-lambda/issues/new',
            label: 'Did I miss a topic?'
          },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Robot Framework and AWS Lambda Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['robotframework'],
      },
    }),
    themes: [
      [
        '@easyops-cn/docusaurus-search-local',
        /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
        ({
          hashed: true,
          highlightSearchTermsOnTargetPage: true,
          explicitSearchResultPath: true,
          indexBlog: false,
          docsRouteBasePath: "/docs",
        }),
      ],
    ],
};

module.exports = config;
