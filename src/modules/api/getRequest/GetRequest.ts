import IResponseHandler from '../handlers/IResponseHandler';
import RequestSender from '../RequestSender';

export default abstract class GetRequest<TData> {
  protected abstract url: string;

  protected requestInitPart: Omit<RequestInit, 'method'> = {};

  protected timeout = 15000;

  protected abstract responseHandler: IResponseHandler<TData>;

  private get requestInit(): RequestInit {
    const { requestInitPart } = this;

    return {
      ...requestInitPart,
      method: 'GET',
    };
  }

  public async send() {
    const { url, requestInit, timeout, responseHandler } = this;

    const response = await RequestSender.sendRequest(url, requestInit, timeout);

    const data = await responseHandler.handleResponse(response);

    return data;
  }
}
