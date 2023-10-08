import path from 'path';
import {
  defineConfig, mergeConfig,
  ResolvedConfig,
} from 'vite';

import { EnvironmentVariable } from '../helpers/env';
import root from '../helpers/path/root';
import viteConfigDevtoolBase from './vite.config.devtool.base';

export default (_: ResolvedConfig) => {
  return mergeConfig(viteConfigDevtoolBase, defineConfig({
    root: path.resolve(root, 'src/devtool/versions/combined'),
    define: {
      'process.env.WEB_DEVTOOL_PUBLIC_PATH': JSON.stringify(EnvironmentVariable.WEB_DEVTOOL_PUBLIC_PATH),
      'process.env.EMBED_DEVTOOL_PUBLIC_PATH': JSON.stringify(EnvironmentVariable.EMBED_DEVTOOL_PUBLIC_PATH),
      'process.env.SMART_DEVTOOL_PUBLIC_PATH': JSON.stringify(EnvironmentVariable.SMART_DEVTOOL_PUBLIC_PATH),
    },
  }));
};
