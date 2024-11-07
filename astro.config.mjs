import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://sethclim.github.io/',
  base: 'my-portfolio',
  integrations: [react()]
});