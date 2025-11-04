// vite.config.dev.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // ✅ 로컬 개발에서는 base를 루트로!
});
