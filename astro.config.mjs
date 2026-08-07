// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://web-1-e4ik9zz3c-alancius-projects.vercel.app',
  output: 'static',
  server: {
    host: '0.0.0.0'
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});