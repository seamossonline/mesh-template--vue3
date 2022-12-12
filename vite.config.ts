import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import webpack from 'webpack';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ],
  define: {
    global: {},
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "buffer": require.resolve("buffer"),
      "stream": require.resolve("stream")
    }
  },
})

//mesh webpack copy

module.exports = {
  resolve: {
    fallback: {
      buffer: require.resolve("buffer"),
      stream: require.resolve("stream"),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ],
  experiments: {
    asyncWebAssembly: true,
  },
};
*/