interface IRequestOptions {
  method: string;
  headers: Headers;
  body?: string | undefined;
}

export const sendRequest = async (
  url: string,
  requestMethod: Object,
  payload: string | File | number | object = '',
  _headers: Headers
) => {
  const requestOptions: IRequestOptions = {
    method: `${requestMethod}`,
    headers: _headers,
  };

  if (requestMethod != 'GET') {
    requestOptions.body = JSON.stringify(payload);
  }

  return (await fetch(url, requestOptions)).json();
};
