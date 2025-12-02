import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    // PWA só roda em build, nunca no dev
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: false, // 🔥 ESSA LINHA DESATIVA SW NO DEV
      },
      includeAssets: ["favicon.ico", "apple-touch-icon.png"],
      manifest: {
        name: "Solivela",
        short_name: "Solivela",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          }
        ],
      },
    }),
  ],

  server: {
    port: 5173,
  },
});
