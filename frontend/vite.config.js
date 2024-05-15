// // import { defineConfig } from 'vite'
// // import react from '@vitejs/plugin-react'

// // // https://vitejs.dev/config/
// // export default defineConfig({
// //   plugins: [react()],
// // })


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// // import cors from '@koa/cors'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     // middleware: [cors()], // Use CORS middleware
//     fs: {
//       // Specify directories to allow serving files from
//       allow: [
//         // Allow serving files from the entire project
//         '.',
//         // Specifically allow the src directory, adjust the path as necessary
//         './src',
//       ],
//     },
//   },
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  base: '/',  // Ensure the base path is correctly set
});
