// @ts-check
import { defineConfig } from 'astro/config';

// En GitHub Pages la web vive en /patsehart-web/. Cuando se conecte el dominio
// propio (patsehart.com) basta con compilar con SITE_URL=https://patsehart.com BASE_PATH=/
const site = process.env.SITE_URL ?? 'https://rubenzor25-commits.github.io';
const base = process.env.BASE_PATH ?? '/patsehart-web';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  image: { responsiveStyles: true },
  devToolbar: { enabled: false },
});
