import typescript from '@rollup/plugin-typescript';
import * as path from 'path';
import * as ttypescript from 'ttypescript';
import {
  mergeConfig,
} from 'vite';

import root from '../helpers/path/root';
import basePlayerViteConfig from './vite.config.player.base';

const rootDir = path.resolve(__dirname, root, 'src/player');
const rootPlayerDir = path.resolve(rootDir, 'versions/web-components');
const outDir = path.resolve(__dirname, root, 'lib');
const declarationDir = path.resolve(outDir);

const excludedDeclarationFolders = [
  path.resolve(root, 'node_modules/**'),
  path.resolve(rootDir, 'versions/embed'),
  path.resolve(rootDir, 'versions/smart'),
  path.resolve(rootDir, 'versions/web'),
];

export default mergeConfig(basePlayerViteConfig, {
  build: {
    lib: {
      entry: path.resolve(__dirname, rootPlayerDir, 'index.ts'),
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    outDir,
    rollupOptions: {
      plugins: [
        typescript({
          typescript: ttypescript,
          declaration: true,
          declarationDir,
          rootDir,
          noEmitOnError: false,
          exclude: excludedDeclarationFolders,
          compilerOptions: {
            'plugins': [
              { 'transform': 'typescript-transform-paths', 'useRootDirs': true },
              { 'transform': 'typescript-transform-paths', 'useRootDirs': true, 'afterDeclarations': true },
            ],
          },
        }),
      ],
    },
  },
});
