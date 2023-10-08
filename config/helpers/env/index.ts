import appVersion from './app-version';
import embedDevtoolPublicPath from './embed-devtool-publlc-path';
import isDev from './is-dev';
import outputPath from './output-path';
import playerPublicPath from './player-public-path';
import port from './port';
import publicPath from './public-path';
import smartDevtoolPublicPath from './smart-devtool-public-path';
import webDevtoolPublicPath from './web-devtool-public-path';
import webComponentsDevtoolPublicPath from './web-components-devtool-public-path';

export const EnvironmentVariable = {
  PORT: port,
  APP_VERSION: appVersion,
  OUTPUT_PATH: outputPath,
  PLAYER_PUBLIC_PATH: playerPublicPath,
  WEB_DEVTOOL_PUBLIC_PATH: webDevtoolPublicPath,
  EMBED_DEVTOOL_PUBLIC_PATH: embedDevtoolPublicPath,
  SMART_DEVTOOL_PUBLIC_PATH: smartDevtoolPublicPath,
  WEB_COMPONENTS_DEVTOOL_PUBLIC_PATH: webComponentsDevtoolPublicPath,
  PUBLIC_PATH: publicPath,
  IS_DEV: isDev,
};
