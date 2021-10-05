import {apiRequest, capitalize, getLogger, ILogger} from '../utils';
import {StarkExCertsConfig, StarkExClientConfig} from './starkex-client';
import {Method} from 'axios';

class GatewayBase {
  protected logger: ILogger;
  private readonly endpoint: string;
  private readonly certs: StarkExCertsConfig;

  constructor(config: StarkExClientConfig, path: string) {
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
      const response = await apiRequest({
        path: `${this.endpoint}/${path}`,
        method,
        data,
        certs: this.certs
      });
      this.logger.debug('Response success:', response.data);
      return response.data;
    } catch (err) {
      this.logger.error('Error in response:', err.message);
      return err;
    }
  }
}

export {GatewayBase};
