import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: "https://ViTuShek.github.io/vita_tusek.github.io", // your lowercase username goes here
  base: "vita_tusek.github.io",
  output: "static",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  vite: {
    base: "/vita_tusek.github.io", // Set the correct base path to match your repository name
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
