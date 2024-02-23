// import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// // https://vitejs.dev/config/
// export default defineConfig({
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   plugins: [react()],
// });

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [react()],
}
