import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import path from 'path'
import { fileURLToPath, URL } from 'node:url'
import { codeInspectorPlugin } from 'code-inspector-plugin'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    codeInspectorPlugin({
      bundler: 'vite',
    }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      // '@': path.resolve(__dirname, './src'),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.styl'],
    dedupe: ['vue-demi'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        // ✅ 全局注入，所有 .vue 组件的 <style lang="scss"> 自动可用
        additionalData: `@use "@/styles/common.scss" as *;`,
      },
    },
  },
})
