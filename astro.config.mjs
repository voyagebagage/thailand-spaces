import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
// import { v4 as uuidv4 } from "uuid";
import react from "@astrojs/react";

import qwikdev from "@qwikdev/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), qwikdev()],
  // site: "https://numonu.github.io",
  // base: "/Virtual-Tour"
  // output: "server",
});
