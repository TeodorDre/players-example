import path from 'path';
import {
  defineConfig, mergeConfig,
  ResolvedConfig,
} from 'vite';

import root from '../helpers/path/root';
import viteConfigDevtoolBase from './vite.config.devtool.base';

process.env.IS_DEVTOOL = 'true';
process.env.IS_DEVTOOL_SMART = 'true';

export default (_: ResolvedConfig) => {
  return mergeConfig(viteConfigDevtoolBase, defineConfig({
    root: path.resolve(root, 'src/devtool/versions/smart'),
    define: {
      'process.env.IS_DEVTOOL_SMART': JSON.stringify(true),
    },
  }));
};
