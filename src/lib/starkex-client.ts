import {AvailabilityGateway, FeederGateway, Gateway, StarkExUtils} from './index';

class StarkExClient {
  public static readonly StarkErrorCode = StarkExUtils.StarkErrorCode;

  public gateway: Gateway;
  public feederGateway: FeederGateway;
  public availabilityGateway: AvailabilityGateway;

  constructor(config: StarkExClientConfig) {
    this.gateway = new Gateway(config);
    this.feederGateway = new FeederGateway(config);
    this.availabilityGateway = new AvailabilityGateway(config);
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
