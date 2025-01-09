// @ts-check
import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import netlify from '@astrojs/netlify'
import auth from 'auth-astro';

// https://astro.build/config
export default defineConfig({
  integrations: [db(), auth()],
  output: "server",
  adapter: netlify(),
});