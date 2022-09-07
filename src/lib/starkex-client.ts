import {StarkErrorCode} from './common';
import {GatewayRequestType} from './gateway/gateway-request-type';
import {AvailabilityGateway, FeederGateway, Gateway} from './index';

class StarkExClient {
  public static readonly StarkErrorCode = StarkErrorCode;
  public static readonly GatewayRequestType = GatewayRequestType;

  public gateway: Gateway;
  public feederGateway: FeederGateway;
  public availabilityGateway: AvailabilityGateway;

  constructor(config: StarkExClientConfig) {
    this.gateway = new Gateway(config.gateway);
    this.feederGateway = new FeederGateway(config.gateway);
    this.availabilityGateway = new AvailabilityGateway(
      config.availabilityGateway
    );
  }
}

interface StarkExClientConfig {
  gateway: StarkExGatewayConfig;
  availabilityGateway?: StarkExAvailabilityGatewayConfig;
}

interface StarkExGatewayConfig {
  endpoint: string;
  certs?: StarkExCertsConfig;
}

interface StarkExAvailabilityGatewayConfig extends StarkExGatewayConfig {
  certs: StarkExCertsConfig;
}

interface StarkExCertsConfig {
  cert: string;
  key: string;
  ca?: string;
}

export {
  StarkExClient,
  StarkExClientConfig,
  StarkExGatewayConfig,
  StarkExCertsConfig
};
