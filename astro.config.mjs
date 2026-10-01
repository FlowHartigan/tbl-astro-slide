import astroSlides from "@astro-slides/core";
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

export default defineConfig({
  integrations: [astroSlides()],
  vite: {
    resolve: {
      alias: {
        "@components": fileURLToPath(new URL("./components", import.meta.url)),
      },
    },
  },
});
