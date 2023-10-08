import AppPlayerButton from '@/player/versions/web-components/components/app-player-button';
import AppPlayerTitle from '@/player/versions/web-components/components/app-player-title';

function main() {
  window.customElements.define('app-player-title', AppPlayerTitle);
  window.customElements.define('app-player-button', AppPlayerButton, { extends: 'button' });
}

main();
