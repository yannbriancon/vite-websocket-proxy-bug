import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
        '/ws': {
            target: 'http://192.168.2.2',
            ws: true
        }
    }
}
})
