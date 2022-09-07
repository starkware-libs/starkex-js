import {apiRequest, capitalize, getLogger, ILogger} from '../utils';
import {
  ApiGatewayPath,
  ApiVersion,
  mapApiVersionToUrlPrefix
} from '../utils/api-versioning';
import {StarkExCertsConfig, StarkExClientConfig} from './starkex-client';
import {Method} from 'axios';

class GatewayBase {
  protected logger: ILogger;
  private readonly endpoint: string;
  private readonly certs: StarkExCertsConfig;

  constructor(
    config: StarkExClientConfig,
    private readonly path: ApiGatewayPath
  ) {
    const {endpoint, certs} = config;
    this.endpoint = endpoint;
    this.certs = certs;

    this.initLogger(this.getEndpoint());
  }

  private getEndpoint(options?: {version: ApiVersion}) {
    const version =
      options?.version === undefined
        ? this.path.defaultVersion
        : options.version;

    return [
      this.endpoint,
      mapApiVersionToUrlPrefix[version],
      this.path.gatewayRoute
    ]
      .filter(a => !!a)
      .join('/');
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
    data?: Record<string, any>,
    version?: ApiVersion
  ): Promise<any> {
    try {
      this.logger.debug(`Sending request to ${path}`, data);
      const response = await apiRequest({
        path: `${this.getEndpoint({version})}/${path}`,
        method,
        data,
        certs: this.certs
      });
      this.logger.debug('Response success:', response.data);
      return response.data;
    } catch (err) {
      this.logger.error('Error in response:', err.response?.data?.message);
      return Promise.reject(err.response?.data);
    }
  }
}

export {GatewayBase};
