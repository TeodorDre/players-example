import IResponseHandler from '../handlers/IResponseHandler';
import RequestSender from '../RequestSender';

export default abstract class PostRequest<TData> {
  protected abstract url: string;

  protected abstract body: unknown;

  protected abstract responseHandler: IResponseHandler<TData>;

  protected additionalHeaders: Record<string, string> = {};

  protected timeout = 15000;

  private get requestInit(): RequestInit {
    const { body, additionalHeaders } = this;

    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...additionalHeaders,
      },
      body: JSON.stringify(body),
    };
  }

  public async send() {
    const { url, requestInit, timeout, responseHandler } = this;

    const response = await RequestSender.sendRequest(url, requestInit, timeout);

    const data = await responseHandler.handleResponse(response);

    return data;
  }
}
