import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [tailwind()],
});
