import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "EcoForum",
        short_name: "EF",
        theme_color: "#fff", // The theme color of your app
        background_color: "#fff", // The background color of your app
        description: "Your forum for better planet",
        icons: [
          {
            src: "/icon.png",
            sizes: "72x72 96x96 128x128 256x256",
          },
        ],
      },
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        globPatterns: ["**/*.{jsx,js,css,html,ico,png,svg}"],

        cleanupOutdatedCaches: false,
        sourcemap: true,
      },

      devOptions: { enabled: true },
    }),
  ],
});
