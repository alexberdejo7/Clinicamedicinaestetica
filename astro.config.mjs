import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://drajessicaalcala.com',
  integrations: [tailwind()],
  redirects: {
    '/drajessicaalcala.netlify.app': 'https://drajessicaalcala.com',
    '/www.drajessicaalcala.com': 'https://drajessicaalcala.com'
  }
});