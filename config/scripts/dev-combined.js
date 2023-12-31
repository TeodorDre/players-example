const concurrently = require('concurrently');

const commands = [
  {
    name: 'DevTool Combined',
    command: '\
      PORT=8080 \
      WEB_DEVTOOL_PUBLIC_PATH=http://localhost:8081/ \
      EMBED_DEVTOOL_PUBLIC_PATH=http://localhost:8083/ \
      SMART_DEVTOOL_PUBLIC_PATH=http://localhost:8085\
      npm run dev:devtool:combined \
    ',
    prefixColor: 'yellow.bold',
  },
  {
    name: 'Devtool Web',
    command: '\
      PORT=8081 \
      PLAYER_PUBLIC_PATH=http://localhost:8082/ \
      npm run dev:devtool:web \
    ',
    prefixColor: 'cyan.bold',
  },
  {
    name: 'Player  Web',
    command: '\
      PORT=8082 \
      npm run dev:player:web \
    ',
    prefixColor: 'cyan.bold',
  },
  {
    name: 'Devtool Embed',
    command: '\
      PORT=8083 \
      PLAYER_PUBLIC_PATH=http://localhost:8084/ \
      npm run dev:devtool:embed \
    ',
    prefixColor: 'cyan.bold',
  },
  {
    name: 'Player Embed',
    command: '\
      PORT=8084 \
      npm run dev:player:embed \
    ',
    prefixColor: 'blue.bold',
  },
  {
    name: 'Devtool Smart',
    command: '\
      PORT=8085 \
      PLAYER_PUBLIC_PATH=http://localhost:8086/ \
      npm run dev:devtool:smart \
    ',
    prefixColor: 'cyan.bold',
  },
  {
    name: 'Player Smart',
    command: '\
      PORT=8086 \
      npm run dev:player:smart \
    ',
    prefixColor: 'cyan.bold',
  },
  {
    name: 'Devtool Web components',
    command: '\
      PORT=8085 \
      PLAYER_PUBLIC_PATH=http://localhost:8088/ \
      npm run dev:devtool:web-components \
    ',
    prefixColor: 'cyan.bold',
  },
  {
    name: 'Player Web components',
    command: '\
      PORT=8086 \
      npm run dev:player:web-components \
    ',
    prefixColor: 'cyan.bold',
  },
];

concurrently(commands, {
  killOthers: Array.from({ length: commands.length }, () => 'failure'),
});
