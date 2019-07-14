import axios from 'axios';
import pick from 'lodash.pick';

const SYNONIM_API = 'https://api.datamuse.com/words?rel_syn='

let axiosInstance = axios.create();

export const makeRequest = (method, url, options = {}) => {
  const { data, params } = options;
  const headers = { ...axiosInstance.defaults.headers, ...options.headers };

  return axiosInstance({ method, url, data, params, headers })
    .then(response => pick(response, ['data', 'status']));
};

export const get = (url, config) => makeRequest('get', url, config);

export const getSynonim = (word) => makeRequest('get', SYNONIM_API + word);

export default axiosInstance;