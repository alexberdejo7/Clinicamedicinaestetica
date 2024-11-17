import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://drajessicaalcala.com',
  integrations: [tailwind()],
  redirects: {
    'https://drajessicaalcala.netlify.app/*': {
      destination: 'https://drajessicaalcala.com/:splat',
      permanent: true
    },
    'https://www.drajessicaalcala.com/*': {
      destination: 'https://drajessicaalcala.com/:splat',
      permanent: true
    }
  }
});