import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs';
import webpack from 'webpack';
const Webpack = new webpack.ProvidePlugin({
  Buffer: ["buffer", "Buffer"],
});

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "buffer": import("buffer"),
      "stream": import("stream"),
    }
  },
  plugins: [
    viteCommonjs(),
    vue(),
  ],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        // Solves:
        // https://github.com/vitejs/vite/issues/5308
        // add the name of your package
        esbuildCommonjs(['webpack','@emurgo/cardano-serialization-lib-nodejs','Webpack','stream','buffer','safe-buffer']),
      ],
    },
  },
  define: {
    global: {},
    asyncWebAssembly: true,
  },
});

/* left out of migration, not sure where to place
  experiments: {
    asyncWebAssembly: true,
  },
  */