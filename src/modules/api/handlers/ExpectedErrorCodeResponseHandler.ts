import BadResponseError from '../errors/BadResponseError';
import IResponseHandler from './IResponseHandler';

export default class ExpectedErrorCodeResponseHandler implements IResponseHandler<Response> {
  public async handleResponse(response: Response) {
    if (!response.ok) {
      throw new BadResponseError(response);
    }

    return response;
  }
}
