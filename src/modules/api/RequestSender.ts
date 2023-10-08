import RequestNetworkProblemError from './errors/RequestNetworkProblemError';
import RequestTimeoutError from './errors/RequestTimeoutError';

export default abstract class RequestSender {
  public static async sendRequest(url: string, requestInit: RequestInit, timeout: number) {
    let response: Response;
    try {
      response = await Promise.race([
        window.fetch(url, requestInit),

        new Promise<never>((_, rej) => {
          window.setTimeout(() => {
            rej(new RequestTimeoutError(url, requestInit, timeout));
          }, timeout);
        }),
      ]);
    } catch (err) {
      if (err instanceof RequestTimeoutError) {
        throw err;
      }

      throw new RequestNetworkProblemError(url, requestInit, err);
    }

    return response;
  }
}
