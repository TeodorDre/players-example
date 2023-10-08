import { toPercent, toPixel } from '@/player/base/dom';
import { t } from '@/player/modules/localization/translate';

declare module '*.vue' {
  import { ComponentPublicInstance } from 'vue';

  declare const component: ComponentPublicInstance;

  export default component;
}

declare global {
  interface HTMLVideoElement {
    requestPictureInPicture: () => Promise<void>;
  }

  interface HTMLElement {
    msRequestFullscreen?: () => Promise<void>;
    mozRequestFullScreen?: () => Promise<void>;
    webkitRequestFullscreen?: () => Promise<void>;
    webkitEnterFullScreen: (() => void) | undefined;
  }

  interface Document {
    webkitDisplayingFullscreen?: boolean;
    webkitIsFullscreen?: boolean;
    mozFullScreenElement?: HTMLElement;
    pictureInPictureEnabled: boolean;
    exitPictureInPicture: () => Promise<void>;
    mozCancelFullScreen?: () => Promise<void>;
    msExitFullscreen?: () => Promise<void>;
    webkitExitFullscreen?: () => Promise<void>
    webkitFullscreenElement?: HTMLElement;
  }

  interface Window {
    $setActiveNavigationItem(element?: HTMLElement): void;
    $setOnPressBckCallback(callback?: VoidFunction, reset = false): void;

    tizen?: unknown;
    webapis?: unknown;
    PalmSystem?: {
      deviceInfo: string;
      [key: string]: unknown;
    };
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $t: typeof t;
    $toPixel: typeof toPixel;
    $toPercent: typeof toPercent;
    $isMobile: boolean;
    $isDesktop: boolean;
    $iOS: boolean;
    $isWebOS: boolean;
    $isTizenOS: boolean;
    $isSafari: boolean;
    $isChrome: boolean;
    $isClient: boolean;
    $isServer: boolean;
    $isFirefox: boolean;
    $smallViewBreakpointPx: number;
    $isNativeTitleTooltipShown: boolean;
  }
}

export {};
