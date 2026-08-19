import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  site: 'https://gadielsampaio.github.io/',
  base: '/analog-obsession',
  image: {
    domains: ['analogobsession.com']
  },
  build: {
    format: 'file',
    inlineStylesheets: 'never',
  },
});
