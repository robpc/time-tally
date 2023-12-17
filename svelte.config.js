import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			// pages: 'build',
			// assets: 'build',
			fallback: '404.html',
			prerender: {
				entries: []
			}
			// precompress: false,
			// strict: true,
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/time-tally' : ''
		}
	}
};

export default config;
