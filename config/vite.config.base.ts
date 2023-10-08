import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import { UserConfigExport } from 'vite';
import svgLoader from 'vite-svg-loader';

import { EnvironmentVariable } from './helpers/env';
import root from './helpers/path/root';

const src = path.resolve(__dirname, '../', 'src');
const outDir = path.join(root, 'build', EnvironmentVariable.OUTPUT_PATH);

const customTagElements = [
  'google-cast-launcher',
];

export default {
  resolve: {
    alias: {
      '@': src,
    },
  },
  optimizeDeps: {
    exclude: ['vue', 'pinia', 'vue-router'],
  },
  server: {
    host: true,
  },
  define: {
    'process.env.IS_DEV': JSON.stringify(EnvironmentVariable.IS_DEV),
    'process.env.PORT': JSON.stringify(EnvironmentVariable.PORT),
    'process.env.APP_VERSION': JSON.stringify(EnvironmentVariable.APP_VERSION),
    'process.env.IS_DEVTOOL': process.env.IS_DEVTOOL,
  },
  build: {
    outDir,
    ssr: false,
    minify: 'esbuild',
    emptyOutDir: true,
    sourcemap: process.env.mode === 'production',
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          flexbox: false, // TODO: true for smart-tv
          grid: false, // TODO: true for smart-tv
        }), // add options if needed
      ],
    },
  },
  plugins: [

    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => customTagElements.includes(tag),
        },
      },
    }),
    svgLoader(),
  ],
} as UserConfigExport;
