import { ApplicationError } from '@/player/errors/application-error';

const name = 'RequestConfigurationError';

export default class RequestConfigurationError extends ApplicationError {
  public name = name;

  public constructor(public url: string, public requestInit: RequestInit, public originalError: unknown) {
    super('Request configuration error');
  }
}
