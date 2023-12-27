import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  base: "/portfolio",
  site: "https://locatandre.github.io",
  integrations: [tailwind(), svelte()]
});