import path from 'path';
import {
  defineConfig, mergeConfig,
  ResolvedConfig,
} from 'vite';

import root from '../helpers/path/root';

process.env.IS_DEVTOOL = 'true';
process.env.IS_DEVTOOL_WEB_COMPONENTS = 'true';

export default async (_: ResolvedConfig) => {
  const viteConfigDevtoolBase = (await import('./vite.config.devtool.base')).default;

  return mergeConfig(viteConfigDevtoolBase, defineConfig({
    root: path.resolve(root, 'src/devtool/versions/web-components'),
    define: {
      'process.env.IS_DEVTOOL_WEB_COMPONENTS': JSON.stringify(true),
    },
  }));
};
