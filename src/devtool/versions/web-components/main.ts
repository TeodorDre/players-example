import '@/player/versions/web-components/components/app-element';

import { createApp } from 'vue';

import App from './App.vue';

function main() {
  const app = createApp(App);
  app.mount('#app');
}

main();
