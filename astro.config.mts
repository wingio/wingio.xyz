// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    site: "https://www.wingio.xyz",
    integrations: [sitemap(), svelte()],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler"
                }
            }
        }
    }
});
