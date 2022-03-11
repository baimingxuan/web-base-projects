import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 需要安装插件 @types/node -> yarn add @types/node -D
import { resolve } from 'path'

// 配置文档地址: https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  server: {
    port: 8888,
    open: true,
    cors: true,

    proxy: {
      '/api': {
        target: 'xxx.xx.xxx.xx',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
