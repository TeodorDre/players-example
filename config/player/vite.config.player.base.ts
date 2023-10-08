import * as path from 'path';
import esbuild from 'rollup-plugin-esbuild';
import { mergeConfig } from 'vite';

import { EnvironmentVariable } from '../helpers/env';
import viteConfigBase from '../vite.config.base';

const src = path.resolve(__dirname, '../../', 'src');

export default mergeConfig(viteConfigBase, {
  base: EnvironmentVariable.OUTPUT_PATH,
  resolve: {
    alias: {
      '@': src,
    },
  },
  server: {
    port: EnvironmentVariable.PORT,
  },
  plugins: [
    {
      ...esbuild({
        target: 'chrome73',
        include: /\.vue$/,
        loaders: {
          '.vue': 'js',
        },
      }),
      enforce: 'post',
    },
  ],
});

