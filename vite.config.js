/* import ViteCSSExportPlugin from 'vite-plugin-css-export'; */
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()/* , ViteCSSExportPlugin() */],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});