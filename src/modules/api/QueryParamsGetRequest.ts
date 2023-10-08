import GetJSONRequest from './getRequest/GetJSONRequest';

export default abstract class QueryParamGetRequest<TData> extends GetJSONRequest<TData> {
  protected abstract baseUrl: string;

  protected abstract queryParams: Record<string, string | number | undefined>;

  protected get url() {
    const { baseUrl, queryParams } = this;

    const searchString = Object.keys(queryParams).reduce((prevVal, queryParamKey) => {
      const queryParamValue = queryParams[queryParamKey];

      if (queryParamValue === undefined) {
        return prevVal;
      }

      return `${prevVal}${prevVal ? '&' : '?'}${queryParamKey}=${queryParamValue}`;
    }, '');

    return `${baseUrl}${searchString}`;
  }
}
