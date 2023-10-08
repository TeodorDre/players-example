import TextResponseHandler from '../handlers/TextResponseHandler';
import GetRequest from './GetRequest';

export default abstract class GetTextResponseRequest extends GetRequest<string> {
  protected responseHandler = new TextResponseHandler();
}
