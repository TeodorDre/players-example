/* eslint-disable no-console */
const { spawnSync } = require('child_process');

const mainPublicPath = '';

const execBuildStep = ({ stepName, command, processEnv }) => {
  console.log(`[Staging combined] ${stepName}`);

  const cleanResult = spawnSync(command, {
    cwd: process.cwd(),
    env: processEnv,
    encoding: 'utf-8',
    shell: true,
  });

  console.log(cleanResult.stdout);
  console.error(cleanResult.stderr);

  if (cleanResult.status === 1 || cleanResult.status === 2) {
    process.exit(1);
  }
};

execBuildStep({
  stepName: 'Build web web player',
  command: 'npm run build:player:web',
  processEnv: Object.assign({}, process.env, {
    APPLICATION_MODE: 'staging',
    OUTPUT_PATH: '/player/web/',
    PUBLIC_PATH: mainPublicPath + '/player/web/',
  }),
});

execBuildStep({
  stepName: 'Build web web devTool',
  command: 'npm run build:devtool:web',
  processEnv: Object.assign({}, process.env, {
    OUTPUT_PATH: '/devtool/web/',
    PUBLIC_PATH: mainPublicPath + '/devtool/web/',
    PLAYER_PUBLIC_PATH: mainPublicPath + '/player/web/',
  }),
});

execBuildStep({
  stepName: 'Build web SmartTV player',
  command: 'npm run build:player:smart',
  processEnv: Object.assign({}, process.env, {
    APPLICATION_MODE: 'staging',
    OUTPUT_PATH: '/player/smart/',
    PUBLIC_PATH: mainPublicPath + '/player/smart/',
  }),
});

execBuildStep({
  stepName: 'Build web SmartTV devTool',
  command: 'npm run build:devtool:smart',
  processEnv: Object.assign({}, process.env, {
    OUTPUT_PATH: '/devtool/smart/',
    PUBLIC_PATH: mainPublicPath + '/devtool/smart/',
    PLAYER_PUBLIC_PATH: mainPublicPath + '/player/smart/',
  }),
});

execBuildStep({
  stepName: 'Build web components player',
  command: 'npm run build:player:web-components',
  processEnv: Object.assign({}, process.env, {
    APPLICATION_MODE: 'staging',
    OUTPUT_PATH: '/player/web-components/',
    PUBLIC_PATH: mainPublicPath + '/player/web-components/',
  }),
});

execBuildStep({
  stepName: 'Build web components devTool',
  command: 'npm run build:devtool:web-components',
  processEnv: Object.assign({}, process.env, {
    OUTPUT_PATH: '/devtool/web-components/',
    PUBLIC_PATH: mainPublicPath + '/devtool/web-components/',
    PLAYER_PUBLIC_PATH: mainPublicPath + '/player/web-components/',
  }),
});

execBuildStep({
  stepName: 'Build web embed player',
  command: 'npm run build:player:embed',
  processEnv: Object.assign({}, process.env, {
    APPLICATION_MODE: 'staging',
    OUTPUT_PATH: '/player/embed/',
    PUBLIC_PATH: mainPublicPath + '/player/embed/',
  }),
});

execBuildStep({
  stepName: 'Build web-embed devtool',
  command: 'npm run build:devtool:embed',
  processEnv: Object.assign({}, process.env, {
    OUTPUT_PATH: '/devtool/embed/',
    PUBLIC_PATH: mainPublicPath + '/devtool/embed/',
    PLAYER_PUBLIC_PATH: mainPublicPath + '/player/embed/',
  }),
});

// Combined

execBuildStep({
  stepName: 'Build combined devtool',
  command: 'npm run build:devtool:combined',
  processEnv: Object.assign({}, process.env, {
    OUTPUT_PATH: '/devtool/combined/',
    PUBLIC_PATH: mainPublicPath + '/devtool/combined/',
    EMBED_DEVTOOL_PUBLIC_PATH: mainPublicPath + '/devtool/embed/',
    WEB_DEVTOOL_PUBLIC_PATH: mainPublicPath + '/devtool/web/',
    WEB_COMPONENTS_DEVTOOL_PUBLIC_PATH: mainPublicPath + '/devtool/web-components/',
    SMART_DEVTOOL_PUBLIC_PATH: mainPublicPath + '/devtool/smart/',
  }),
});
