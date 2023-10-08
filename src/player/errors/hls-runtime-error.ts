import { ErrorData } from 'hls.js';

import { ApplicationError } from '@/player/errors/application-error';

const toString = (data?: ErrorData) => {
  return `${data?.event}:${data?.details} - ${data?.error?.message}`;
};

export enum HlsPlayerErrorLevel {
  Warning,
  Critical
}

export class HlsRuntimeError extends ApplicationError {
  public readonly name = 'HlsRuntimeError';

  constructor(data: ErrorData) {
    super(toString(data));
  }

  public get level(): HlsPlayerErrorLevel {
    return HlsPlayerErrorLevel.Critical;
  }
}
