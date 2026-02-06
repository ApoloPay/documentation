import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import gatewaySidebar from "./docs/gateway/sidebar";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Payment Button SDK',
      items: [
        'sdk/intro',
        'sdk/installation',
        'sdk/usage',
      ],
    },
    {
      type: 'category',
      label: 'Gateway API',
      link: {
        type: 'generated-index',
        title: 'Gateway API',
        description: 'API Reference for the Gateway Payment Button',
        slug: '/category/gateway-api',
      },
      items: gatewaySidebar,
    },
  ],
};

export default sidebars;
