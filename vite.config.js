import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/my_portfolio/", // add this field
  plugins: [react()],
  server: {
    port: 3000,
  },
});
