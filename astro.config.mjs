import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  site: 'https://drajessicaalcala.com',
  integrations: [tailwind()],
  output: 'server',
  adapter: netlify(),
  redirects: {
    '/drajessicaalcala.netlify.app': 'https://drajessicaalcala.com',
    '/www.drajessicaalcala.com': 'https://drajessicaalcala.com'
  }
});