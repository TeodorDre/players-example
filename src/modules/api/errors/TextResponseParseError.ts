import ResponseParseError from './ResponseParseError';

export default class TextResponseParseError extends ResponseParseError {
  public name = 'TextResponseParseError';

  public constructor(public response: Response, public originalError: unknown) {
    super(response, originalError);
  }
}
