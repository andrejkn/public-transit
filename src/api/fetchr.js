import { fromJS } from 'immutable';

const defaultOptions = fromJS({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

function checkStatus(response) {
  const HTTP_SUCCESS = 200;
  const HTTP_REDIRECTION = 300;
  if (response.status >= HTTP_SUCCESS && response.status < HTTP_REDIRECTION) {
    return response;
  }

  const error = new Error(response.statusText);
  const responseObj = response ? { response: response } : {};
  const errorWithResponse = Object.assign({}, error, responseObj);
  throw errorWithResponse;
}

function fetchr(
  endpoint,
  _options = defaultOptions,
  setHeaders = () => {}
) {
  const options = _options.toJS();
  return fetch(`${endpoint}`, options)
    .then((res) => {
      // Pass the response headers to the caller
      setHeaders(res.headers);
      return res;
    })
    .then(checkStatus)
    .then(res => res.json());
}

export function get(endpoint, config = {}, setHeaders = () => {}) {
  const options = defaultOptions
    .mergeDeep(fromJS(config))
    .set('method', 'GET');

  return fetchr(endpoint, options, setHeaders);
}

export function post(endpoint, body = {}, config = {}) {
  const options = defaultOptions
    .mergeDeep(fromJS(config))
    .set('method', 'POST')
    .set('body', JSON.stringify(body));

  return fetchr(endpoint, options);
}

export function put(endpoint, body = {}, config = {}) {
  const options = defaultOptions
    .mergeDeep(fromJS(config))
    .set('method', 'PUT')
    .set('body', JSON.stringify(body));

  return fetchr(endpoint, options);
}

export function destroy(endpoint, config = {}) {
  const options = defaultOptions
    .mergeDeep(fromJS(config))
    .set('method', 'DELETE');

  return fetchr(endpoint, options);
}
