import IResponseHandler from '../handlers/IResponseHandler';
import RequestSender from '../RequestSender';

export default abstract class PostFormDataRequest<TData> {
  protected abstract url: string;

  protected abstract body: Record<string, string | Blob>;

  protected abstract responseHandler: IResponseHandler<TData>;

  protected timeout = 15000;

  private get requestInit(): RequestInit {
    const { body } = this;

    const formData = new FormData();
    Object.entries(body).forEach(([key, value]) => {
      formData.append(key, value);
    });

    return {
      method: 'POST',
      body: formData,
    };
  }

  public async send() {
    const { url, requestInit, timeout, responseHandler } = this;

    const response = await RequestSender.sendRequest(url, requestInit, timeout);

    const data = await responseHandler.handleResponse(response);

    return data;
  }
}
