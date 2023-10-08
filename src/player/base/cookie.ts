export const VIDEO_PLAYER_COOKIE_NAMESPACE = 'player';

export enum CookieKey {
  VideoVolume = 'volume',
  VideoQuality = 'quality',
  WelcomeTooltipCountState = 'welcome-tooltip',
  CreateKinomCountState = 'create-kinom',
}

export function getCookieByName(name: CookieKey, defaultValue: string): string;
export function getCookieByName(name: CookieKey, defaultValue?: string): string | undefined {
  const nameEQ = `${VIDEO_PLAYER_COOKIE_NAMESPACE}.${name}=`;
  const ca = document.cookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }

  if (defaultValue) {
    return defaultValue;
  }

  return undefined;
}
