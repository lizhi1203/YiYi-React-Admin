import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig(() => {
	return {
		resolve: {
			alias: {
				"@": resolve(__dirname, "./src")
			}
		},
		plugins: [react(), eslintPlugin()]
	};
});
