const concurrently = require('concurrently');

const commands = [
  {
    name: 'Devtool Viju Embed',
    command: '\
      PORT=8080 \
      PLAYER_PUBLIC_PATH=http://localhost:8081/ \
      npm run dev:devtool:embed \
    ',
    prefixColor: 'cyan.bold',
  },
  {
    name: 'Devtool Viju Embed',
    command: '\
      PORT=8081 \
      npm run dev:player:embed \
    ',
    prefixColor: 'blue.bold',
  },
];

concurrently(commands, {
  killOthers: Array.from({ length: commands.length }, () => 'failure'),
});
