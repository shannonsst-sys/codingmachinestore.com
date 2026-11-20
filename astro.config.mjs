// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  redirects: {
    '/products/dy-8/': '/products/dy-8b/',
  },
});
