/* eslint-disable @typescript-eslint/no-explicit-any */
import { isClient } from '@vueuse/core';

export const isServer = !isClient;

const REAL_DEVICE_USER_AGENT = isClient ? window.navigator.userAgent : '';

enum UserAgent {
  WebOS,
  TizenOS,
  iOS,
  Android,
  Mobile,
}

export const isDevtoolMode = Boolean(process.env.IS_DEVTOOL);

const userAgentMap = {
  [UserAgent.Mobile]: 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Mobile Safari/537.36',
  [UserAgent.iOS]: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
  [UserAgent.Android]: 'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36',
  [UserAgent.WebOS]: 'Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.128 Safari/537.36 HbbTV/1.6.1 (+DRM; LGE; OLED77C34LA; WEBOS23 03.11.10; W23_O22N; DTV_W23O;)',
  [UserAgent.TizenOS]: 'Mozilla/5.0 (SMART-TV; LINUX; Tizen 3.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/3.0 TV Safari/538.1',
};

const getUserAgent = () => {
  return REAL_DEVICE_USER_AGENT;
};

const INSTALLED_USER_AGENT = getUserAgent();

export const isTouchDevice = isClient ? Reflect.has(window, 'ontouchstart') : false;
export const isWebOS = isClient ? Reflect.has(window, 'PalmSystem') : false;

export const isDev = process.env.NODE_ENV === 'development';

const webOSDeviceInfo = isClient && window.PalmSystem ? JSON.parse(window.PalmSystem.deviceInfo) : {};

export const isWebOSSimulator = isClient
  ? webOSDeviceInfo.modelName?.toLowerCase().includes('simulator')
  : false;

export const isTizenOS = isClient ? /Tizen/.test(INSTALLED_USER_AGENT) : false;

const isMac = isClient ? /Macintosh/i.test(INSTALLED_USER_AGENT) : false;

const isIpad = isClient ? isMac && isTouchDevice : false;

export const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(INSTALLED_USER_AGENT) || isIpad;


export const isIOS = /iPad|iPhone|iPod/.test(INSTALLED_USER_AGENT);

export const isFirefox = /Firefox|FxiOS/i.test(INSTALLED_USER_AGENT);
export const isChrome = isClient ? 'chrome' in window : false;

export const isIOSChrome = isClient ? INSTALLED_USER_AGENT.match('CriOS') : false;
export const isDesktop = !isMobile;

const getIOSVersion = () => {
  if (isIOS) {
    const v = (navigator.userAgent).match(/OS (\d+)_(\d+)_?(\d+)?/);

    if (!v) {
      return 0;
    }

    const major = parseInt(v[1], 10);
    const minor = parseInt(v[2], 10);

    return parseFloat(String(major) + '.' + String(minor));
  }

  return 0;
};

export const iOSVersion = isClient ? getIOSVersion() : 0;

if (isIOS) {
  console.info('%c INFO', 'color: #33f', 'Detected iOS version - ' + iOSVersion);
}

export const isSafari = Boolean(
  isClient ?
    window.navigator.vendor &&
    window.navigator.vendor.indexOf('Apple') > -1 &&
    INSTALLED_USER_AGENT &&
    INSTALLED_USER_AGENT.indexOf('CriOS') == -1 &&
    INSTALLED_USER_AGENT.indexOf('FxiOS') == -1 : false,
);

export const CSSSupportMap: Record<string, boolean> = {
  HasSelector: isClient ? typeof CSS !== 'undefined' && CSS.supports('selector(:has(*))') : false,
};

export function ensurePromiseExist(promise?: Promise<void>): Promise<void> | undefined {
  if (promise) {
    return promise;
  }

  return undefined;
}

export function getPlatformName(): string {
  if (isWebOSSimulator) {
    return 'WebOS Simulator';
  }

  if (isTizenOS) {
    return 'TizenOS';
  }

  if (isWebOS) {
    return 'WebOS';
  }

  return 'Web';
}
