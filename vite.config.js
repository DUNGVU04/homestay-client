import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://homestay777.mine.bz/",
  //       secure: false,
  //     },
  //   },
  // },
  plugins: [react()],
});
