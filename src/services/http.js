import superagent from 'superagent';
import prefix from 'superagent-prefix';

import JWT from './jwtMiddleware';

const request = superagent.agent();

let baseApi;
if (process.env.NODE_ENV === 'production') {
  baseApi = '/api';
} else {
  baseApi = 'http://localhost:1337';
}
request.use(prefix(baseApi));
// Retrieve the jwt from localstorage
request.use(JWT());

export default request;
