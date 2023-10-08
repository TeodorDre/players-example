import JSONResponseHandler from '../handlers/JSONResponseHandler';
import GetRequest from './GetRequest';

export default abstract class GetJSONRequest<TData> extends GetRequest<TData> {
  protected responseHandler = new JSONResponseHandler<TData>();
}
