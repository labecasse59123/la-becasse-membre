import superagent from 'superagent';
import prefix from 'superagent-prefix';

const request = superagent.agent();

let baseApi;
if (process.env.NODE_ENV === 'production') {
  baseApi = '/api';
} else {
  baseApi = 'http://localhost:9000/api';
}
request.use(prefix(baseApi));

export default request;
