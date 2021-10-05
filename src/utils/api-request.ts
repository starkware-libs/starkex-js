import {StarkExCertsConfig} from '../lib';
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  Method
} from 'axios';

// // we communicate with JSON
const DEFAULT_HEADERS: Record<string, unknown> = {
  'Content-Type': 'application/json'
};

// on each request we need to send auth headers
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const customHeaders: any = {};
    Object.assign(config.headers, customHeaders);
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

/**
 * on each response we need to grab the auth headers
 * and persist it to a local storage
 */
axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => Promise.reject(error)
);

/**
 *  helper method to perform an api requests
 */
export const apiRequest = async ({
  path,
  method = 'GET',
  data,
  headers = {},
  certs
}: {
  path: string;
  method?: Method;
  data?: any;
  headers?: Record<string, string>;
  certs?: StarkExCertsConfig;
}): Promise<AxiosResponse> => {
  try {
    let httpsAgent;
    if (certs) {
      /* eslint-disable-next-line @typescript-eslint/no-var-requires */
      const https = require('https');
      httpsAgent = new https.Agent({rejectUnauthorized: false, ...certs});
    }
    return await axios({
      url: path,
      method,
      data: data || {},
      headers: Object.assign({}, DEFAULT_HEADERS, headers),
      httpsAgent
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
