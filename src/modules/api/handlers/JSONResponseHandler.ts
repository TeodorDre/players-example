import JSONResponseParseError from '../errors/JSONResponseParseError';
import ExpectedErrorCodeResponseHandler from './ExpectedErrorCodeResponseHandler';
import IResponseHandler from './IResponseHandler';

export default class JSONResponseHandler<TData> implements IResponseHandler<TData> {
  private expectedErrorCodeResponseHandler = new ExpectedErrorCodeResponseHandler();

  public async handleResponse(response: Response) {
    const { expectedErrorCodeResponseHandler } = this;

    const handledResponse = await expectedErrorCodeResponseHandler.handleResponse(response);

    try {
      const data: TData = await handledResponse.json();

      return data;
    } catch (err) {
      throw new JSONResponseParseError(handledResponse, err);
    }
  }
}
