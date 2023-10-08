import path from 'path';
import {
  defineConfig, mergeConfig,
} from 'vite';
import babel from 'rollup-plugin-babel';

import root from '../helpers/path/root';
import basePlayerViteConfig from './vite.config.player.base';

export default mergeConfig(basePlayerViteConfig, defineConfig({
  root: path.resolve(root, 'src/player/versions/smart'),
  plugins: [
    babel({
      babelrc: false,
      runtimeHelpers: true,
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: { browsers: ['chrome > 37'] },
            useBuiltIns: 'entry',
            corejs: '3.31',
          },
          '@babel/preset-typescript',
        ],
      ],
      plugins: [
        [
          '@babel/plugin-proposal-decorators',
          {
            decoratorsBeforeExport: true,
          },
        ],
        ['@babel/plugin-proposal-class-properties'],
        [
          '@babel/plugin-transform-runtime',
          {
            regenerator: true,
          },
        ],
      ],
    })
  ]
}));
