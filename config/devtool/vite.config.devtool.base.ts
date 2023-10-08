import * as path from 'path';
import { defineConfig, mergeConfig } from 'vite';

import { EnvironmentVariable } from '../helpers/env';
import root from '../helpers/path/root';
import viteConfigBase from '../vite.config.base';

const src = path.resolve(root, 'src');

export default mergeConfig(viteConfigBase, defineConfig({
  base: EnvironmentVariable.OUTPUT_PATH,
  resolve: {
    alias: {
      '@': src,
    },
  },
  server: {
    port: EnvironmentVariable.PORT,
    hmr: false,
  },
  define: {
    'process.env.PLAYER_PUBLIC_PATH': JSON.stringify(EnvironmentVariable.PLAYER_PUBLIC_PATH),
  },
}));
