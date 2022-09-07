import {apiRequest, capitalize, getLogger, ILogger} from '../utils';
import {StarkExCertsConfig, StarkExGatewayConfig} from './starkex-client';
import {Method} from 'axios';

class GatewayBase {
  protected logger: ILogger;
  private readonly endpoint: string;
  private readonly certs: StarkExCertsConfig;

  constructor(config: StarkExGatewayConfig, path: string) {
    const {endpoint, certs} = config;
    this.initLogger(path);
    this.endpoint = `${endpoint}${path}`;
    if (certs) {
      this.certs = certs;
    }
  }

  private initLogger(path: string): void {
    const pathSlices = path.split('/');
    const rawName = pathSlices[pathSlices.length - 1];
    const name = rawName
      .split('_')
      .map(s => capitalize(s))
      .join(' ');
    this.logger = getLogger(name);
    this.logger.debug('Initialized');
  }

  protected async makeRequest(
    path: string,
    method?: Method,
    data?: Record<string, any>
  ): Promise<any> {
    try {
      this.logger.debug(`Sending request to ${path}`, data);
      path = `${this.endpoint}/${path}`;
      // path = 'https://av-gw.playground-v2.starkex.co/availability_gateway/is_alive'
      // path = 'https://av-gw.playground-v2.starkex.co/v2/gateway/is_alive'
      console.log({path});
      const response = await apiRequest({
        path,
        method,
        data,
        certs: this.certs
      });
      this.logger.debug('Response success:', response.data);
      return response.data;
    } catch (err) {
      console.log(6666, err.toJSON());
      this.logger.error('Error in response:', err.response?.data?.message);
      return Promise.reject(err.response?.data);
    }
  }
}

export {GatewayBase};
