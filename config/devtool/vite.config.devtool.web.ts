import path from 'path';
import {
  defineConfig, mergeConfig,
  ResolvedConfig,
} from 'vite';

import root from '../helpers/path/root';

process.env.IS_DEVTOOL = 'true';
process.env.IS_DEVTOOL_WEB = 'true';

export default async (_: ResolvedConfig) => {
  const viteConfigDevtoolBase = (await import('./vite.config.devtool.base')).default;

  return mergeConfig(viteConfigDevtoolBase, defineConfig({
    root: path.resolve(root, 'src/devtool/versions/web'),
    define: {
      'process.env.IS_DEVTOOL_WEB': JSON.stringify(true),
    },
  }));
};
