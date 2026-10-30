import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 微前端子应用：端口固定 7201（strictPort 占用即报错），
  // 开启 CORS 允许主应用（localhost:7200）跨源拉取本应用资源
  server: {
    port: 7201,
    strictPort: true,
    cors: true,
  },
})
