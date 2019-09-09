import superagent from 'superagent';
import prefix from 'superagent-prefix';

const request = superagent.agent();

request.use(prefix('http://localhost:9000/api'));

export default request;
