import '@/player/versions/web-components/registrations';

import { createApp } from 'vue';

import App from './App.vue';

function main() {
  const app = createApp(App);
  app.mount('#app');
}

main();
