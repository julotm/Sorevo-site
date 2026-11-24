import { defineConfig } from 'astro/config';
export default defineConfig({ site: 'https://sorevo.vercel.app', trailingSlash: 'always', build: { format: 'directory' } });
