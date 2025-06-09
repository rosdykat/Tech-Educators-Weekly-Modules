import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import tailwind
import tailwindcss from "@tailwindcss/vite";

// add tailwind plugin to array

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
