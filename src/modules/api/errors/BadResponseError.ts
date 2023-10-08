import { ApplicationError } from '@/player/errors/application-error';

export default class BadResponseError extends ApplicationError {
  public name = 'BadResponseError';

  public constructor(public response: Response) {
    super(`Get bad response when performing ${response.url} request: ${response.status}`);
  }
}
