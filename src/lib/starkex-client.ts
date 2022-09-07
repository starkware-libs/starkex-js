import {StarkErrorCode} from './common';
import {GatewayRequestType} from './gateway/gateway-request-type';
import {AvailabilityGateway, FeederGateway, Gateway} from './index';

class StarkExClient {
  public static readonly StarkErrorCode = StarkErrorCode;
  public static readonly GatewayRequestType = GatewayRequestType;

  public gateway: Gateway;
  public feederGateway: FeederGateway;

  constructor(config: StarkExClientConfig) {
    this.gateway = new Gateway(config);
    this.feederGateway = new FeederGateway(config);
  }
}

interface StarkExClientConfig {
  endpoint: string;
  certs?: StarkExCertsConfig;
}

type StarkExCertsConfig = {
  cert: string;
  key: string;
  ca?: string;
};

export {StarkExClient, StarkExClientConfig, StarkExCertsConfig};
