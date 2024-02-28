// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Specify directories to allow serving files from
      allow: [
        // Allow serving files from the entire project
        '.',
        // Specifically allow the src directory, adjust the path as necessary
        './src',
      ],
    },
  },
})
