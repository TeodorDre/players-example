import 'whatwg-fetch';

import { isClient } from '@vueuse/core';
import ResizeObserver from 'resize-observer-polyfill';

import { getOfferText, getPlayButtonText } from '@/player/modules/content/player-texts';
import useContentAvailability from '@/player/modules/content/use-availability';
import { useCurrentPlayer } from '@/player/modules/instance/player';
import { OfferTextType } from '@/player/modules/session/offer';
import { SmartTvVijuPlayer } from '@/player/versions/smart';
import { WebVijuPlayer } from '@/player/versions/web';

if (isClient) {
  if (!window.ResizeObserver) {
    window.ResizeObserver = ResizeObserver;
  }
}

if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function(str, newStr){
    // If a regex pattern
    if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
      return this.replace(str, newStr as string);
    }

    // If a string
    return this.replace(new RegExp(str, 'g'), newStr as string);
  };
}

export {
  getOfferText,
  getPlayButtonText,
  OfferTextType,
  SmartTvVijuPlayer,
  useContentAvailability,
  useCurrentPlayer,
  WebVijuPlayer,
};
