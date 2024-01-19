import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  base: '/portfolio/',
  site: 'https://locatandre.github.io',
  integrations: [tailwind(), svelte(), sitemap()]
});