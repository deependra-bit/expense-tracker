// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// import path from 'path'

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   base: "/expense-tracker/",
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },
// })
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// import path from 'path'
// import { fileURLToPath } from 'url'

// // Polyfill __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   base: "/expense-tracker/",
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },
// })
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   base: '/expense-tracker/',           // <-- your repo name for GitHub Pages
//   resolve: {
//     alias: {
//       '@': '/src',                     // <-- no __dirname, no path, no errors
//     },
//   },
// })
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// import path from 'path'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   base: "/expense-tracker/",   // this must match your repo name!
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src')
//     }
//   }
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/expense-tracker/',   // 👈 Required for GitHub Pages
})
