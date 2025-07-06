import { qwikVite } from '@builder.io/qwik/optimizer'
import tsConfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		qwikVite({
			csr: true,
		}),
		tsConfigPaths(),
	],
})
