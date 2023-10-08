import TextResponseParseError from '../errors/TextResponseParseError';
import ExpectedErrorCodeResponseHandler from './ExpectedErrorCodeResponseHandler';
import IResponseHandler from './IResponseHandler';

export default class TextResponseHandler implements IResponseHandler<string> {
  private expectedErrorCodeResponseHandler = new ExpectedErrorCodeResponseHandler();

  // eslint-disable-next-line class-methods-use-this
  public async handleResponse(response: Response) {
    const { expectedErrorCodeResponseHandler } = this;

    const handledResponse = await expectedErrorCodeResponseHandler.handleResponse(response);

    try {
      const data = await handledResponse.text();

      return data;
    } catch (err) {
      throw new TextResponseParseError(handledResponse, err);
    }
  }
}
