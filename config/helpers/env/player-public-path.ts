import { ConfigError } from '../error/config-error';

const playerPublicPath = process.env.PLAYER_PUBLIC_PATH;

if (!playerPublicPath) {
  // throw new ConfigError('Expect process.env.PLAYER_PUBLIC_PATH to be defined.');
}

export default playerPublicPath;
